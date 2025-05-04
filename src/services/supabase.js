import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://knwkbzktitcnzdnmbzye.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtud2tiemt0aXRjbnpkbm1ienllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMwNTY5NjksImV4cCI6MjA1ODYzMjk2OX0.D9b9T_Cgk4B4rHg492vm9e80YWPTzt_uQk7Nu8Z4KEQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
