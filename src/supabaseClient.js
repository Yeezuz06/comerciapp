import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://myxboosmwjcuwrcmskjy.supabase.co'; // Cambia esto
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im15eGJvb3Ntd2pjdXdyY21za2p5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM5NzcyMDEsImV4cCI6MjA0OTU1MzIwMX0.le-7Y3Y9Je4iuwwiXGuzq_a6C54J7zouIQsirZYGxYY'; // Cambia esto
export const supabase = createClient(supabaseUrl, supabaseKey);
