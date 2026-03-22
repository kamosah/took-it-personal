import Callout from './Callout'
import type { MDXComponents } from 'mdx/types'

export function getMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Callout,
    ...components,
  }
}
