import { allPosts } from 'contentlayer/generated'
import type { Post } from 'contentlayer/generated'

export function getSortedPosts(): Post[] {
  return allPosts
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export { allPosts }
export type { Post }
