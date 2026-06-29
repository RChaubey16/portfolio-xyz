import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'

const SHIPPED_DIR = path.join(process.cwd(), 'content/shipped')

export type ShippedItem = {
  text: string
  link?: string
}

export type ShippedEntry = {
  slug: string
  date: string
  title: string
  tags: string[]
  items: ShippedItem[]
}

export function getAllShipped(): ShippedEntry[] {
  if (!fs.existsSync(SHIPPED_DIR)) return []

  const files = fs.readdirSync(SHIPPED_DIR).filter((f) => f.endsWith('.md'))

  return files
    .map((filename) => {
      const slug = filename.replace(/\.md$/, '')
      const raw = fs.readFileSync(path.join(SHIPPED_DIR, filename), 'utf-8')
      const { data } = matter(raw)

      if (!data.date || !data.title) {
        throw new Error(
          `Shipped entry "${slug}" is missing required frontmatter fields (date, title)`,
        )
      }

      return {
        slug,
        date: data.date as string,
        title: data.title as string,
        tags: (data.tags as string[]) ?? [],
        items: (data.items as ShippedItem[]) ?? [],
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
