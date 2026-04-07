import type { Metadata } from 'next'

import FadeUp from '@/components/animation/FadeUp'
import { BlogList } from '@/components/Blog/BlogList'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Writing about things I build and learn.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <FadeUp>
      <section className="mt-16">
        <h2 className="text-2xl font-bold">Blog</h2>
        <p className="text-muted-foreground mt-1 text-sm">
          Writing about things I build and learn.
        </p>
        <div className="mt-8">
          <BlogList posts={posts} />
        </div>
      </section>
    </FadeUp>
  )
}
