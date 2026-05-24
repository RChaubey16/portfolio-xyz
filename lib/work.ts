import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'
import readingTime from 'reading-time'

const WORK_DIR = path.join(process.cwd(), 'content/work')

export type CaseStudyMeta = {
  slug: string
  title: string
  client: string
  organisation: string
  role: string
  duration: string
  summary: string
  tags: string[]
  nda: boolean
  outcome: string
  readingTime: string
}

export type Heading = {
  id: string
  text: string
  level: 2 | 3
}

export type CaseStudy = {
  meta: CaseStudyMeta
  content: string
  headings: Heading[]
}

function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function extractHeadings(content: string): Heading[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm
  const headings: Heading[] = []
  let match: RegExpExecArray | null

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length as 2 | 3
    const text = match[2].trim()
    headings.push({ id: slugifyHeading(text), text, level })
  }

  return headings
}

function buildMeta(
  slug: string,
  data: matter.GrayMatterFile<string>['data'],
  content: string,
): CaseStudyMeta {
  if (!data.title || !data.summary) {
    throw new Error(
      `Case study "${slug}" is missing required frontmatter fields (title, summary)`,
    )
  }
  return {
    slug,
    title: data.title as string,
    client: (data.client as string) ?? 'Confidential',
    organisation: (data.organisation as string) ?? '',
    role: (data.role as string) ?? '',
    duration: (data.duration as string) ?? '',
    summary: data.summary as string,
    tags: (data.tags as string[]) ?? [],
    nda: (data.nda as boolean) ?? false,
    outcome: (data.outcome as string) ?? '',
    readingTime: readingTime(content).text,
  }
}

export function getAllCaseStudies(): CaseStudyMeta[] {
  if (!fs.existsSync(WORK_DIR)) return []

  const files = fs.readdirSync(WORK_DIR).filter((f) => f.endsWith('.mdx'))

  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, '')
      const raw = fs.readFileSync(path.join(WORK_DIR, filename), 'utf-8')
      const { data, content } = matter(raw)
      return buildMeta(slug, data, content)
    })
    .sort((a, b) => a.title.localeCompare(b.title))
}

export function getCaseStudy(slug: string): CaseStudy {
  const filepath = path.join(WORK_DIR, `${slug}.mdx`)

  if (!fs.existsSync(filepath)) {
    throw new Error(`Case study not found: ${slug}`)
  }

  const raw = fs.readFileSync(filepath, 'utf-8')
  const { data, content } = matter(raw)

  return {
    meta: buildMeta(slug, data, content),
    content,
    headings: extractHeadings(content),
  }
}
