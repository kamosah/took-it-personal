import { cn } from '@/lib/utils'

interface CalloutProps {
  type?: 'info' | 'warning' | 'tip'
  children: React.ReactNode
}

export default function Callout({ type = 'info', children }: CalloutProps) {
  return (
    <aside
      className={cn(
        'border-l-2 pl-4 py-3 my-6 rounded-r-md',
        type === 'info' && 'border-accent bg-accent-light text-text-secondary',
        type === 'warning' && 'border-amber-400 bg-amber-50 text-amber-800',
        type === 'tip' && 'border-green-400 bg-green-50 text-green-800'
      )}
    >
      <div className="text-sm leading-relaxed">{children}</div>
    </aside>
  )
}
