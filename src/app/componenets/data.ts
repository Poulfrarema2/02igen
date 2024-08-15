import { createClient } from "@supabase/supabase-js";

// Assuming you have already defined the Post type elsewhere in your code
type Post = {
  id: number;
  header_text: string;
  body_text: string;
};

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export const getPostById = async (postId: number): Promise<Post | undefined> => {
  const { data, error } = await supabase
    .from("end") // Correctly use the Post type as the generic argument
    .select('*')
    .eq('id', postId); // Filter by the given ID

  if (error) throw error;
  return data?.[0]; // Return the first matching record or undefined if none found
};