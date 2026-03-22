import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'amber' | 'green'
  className?: string
}

export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  const tonalStyle =
    variant === 'amber'
      ? { background: 'var(--badge-amber-bg)', color: 'var(--badge-amber-text)', borderColor: 'var(--badge-amber-border)' }
      : variant === 'green'
      ? { background: 'var(--badge-green-bg)', color: 'var(--badge-green-text)', borderColor: 'var(--badge-green-border)' }
      : undefined

  return (
    <span
      className={cn(
        'font-mono text-[10px] px-2 py-0.5 rounded-full border',
        variant === 'default' && 'bg-accent-light text-accent border-accent/20',
        className
      )}
      style={tonalStyle}
    >
      {children}
    </span>
  )
}
