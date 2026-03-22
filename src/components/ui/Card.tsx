import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        'bg-surface border border-[rgba(0,0,0,0.08)] rounded-xl p-6',
        'hover:border-[rgba(0,0,0,0.15)] hover:-translate-y-0.5',
        'transition-all duration-200',
        className
      )}
    >
      {children}
    </div>
  )
}
