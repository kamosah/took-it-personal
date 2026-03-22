'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import * as Dialog from '@radix-ui/react-dialog'
import { cn } from '@/lib/utils'
import ThemeToggle from '@/components/ui/ThemeToggle'

const navLinks = [
  { href: '/work', label: 'Work' },
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [openedAtPathname, setOpenedAtPathname] = useState<string | null>(null)
  const pathname = usePathname()

  // Drawer is open only when it was opened on the current pathname
  const mobileOpen = openedAtPathname === pathname

  const handleMobileOpenChange = (open: boolean) => {
    setOpenedAtPathname(open ? pathname : null)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        scrolled
          ? 'backdrop-blur-sm bg-bg/80 border-b border-[rgba(0,0,0,0.08)] dark:border-[rgba(255,255,255,0.08)]'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-[1100px] mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" aria-label="Home">
          <Image src="/monogram.png" alt="KA monogram" width={32} height={32} priority />
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'relative text-sm transition-colors group',
                    isActive ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      'absolute -bottom-0.5 left-0 h-px bg-text-primary transition-transform duration-200 origin-left',
                      isActive ? 'w-full scale-x-100' : 'w-full scale-x-0 group-hover:scale-x-100'
                    )}
                  />
                </Link>
              </li>
            )
          })}
        </ul>

        <ThemeToggle />

        <Dialog.Root open={mobileOpen} onOpenChange={handleMobileOpenChange}>
          <Dialog.Trigger asChild>
            <button className="md:hidden flex flex-col gap-1.5 p-1" aria-label="Open menu">
              <span className="w-5 h-px bg-text-primary block" />
              <span className="w-5 h-px bg-text-primary block" />
              <span className="w-3 h-px bg-text-primary block" />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/20 z-50" />
            <Dialog.Content className="fixed top-0 right-0 h-full w-64 bg-surface z-50 p-8 shadow-xl">
              <Dialog.Title className="sr-only">Navigation</Dialog.Title>
              <Dialog.Close asChild>
                <button className="absolute top-4 right-4 text-text-secondary hover:text-text-primary" aria-label="Close menu">
                  ✕
                </button>
              </Dialog.Close>
              <nav className="mt-8 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'text-lg transition-colors',
                      pathname === link.href ? 'text-text-primary font-medium' : 'text-text-secondary'
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </nav>
    </header>
  )
}
