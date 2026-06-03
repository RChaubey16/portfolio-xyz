import type { Metadata } from 'next'
import Link from 'next/link'

import { FaDrupal, FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'

import FadeUp from '@/components/animation/FadeUp'
import config from '@/data/newConfig.json'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Full Stack Engineer with 3+ years of experience building scalable, high-performance web applications.',
}

const socialIcons: Record<string, React.ReactNode> = {
  GitHub: <FaGithub className="h-5 w-5" />,
  LinkedIn: <FaLinkedinIn className="h-5 w-5" />,
  Twitter: <FaXTwitter className="h-5 w-5" />,
  Drupal: <FaDrupal className="h-5 w-5" />,
}

export default function AboutPage() {
  return (
    <section className="py-20">
      <FadeUp>
        <h1 className="mb-4 text-4xl font-bold">About</h1>
      </FadeUp>

      <FadeUp delay={0.1}>
        <div className="mt-6 flex flex-col gap-4">
          {config.about.map((paragraph, i) => (
            <p key={i} className="para">
              {paragraph}
            </p>
          ))}
        </div>
      </FadeUp>

      <FadeUp delay={0.2}>
        <div className="mt-16">
          <h2 className="text-2xl font-bold">Contact</h2>
          <p className="para mt-3">
            The best way to reach me is by email. I&apos;m also active on
            LinkedIn and GitHub.
          </p>
          <a
            href={`mailto:${config.email}`}
            className="bg-foreground text-background mt-4 inline-flex items-center rounded-full px-5 py-2 text-sm font-medium transition-opacity hover:opacity-80"
          >
            {config.email}
          </a>

          <div className="mt-6 flex items-center gap-3">
            {config.socials.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.tooltip}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {socialIcons[social.name]}
              </Link>
            ))}
          </div>
        </div>
      </FadeUp>
    </section>
  )
}
