'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Button from '@/components/ui/Button'

const headlineWords = ['Built', 'with', 'craft.', 'Accessible', 'by', 'design.']

export default function Hero() {
  const prefersReduced = useReducedMotion()

  return (
    <section className="min-h-[80vh] flex flex-col justify-end px-6 pt-32 pb-24 max-w-[1100px] mx-auto">
      <div className="max-w-2xl">
        <p className="font-mono text-xs tracking-widest text-text-tertiary uppercase mb-4">
          Senior Software Engineer · New York City
        </p>
        <div className="w-8 h-0.5 bg-accent mb-6" />
        <h1 className="font-display text-5xl md:text-7xl leading-tight mb-6 text-text-primary">
          {prefersReduced ? (
            <>Built with craft. <em>Accessible by design.</em></>
          ) : (
            headlineWords.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.25em]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {i >= 3 ? <em>{word}</em> : word}
              </motion.span>
            ))
          )}
        </h1>
        <p className="font-body text-lg text-text-secondary leading-relaxed max-w-xl mb-8">
          Frontend-leaning fullstack engineer with 6+ years across healthtech, fintech, and crisis intervention.
          Currently evaluating AI code for Anthropic and building Olympus, a document intelligence platform.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button href="/work">View my work →</Button>
          <Button href="https://github.com/kamosah" variant="ghost" external>
            github.com/kamosah
          </Button>
        </div>
      </div>
    </section>
  )
}
