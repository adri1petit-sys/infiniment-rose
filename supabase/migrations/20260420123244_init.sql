-- Infiniment Rose — schéma initial.
-- Tables : participants (inscrits HelloAsso), donations (dons libres), volunteers (candidatures).
-- Toutes en RLS ; exposition publique via une vue et une fonction agrégée.

create extension if not exists pgcrypto;

-- =========================================================================
-- Tables
-- =========================================================================

create table public.participants (
  id                  uuid primary key default gen_random_uuid(),
  first_name          text not null check (char_length(first_name) between 1 and 50),
  last_name_initial   text check (char_length(last_name_initial) between 1 and 2),
  email_hash          text not null check (char_length(email_hash) = 64),
  helloasso_order_id  text unique,
  amount_cents        integer not null check (amount_cents >= 2000),
  display_public      boolean not null default true,
  created_at          timestamptz not null default now()
);

create index participants_created_at_desc_idx on public.participants (created_at desc);
create index participants_email_hash_idx      on public.participants (email_hash);

create table public.donations (
  id                  uuid primary key default gen_random_uuid(),
  first_name          text check (char_length(first_name) between 1 and 50),
  amount_cents        integer not null check (amount_cents >= 100),
  message             text check (char_length(message) <= 280),
  helloasso_order_id  text unique,
  display_public      boolean not null default true,
  created_at          timestamptz not null default now()
);

create index donations_created_at_desc_idx on public.donations (created_at desc);

create table public.volunteers (
  id          uuid primary key default gen_random_uuid(),
  first_name  text not null check (char_length(first_name) between 1 and 50),
  last_name   text not null check (char_length(last_name) between 1 and 80),
  email       text not null check (char_length(email) between 5 and 255),
  phone       text check (char_length(phone) <= 30),
  slots       text[] not null default '{}'::text[],
  message     text check (char_length(message) <= 500),
  created_at  timestamptz not null default now()
);

create unique index volunteers_email_unique_idx on public.volunteers (lower(email));

-- =========================================================================
-- RLS — par défaut tout est bloqué pour anon.
-- Les inserts inscrits/dons passent par service_role (webhook HelloAsso).
-- =========================================================================

alter table public.participants enable row level security;
alter table public.donations    enable row level security;
alter table public.volunteers   enable row level security;

-- Le formulaire bénévole est public : anon peut insérer (pas lire).
create policy "anon insert volunteers"
  on public.volunteers
  for insert
  to anon
  with check (true);

-- Policy SELECT sur lignes publiques uniquement (consommée par la vue ci-dessous).
create policy "anon read public participants"
  on public.participants
  for select
  to anon
  using (display_public);

create policy "anon read public donations"
  on public.donations
  for select
  to anon
  using (display_public);

-- =========================================================================
-- Exposition publique
-- =========================================================================

-- Mur public (inscriptions + dons libres). security_invoker = true pour que la vue
-- hérite des RLS des tables — pas de contournement silencieux.
create or replace view public.v_wall_entries
with (security_invoker = true) as
  select
    'participant'::text                                 as kind,
    case when display_public then first_name end        as first_name,
    case when display_public then last_name_initial end as last_name_initial,
    amount_cents,
    null::text                                          as message,
    created_at
  from public.participants
  where display_public
  union all
  select
    'donation'::text                                    as kind,
    case when display_public then first_name end        as first_name,
    null::text                                          as last_name_initial,
    amount_cents,
    case when display_public then message end           as message,
    created_at
  from public.donations
  where display_public;

-- Stats agrégées pour le compteur + total collecté (en cents).
create or replace function public.get_registration_stats()
returns json
language sql
stable
security invoker
as $$
  select json_build_object(
    'current_participants', (select count(*)::int from public.participants),
    'max_participants',     150,
    'total_collected_cents',
      coalesce((select sum(amount_cents) from public.participants), 0)
      + coalesce((select sum(amount_cents) from public.donations), 0),
    'updated_at', now()
  );
$$;

grant select on public.v_wall_entries                      to anon, authenticated;
grant execute on function public.get_registration_stats()  to anon, authenticated;
