import Link from 'next/link'

export default function ContactSection() {
  return (
    <section className="py-32 max-w-[768px] mx-auto px-6 text-center">
      <h2 className="font-display text-4xl md:text-5xl text-text-primary mb-6">
        Let&apos;s work together.
      </h2>
      <p className="font-body text-lg text-text-secondary leading-relaxed mb-12">
        I&apos;m currently open to senior frontend-leaning fullstack roles at mission-driven Series A–C companies in NYC.
      </p>
      <div className="flex flex-col items-center gap-4">
        <Link href="mailto:kamosah1@gmail.com" className="font-mono text-sm text-text-secondary hover:text-accent transition-colors">
          kamosah1@gmail.com
        </Link>
        <Link href="https://www.linkedin.com/in/kamosah/" target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-text-secondary hover:text-accent transition-colors">
          linkedin.com/in/kamosah
        </Link>
        <Link href="https://github.com/kamosah" target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-text-secondary hover:text-accent transition-colors">
          github.com/kamosah
        </Link>
      </div>
    </section>
  )
}
