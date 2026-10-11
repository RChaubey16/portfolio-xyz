import { buildLlmsTxt } from "@/lib/llms";

// Generated at build time from config.json and the case study MDX
export const dynamic = "force-static";

export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
