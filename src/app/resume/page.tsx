import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resume | Kwame Amosah',
}

export default function ResumePage() {
  return (
    <main className="pt-24 pb-32">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="font-mono text-xs tracking-widest uppercase text-text-tertiary mb-2">Kwame Amosah</p>
            <h1 className="font-display text-4xl md:text-5xl text-text-primary">Resume</h1>
          </div>
          <a
            href="/resume.pdf"
            download="Kwame_Amosah_Resume.pdf"
            className="font-mono text-xs text-accent border border-accent/30 hover:bg-accent-light px-4 py-2 rounded-lg transition-colors duration-200"
          >
            Download PDF ↓
          </a>
        </div>
        <div className="bg-surface border border-[rgba(0,0,0,0.08)] rounded-xl overflow-hidden">
          <embed
            src="/resume.pdf"
            type="application/pdf"
            className="w-full"
            style={{ height: '85vh', minHeight: '600px' }}
          />
        </div>
        <p className="font-mono text-xs text-text-tertiary text-center mt-4">
          Having trouble viewing?{' '}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline underline-offset-4">
            Open in a new tab →
          </a>
        </p>
      </div>
    </main>
  )
}
