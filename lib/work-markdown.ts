import { SITE_URL } from "@/lib/site";
import type { CaseStudy } from "@/lib/work";

export function caseStudyMarkdownPath(slug: string): string {
  return `/work/${slug}.md`;
}

// Plain-markdown version of a case study for "Copy page" and /work/<slug>.md.
// The MDX bodies contain no JSX, so the content is passed through as-is
// (mermaid blocks stay as fenced code, which LLMs read fine).
export function caseStudyToMarkdown({ meta, content }: CaseStudy): string {
  const details = [
    ["Organisation", meta.organisation],
    ["Role", meta.role],
    ["Duration", meta.duration],
    ["Client", meta.client],
    ["Tags", meta.tags.join(", ")],
  ]
    .filter(([, value]) => value)
    .map(([label, value]) => `- **${label}:** ${value}`);

  const sections = [
    `# ${meta.title}`,
    `> ${meta.summary}`,
    details.join("\n"),
    meta.outcome && `**Outcome:** ${meta.outcome}`,
    meta.nda &&
      "_Some details are omitted or anonymised under a non-disclosure agreement._",
    `Source: ${SITE_URL}/work/${meta.slug}`,
    content.trim(),
  ];

  return sections.filter(Boolean).join("\n\n") + "\n";
}
