import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedSection from '@/components/ui/AnimatedSection'

export const metadata: Metadata = {
  title: 'Contact | Kwame Amosah',
}

export default function ContactPage() {
  return (
    <main className="pt-24 pb-32">
      <div className="max-w-[768px] mx-auto px-6 text-center">
        <AnimatedSection>
          <h1 className="font-display text-4xl md:text-6xl text-text-primary mb-6">
            Let&apos;s work together.
          </h1>
          <p className="font-body text-lg text-text-secondary leading-relaxed mb-12 max-w-lg mx-auto">
            I&apos;m currently open to senior frontend-leaning fullstack roles at mission-driven Series A–C companies in NYC.
          </p>
          <div className="flex flex-col items-center gap-6">
            <Link href="mailto:kamosah1@gmail.com" className="font-mono text-sm text-text-secondary hover:text-accent transition-colors relative group">
              kamosah1@gmail.com
              <span className="absolute -bottom-0.5 left-0 w-full h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
            </Link>
            <Link href="https://www.linkedin.com/in/kamosah/" target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-text-secondary hover:text-accent transition-colors relative group">
              linkedin.com/in/kamosah
              <span className="absolute -bottom-0.5 left-0 w-full h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
            </Link>
            <Link href="https://github.com/kamosah" target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-text-secondary hover:text-accent transition-colors relative group">
              github.com/kamosah
              <span className="absolute -bottom-0.5 left-0 w-full h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </main>
  )
}
