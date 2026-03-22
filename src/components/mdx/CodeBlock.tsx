interface CodeBlockProps {
  children: React.ReactNode
}

export default function CodeBlock({ children }: CodeBlockProps) {
  return (
    <div className="my-6 rounded-lg overflow-hidden border border-[rgba(0,0,0,0.08)]">
      {children}
    </div>
  )
}
