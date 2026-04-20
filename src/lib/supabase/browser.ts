import { createBrowserClient } from "@supabase/ssr";
import type { Database } from "./types";
import { requireEnv } from "./env";

export function createSupabaseBrowserClient() {
  return createBrowserClient<Database>(
    requireEnv("NEXT_PUBLIC_SUPABASE_URL"),
    requireEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY"),
  );
}
