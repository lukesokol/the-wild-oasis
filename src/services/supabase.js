import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://vgaiacpyhbonkhjqggxl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZnYWlhY3B5aGJvbmtoanFnZ3hsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk3MzE2NzksImV4cCI6MjAxNTMwNzY3OX0.M4J2gI4EE7V9qNenhkgHU7cW1yEGLRB9FCNDZAtvlew";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
