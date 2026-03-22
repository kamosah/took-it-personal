/* eslint-disable react-hooks/static-components */
'use client'

import { useMDXComponent } from 'next-contentlayer2/hooks'
import Callout from './Callout'

const mdxComponents = {
  Callout,
}

export default function PostContent({ code }: { code: string }) {
  const MDXContent = useMDXComponent(code)
  return <MDXContent components={mdxComponents} />
}
