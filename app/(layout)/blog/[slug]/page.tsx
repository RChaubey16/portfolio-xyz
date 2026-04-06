import { notFound } from 'next/navigation'
import Link from 'next/link'

import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import { MDXRemote } from 'next-mdx-remote/rsc'

import { PostNav } from '@/components/Blog/PostNav'
import { TOC } from '@/components/Blog/TOC'
import { getAllPosts, getPost } from '@/lib/blog'

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  try {
    const { meta } = getPost(slug)
    return { title: meta.title, description: meta.description }
  } catch {
    return {}
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  let post
  try {
    post = getPost(slug)
  } catch {
    notFound()
  }

  const { meta, content, headings } = post
  const allPosts = getAllPosts()
  const idx = allPosts.findIndex((p) => p.slug === slug)
  const prev = allPosts[idx + 1] ?? null
  const next = allPosts[idx - 1] ?? null

  return (
    <article className="mt-16">
      <Link
        href="/blog"
        className="text-muted-foreground hover:text-foreground mb-8 inline-flex items-center gap-1 text-sm transition-colors"
      >
        ← Back to blog
      </Link>

      <div className="mt-6">
        <p className="text-muted-foreground text-sm">
          {new Date(meta.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}{' '}
          · {meta.readingTime}
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight">{meta.title}</h1>
        <div className="mt-3 flex flex-wrap gap-2">
          {meta.tags.map((tag) => (
            <span
              key={tag}
              className="bg-accent text-accent-foreground rounded-full px-3 py-0.5 text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <TOC headings={headings} />

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        <MDXRemote
          source={content}
          options={
            {
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [
                  rehypeSlug,
                  [rehypeAutolinkHeadings, { behavior: 'wrap' }],
                  [
                    rehypePrettyCode,
                    {
                      themes: {
                        light: 'github-light',
                        dark: 'github-dark',
                      },
                    },
                  ],
                ],
              },
            } as any
          }
        />
      </div>

      <PostNav prev={prev} next={next} />
    </article>
  )
}
