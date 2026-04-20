// Typage du schéma public — miroir de supabase/migrations/20260420123244_init.sql
// À régénérer via `npx supabase gen types typescript --project-id xdckwvjrryqqxjxrvpyf --schema public > src/lib/supabase/types.ts`
// une fois la CLI liée au projet.

export type Database = {
  public: {
    Tables: {
      participants: {
        Row: {
          id: string;
          first_name: string;
          last_name_initial: string | null;
          email_hash: string;
          helloasso_order_id: string | null;
          amount_cents: number;
          display_public: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          first_name: string;
          last_name_initial?: string | null;
          email_hash: string;
          helloasso_order_id?: string | null;
          amount_cents: number;
          display_public?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          first_name?: string;
          last_name_initial?: string | null;
          email_hash?: string;
          helloasso_order_id?: string | null;
          amount_cents?: number;
          display_public?: boolean;
          created_at?: string;
        };
        Relationships: [];
      };
      donations: {
        Row: {
          id: string;
          first_name: string | null;
          amount_cents: number;
          message: string | null;
          helloasso_order_id: string | null;
          display_public: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          first_name?: string | null;
          amount_cents: number;
          message?: string | null;
          helloasso_order_id?: string | null;
          display_public?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          first_name?: string | null;
          amount_cents?: number;
          message?: string | null;
          helloasso_order_id?: string | null;
          display_public?: boolean;
          created_at?: string;
        };
        Relationships: [];
      };
      volunteers: {
        Row: {
          id: string;
          first_name: string;
          last_name: string;
          email: string;
          phone: string | null;
          slots: string[];
          message: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          first_name: string;
          last_name: string;
          email: string;
          phone?: string | null;
          slots?: string[];
          message?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          first_name?: string;
          last_name?: string;
          email?: string;
          phone?: string | null;
          slots?: string[];
          message?: string | null;
          created_at?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      v_wall_entries: {
        Row: {
          kind: "participant" | "donation";
          first_name: string | null;
          last_name_initial: string | null;
          amount_cents: number;
          message: string | null;
          created_at: string;
        };
      };
    };
    Functions: {
      get_registration_stats: {
        Args: Record<string, never>;
        Returns: {
          current_participants: number;
          max_participants: number;
          total_collected_cents: number;
          updated_at: string;
        };
      };
    };
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
