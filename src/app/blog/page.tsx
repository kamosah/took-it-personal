import type { Metadata } from 'next'
import Link from 'next/link'
import { getSortedPosts } from '@/lib/contentlayer'
import { formatDate } from '@/lib/utils'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Badge from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'Blog | Kwame Amosah',
}

export default function BlogPage() {
  const posts = getSortedPosts()

  return (
    <main className="pt-24 pb-32">
      <div className="max-w-[768px] mx-auto px-6">
        <AnimatedSection>
          <p className="font-mono text-xs tracking-widest uppercase text-text-tertiary mb-2">Writing</p>
          <h1 className="font-display text-4xl md:text-5xl text-text-primary mb-16">Blog</h1>
        </AnimatedSection>
        <ul className="flex flex-col divide-y divide-[rgba(0,0,0,0.06)]">
          {posts.map((post, i) => (
            <AnimatedSection key={post.slug} as="li" delay={i * 0.08} className="py-8">
              <div className="flex gap-4 mb-2">
                <span className="font-mono text-xs text-text-tertiary">{formatDate(post.date)}</span>
                <span className="font-mono text-xs text-text-tertiary">{post.readingTime}</span>
              </div>
              <Link href={post.url} className="block group">
                <h2 className="font-body font-medium text-lg text-text-primary group-hover:text-accent transition-colors mb-2">
                  {post.title}
                </h2>
              </Link>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">{post.description}</p>
              {post.tags && (
                <ul className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <li key={tag}><Badge>{tag}</Badge></li>
                  ))}
                </ul>
              )}
            </AnimatedSection>
          ))}
        </ul>
      </div>
    </main>
  )
}
