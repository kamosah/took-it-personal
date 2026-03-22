import Link from 'next/link'
import Badge from '@/components/ui/Badge'
import AnimatedSection from '@/components/ui/AnimatedSection'

const projects = [
  {
    name: 'Olympus',
    url: 'https://github.com/kamosah/olympus',
    description: 'Full-stack AI document intelligence platform. RAG pipelines, LangGraph agents, pgvector semantic search, SSE streaming.',
    tags: ['Next.js 14', 'FastAPI', 'LangGraph', 'pgvector', 'RAG'],
    status: 'Beta',
    statusVariant: 'amber' as const,
  },
  {
    name: 'KMC',
    url: null,
    description: '0-to-1 multi-tenant admin console replacing Retool. Permission-based access control, N+1 optimization via React Query batching, hover-load patterns.',
    tags: ['React', 'TypeScript', 'GraphQL', 'React Query'],
    status: 'Shipped',
    statusVariant: 'green' as const,
  },
]

export default function ProjectGrid() {
  return (
    <section className="py-24 max-w-[1100px] mx-auto px-6">
      <p className="font-mono text-xs tracking-widest uppercase text-text-tertiary mb-12">
        Projects
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <AnimatedSection key={project.name} delay={i * 0.1}>
            <div className="bg-surface border border-[rgba(0,0,0,0.08)] rounded-xl p-6 hover:border-[rgba(0,0,0,0.15)] hover:-translate-y-0.5 transition-all duration-200 h-full flex flex-col">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-body font-medium text-base text-text-primary">{project.name}</h3>
                <Badge variant={project.statusVariant}>{project.status}</Badge>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed mt-2 flex-1">{project.description}</p>
              <div className="flex items-center justify-between mt-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
                {project.url && (
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-tertiary hover:text-accent transition-colors text-base group"
                    aria-label={`View ${project.name}`}
                  >
                    <span className="inline-block transition-transform duration-200 group-hover:-rotate-45">→</span>
                  </Link>
                )}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}
