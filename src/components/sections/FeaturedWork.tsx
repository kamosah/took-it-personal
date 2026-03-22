import AnimatedSection from '@/components/ui/AnimatedSection'
import Badge from '@/components/ui/Badge'

const experience = [
  {
    period: "2025 – Now",
    company: "Alignerr",
    role: "Software Engineer, AI Code Evaluation",
    impact: "Evaluating AI-generated code for production readiness across logic correctness, error handling, and interface design for Claude Code training data.",
    tags: ["Python", "TypeScript", "LLM evaluation"],
    url: null,
  },
  {
    period: "2022 – 2024",
    company: "Komodo Health",
    role: "Software Engineer",
    impact: "Built Codesets and Universal Cohort Creator features serving 330M+ patient journeys. Streamlined cohort creation from hours to under 10 minutes.",
    tags: ["React", "TypeScript", "GraphQL", "Python"],
    url: null,
  },
  {
    period: "2022",
    company: "Alloy",
    role: "Software Engineer",
    impact: "Developed real-time transaction monitoring and automated SAR filings on the Ongoing Monitoring team. Optimized rule engines to reduce false positives.",
    tags: ["React", "Node.js", "FinTech"],
    url: null,
  },
  {
    period: "2020 – 2022",
    company: "Crisis Text Line",
    role: "Software Engineer I → II",
    impact: "Built WhatsApp integration expanding international outreach by 32%. Drag-and-drop counselor board improved operational efficiency by 30% across 100+ volunteers.",
    tags: ["React", "TypeScript", "Redux", "LaunchDarkly"],
    url: null,
  },
]

export default function FeaturedWork() {
  return (
    <section className="py-24 max-w-[1100px] mx-auto px-6">
      <p className="font-mono text-xs tracking-widest uppercase text-text-tertiary mb-12">
        Selected work
      </p>
      <div className="flex flex-col divide-y divide-[rgba(0,0,0,0.06)]">
        {experience.map((job, i) => (
          <AnimatedSection key={job.company} delay={i * 0.08} className="py-8">
            <div className="flex gap-8">
              <div className="w-[120px] shrink-0">
                <span className="font-mono text-xs text-text-tertiary">{job.period}</span>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline gap-2 mb-1">
                  <h3 className="font-body font-medium text-base text-text-primary">{job.company}</h3>
                  <span className="text-sm text-text-secondary">— {job.role}</span>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed mb-3">{job.impact}</p>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}
