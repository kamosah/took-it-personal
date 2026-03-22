import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Badge from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'Projects | Kwame Amosah',
}

const projects = [
  {
    name: 'CSS Design Patterns Lab',
    url: 'https://github.com/kamosah/css-design-patterns',
    description: 'Interactive browser-based learning platform for CSS design patterns, built with a Monaco Editor IDE, live sandboxed preview, and a structured challenge curriculum.',
    longDescription: 'Structured as a VS Code-like IDE where each challenge ships starter HTML/CSS, solution files, and instructions. Covers layout patterns, custom form controls, and design tokens. Built with React 19, Vite, Zustand for progress tracking, and react-resizable-panels for the split-pane editor.',
    tags: ['React', 'TypeScript', 'Vite', 'Monaco Editor', 'CSS', 'Design Systems'],
    status: 'In progress',
    statusVariant: 'amber' as const,
  },
  {
    name: 'Olympus',
    url: 'https://github.com/kamosah/olympus',
    description: 'Full-stack AI document intelligence platform built with Next.js 14 and FastAPI.',
    longDescription: 'Implemented hybrid chunking strategy combining semantic sentence grouping with fixed-size fallbacks to maximize retrieval coherence. Tuned similarity thresholds (0.72 cosine) to reduce hallucinations. Hybrid semantic + keyword search using pgvector with BM25 reranking.',
    tags: ['Next.js 14', 'FastAPI', 'LangGraph', 'pgvector', 'RAG', 'Python', 'TypeScript'],
    status: 'Beta',
    statusVariant: 'amber' as const,
  },
]

export default function ProjectsPage() {
  return (
    <main className="pt-24 pb-32">
      <div className="max-w-[1100px] mx-auto px-6">
        <AnimatedSection>
          <p className="font-mono text-xs tracking-widest uppercase text-text-tertiary mb-2">Work</p>
          <h1 className="font-display text-4xl md:text-5xl text-text-primary mb-16">Projects</h1>
        </AnimatedSection>
        <div className="grid grid-cols-1 gap-6">
          {projects.map((project, i) => (
            <AnimatedSection key={project.name} delay={i * 0.1}>
              <div className="bg-surface border border-[rgba(0,0,0,0.08)] rounded-xl p-6 md:p-8 hover:border-[rgba(0,0,0,0.15)] transition-all duration-200">
                <div className="flex items-start justify-between mb-4">
                  <h2 className="font-body font-medium text-xl text-text-primary">{project.name}</h2>
                  <Badge variant={project.statusVariant}>{project.status}</Badge>
                </div>
                <p className="text-base text-text-secondary leading-relaxed mb-3">{project.description}</p>
                <p className="text-sm text-text-tertiary leading-relaxed mb-6">{project.longDescription}</p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                  {project.url && (
                    <Link href={project.url} target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-accent hover:underline underline-offset-4">
                      View on GitHub →
                    </Link>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </main>
  )
}
