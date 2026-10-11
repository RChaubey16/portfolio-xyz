import { notFound } from "next/navigation";

import { SITE_URL } from "@/lib/site";
import { getAllCaseStudies, getCaseStudy } from "@/lib/work";
import { caseStudyToMarkdown } from "@/lib/work-markdown";

// Served publicly at /work/<slug>.md via the rewrite in next.config.ts
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllCaseStudies().map((s) => ({ slug: s.slug }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;

  let study;
  try {
    study = getCaseStudy(slug);
  } catch {
    notFound();
  }

  return new Response(caseStudyToMarkdown(study), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      // Point search engines at the HTML page so the two don't compete
      Link: `<${SITE_URL}/work/${slug}>; rel="canonical"`,
    },
  });
}
