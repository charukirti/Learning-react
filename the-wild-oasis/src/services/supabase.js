
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://ptidnexffkvtctgfumer.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB0aWRuZXhmZmt2dGN0Z2Z1bWVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM0NjA2NTUsImV4cCI6MjA0OTAzNjY1NX0.vVL3bxHS2XcXu0FrpIpe3M1W8CRjnsIArS-n6EVc17c'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase