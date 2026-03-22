import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps {
  href?: string
  children: React.ReactNode
  variant?: 'filled' | 'ghost'
  external?: boolean
  className?: string
  onClick?: () => void
}

export default function Button({ href, children, variant = 'filled', external, className, onClick }: ButtonProps) {
  const classes = cn(
    'inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium transition-all duration-200',
    variant === 'filled' && 'bg-accent text-white hover:bg-accent-hover hover:-translate-y-px',
    variant === 'ghost' && 'border border-border-strong text-text-secondary hover:text-text-primary hover:border-text-tertiary hover:-translate-y-px',
    className
  )

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  )
}
