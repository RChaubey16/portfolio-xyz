import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'

const DAILY_LOGS_DIR = path.join(process.cwd(), 'content/daily-logs')

export type DailyLogItemType = 'project' | 'learning' | 'other'

export type DailyLogItem = {
  text: string
  link?: string
  type?: DailyLogItemType
}

export type DailyLogEntry = {
  slug: string
  date: string
  title: string
  tags: string[]
  items: DailyLogItem[]
}

export function getAllDailyLogs(): DailyLogEntry[] {
  if (!fs.existsSync(DAILY_LOGS_DIR)) return []

  const files = fs.readdirSync(DAILY_LOGS_DIR).filter((f) => f.endsWith('.md'))

  return files
    .map((filename) => {
      const slug = filename.replace(/\.md$/, '')
      const raw = fs.readFileSync(path.join(DAILY_LOGS_DIR, filename), 'utf-8')
      const { data } = matter(raw)

      if (!data.date || !data.title) {
        throw new Error(
          `Daily log entry "${slug}" is missing required frontmatter fields (date, title)`,
        )
      }

      return {
        slug,
        date: data.date as string,
        title: data.title as string,
        tags: (data.tags as string[]) ?? [],
        items: (data.items as DailyLogItem[]) ?? [],
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
