import Link from 'next/link'
import { getSortedPosts } from '@/lib/contentlayer'
import { formatDate } from '@/lib/utils'
import AnimatedSection from '@/components/ui/AnimatedSection'

export default function BlogList() {
  const posts = getSortedPosts().slice(0, 2)

  return (
    <section className="py-24 max-w-[1100px] mx-auto px-6">
      <p className="font-mono text-xs tracking-widest uppercase text-text-tertiary mb-12">
        Writing
      </p>
      <ul className="flex flex-col divide-y divide-[rgba(0,0,0,0.06)]">
        {posts.map((post, i) => (
          <AnimatedSection key={post.slug} as="li" delay={i * 0.08} className="py-5">
            <div className="flex gap-8 items-start">
              <div className="w-[120px] shrink-0">
                <span className="font-mono text-xs text-text-tertiary">{formatDate(post.date)}</span>
              </div>
              <div className="flex-1">
                <Link
                  href={post.url}
                  className="font-body font-medium text-sm text-text-primary hover:text-accent transition-colors"
                >
                  {post.title}
                </Link>
                <p className="text-xs text-text-secondary mt-1">{post.description}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </ul>
      <div className="mt-8">
        <Link
          href="/blog"
          className="font-mono text-xs text-text-secondary hover:text-accent transition-colors"
        >
          View all posts →
        </Link>
      </div>
    </section>
  )
}
