import { NextRequest } from "next/server";

import { supabase } from "@/lib/supabase";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const shouldIncrement = searchParams.get("inc") === "true";

  if (shouldIncrement) {
    const { data, error } = await supabase.rpc("increment_visitors");
    if (error) return Response.json({ error: error.message }, { status: 500 });
    return Response.json({ count: data });
  }

  const { data, error } = await supabase
    .from("site_stats")
    .select("count")
    .eq("id", "visitors")
    .single();

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json({ count: data.count });
}
