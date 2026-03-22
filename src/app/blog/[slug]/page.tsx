import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allPosts } from 'contentlayer/generated'
import { formatDate } from '@/lib/utils'
import ReadingProgressBar from '@/components/ui/ReadingProgressBar'
import PostContent from '@/components/mdx/PostContent'
import Badge from '@/components/ui/Badge'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = allPosts.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: `${post.title} | Kwame Amosah`,
    description: post.description,
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = allPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  return (
    <>
      <ReadingProgressBar />
      <main className="pt-24 pb-32">
        <article className="max-w-[680px] mx-auto px-6">
          <header className="mb-12">
            <div className="flex flex-wrap gap-4 mb-6">
              <span className="font-mono text-xs text-text-tertiary">{formatDate(post.date)}</span>
              <span className="font-mono text-xs text-text-tertiary">{post.readingTime}</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl text-text-primary leading-tight mb-6">
              {post.title}
            </h1>
            <div className="w-8 h-0.5 bg-accent mb-6" />
            {post.tags && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            )}
          </header>
          <div className="prose max-w-none">
            <PostContent code={post.body.code} />
          </div>
        </article>
      </main>
    </>
  )
}
