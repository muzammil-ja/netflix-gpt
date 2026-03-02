import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vjjoaalvnplfwxlmpwki.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqam9hYWx2bnBsZnd4bG1wd2tpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYyMTcxNDIsImV4cCI6MjA4MTc5MzE0Mn0.W_JDm2-OqUYNq-dNckeuStak7-JzYGlggyMfJVyrIKw";

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);
