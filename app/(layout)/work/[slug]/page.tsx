import { notFound } from "next/navigation";

import { Lock } from "lucide-react";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

import BackLink from "@/components/BackLink";
import { TOC } from "@/components/Blog/TOC";
import CopyPageButton from "@/components/CopyPageButton";
import { MermaidDiagramDynamic } from "@/components/MermaidDiagramDynamic";
import { Badge } from "@/components/ui/badge";
import { remarkMermaid } from "@/lib/remark-mermaid";
import { getAllCaseStudies, getCaseStudy } from "@/lib/work";
import {
  caseStudyMarkdownPath,
  caseStudyToMarkdown,
} from "@/lib/work-markdown";

export async function generateStaticParams() {
  return getAllCaseStudies().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { meta } = getCaseStudy(slug);
    return {
      title: meta.title,
      description: meta.summary,
      alternates: { canonical: `/work/${slug}` },
    };
  } catch {
    return {};
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let study;
  try {
    study = getCaseStudy(slug);
  } catch {
    notFound();
  }

  const { meta, content, headings } = study;

  return (
    <article>
      <div className="flex items-center justify-between gap-4">
        <BackLink href="/work" label="Work" />
        <CopyPageButton
          markdown={caseStudyToMarkdown(study)}
          markdownPath={caseStudyMarkdownPath(slug)}
        />
      </div>

      <header className="mt-8">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="page-title text-3xl leading-tight">{meta.title}</h1>
          {meta.nda && (
            <Badge variant="outline" className="text-muted-foreground">
              <Lock />
              Confidential
            </Badge>
          )}
        </div>

        <dl className="mt-6 grid grid-cols-2 gap-x-8 gap-y-4 rounded-xl border p-5 text-sm sm:grid-cols-4">
          {[
            ["Organisation", meta.organisation],
            ["Role", meta.role],
            ["Duration", meta.duration],
            ["Client", meta.client],
          ].map(([label, value]) => (
            <div key={label}>
              <dt className="text-muted-foreground text-[13px]">{label}</dt>
              <dd className="mt-1 font-medium">{value || "—"}</dd>
            </div>
          ))}
        </dl>

        {meta.outcome && (
          <p className="bg-muted mt-3 rounded-xl px-5 py-4 text-sm font-medium">
            {meta.outcome}
          </p>
        )}

        {meta.nda && (
          <div className="text-muted-foreground mt-3 flex items-start gap-2.5 rounded-xl border px-5 py-4 text-sm">
            <Lock className="mt-0.5 size-4 shrink-0" />
            <p>
              Certain project details — including the client name, specific
              metrics, and proprietary implementation details — have been
              omitted or anonymised in accordance with a non-disclosure
              agreement.
            </p>
          </div>
        )}

        <div className="mt-5 flex flex-wrap items-center gap-1.5">
          {meta.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-normal">
              {tag}
            </Badge>
          ))}
          <span className="text-muted-foreground ml-auto text-[13px]">
            {meta.readingTime}
          </span>
        </div>
      </header>

      <TOC headings={headings} />

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <MDXRemote
          source={content}
          components={{ Mermaid: MermaidDiagramDynamic }}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm, remarkMermaid],
              rehypePlugins: [
                rehypeSlug,
                [rehypeAutolinkHeadings, { behavior: "wrap" }],
                [
                  rehypePrettyCode,
                  {
                    themes: {
                      light: "github-light",
                      dark: "github-dark",
                    },
                  },
                ],
              ],
            },
          }}
        />
      </div>
    </article>
  );
}
