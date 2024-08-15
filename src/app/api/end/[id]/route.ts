import { NextResponse, NextRequest } from "next/server";
import { createClient } from "@supabase/supabase-js";

type RouteParams = {
  params: {
    id: string;
  };
};

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,

  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export const GET = async (req: NextRequest, route: RouteParams) => {
  const textID: string = route.params.id;
  let { data: headerwithBody, error } = await supabase
    .from("end")
    .select("*")
    ;

    if (error) {
        return NextResponse.json({ error: 'Error fetching data' });
}


};