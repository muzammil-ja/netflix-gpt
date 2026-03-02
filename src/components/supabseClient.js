import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vjjoaalvnplfwxlmpwki.supabase.co";
const supabaseAnonKey =
  "sb_publishable_Mkk32bgaepj2oqUlzgoiNA_036fI5le";

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);
