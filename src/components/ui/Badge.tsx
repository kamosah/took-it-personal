import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'amber' | 'green'
  className?: string
}

export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'font-mono text-[10px] px-2 py-0.5 rounded-full border',
        variant === 'default' && 'bg-accent-light text-accent border-accent/20',
        variant === 'amber' && 'bg-amber-100 dark:bg-amber-950/50 text-amber-800 dark:text-amber-300 border-amber-300 dark:border-amber-700/60',
        variant === 'green' && 'bg-emerald-100 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700/60',
        className
      )}
    >
      {children}
    </span>
  )
}
