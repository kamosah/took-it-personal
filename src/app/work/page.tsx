import type { Metadata } from 'next'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Badge from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'Work | Kwame Amosah',
}

const experience = [
  {
    period: "2025 – Present",
    company: "Alignerr",
    role: "Software Engineer, AI Code Evaluation",
    bullets: [
      "Evaluate AI-generated code for production readiness across Python and TypeScript codebases, assessing logic correctness, error handling, interface design, and engineering best practices for Claude Code training data.",
      "Conduct iterative code review sessions simulating real-world PR workflows, guiding AI outputs toward maintainable, well-tested implementations that match existing codebase conventions.",
      "Provide detailed technical feedback across naming clarity, modularity, documentation quality, and review readiness — directly contributing to LLM code generation improvements.",
    ],
    tags: ["Python", "TypeScript", "LLM evaluation"],
  },
  {
    period: "2022 – 2024",
    company: "Komodo Health",
    role: "Software Engineer",
    bullets: [
      "Developed Codesets and extended Universal Cohort Creator for MapLab's enterprise analytics platform, serving 330M+ patient journeys for pharmaceutical clients.",
      "Streamlined patient cohort creation workflows, enabling complex cohort generation in under 10 minutes compared to traditionally hours-long processes.",
      "Architected 0-to-1 multi-tenant admin console (KMC) replacing Retool, with permission-based access control and N+1 optimization via React Query batching.",
      "Built intuitive interfaces for both technical and non-technical healthcare users, democratizing access to real-world evidence.",
    ],
    tags: ["React", "TypeScript", "GraphQL", "React Query", "Python"],
  },
  {
    period: "2022",
    company: "Alloy",
    role: "Software Engineer",
    bullets: [
      "Enhanced KYC/AML solutions by developing features for real-time transaction monitoring and automated SAR filings on the Ongoing Monitoring team.",
      "Optimized rule engines to significantly reduce false positives and ensure compliance with BSA standards.",
      "Built user-friendly React and Node.js applications contributing to a secure fraud-detection environment for financial institutions.",
    ],
    tags: ["React", "Node.js", "TypeScript", "FinTech"],
  },
  {
    period: "2021 – 2022",
    company: "Crisis Text Line",
    role: "Software Engineer II",
    bullets: [
      "Built drag-and-drop multi-list board interfaces for simultaneous management of multiple texter conversations, improving operational efficiency by 30% for 100+ crisis counselors.",
      "Integrated translation APIs for bilingual (Spanish/English) direct messaging support and real-time supervisor communication.",
      "Enabled structured workflows that contributed to higher crisis satisfaction metrics while maintaining strict privacy standards.",
    ],
    tags: ["React", "TypeScript", "Redux", "REST APIs"],
  },
  {
    period: "2020 – 2021",
    company: "Crisis Text Line",
    role: "Software Engineer I",
    bullets: [
      "Implemented LaunchDarkly feature flag integration across backend APIs and frontend, enabling safer deployments and accelerating release cycles by 20%.",
      "Developed WhatsApp integration and session-persistent messaging systems that increased international crisis support outreach by 32%.",
      "Built scalable messaging interfaces connecting people in crisis with trained volunteers through secure, accessible text-based communication.",
    ],
    tags: ["React", "TypeScript", "LaunchDarkly", "Node.js"],
  },
  {
    period: "2019 – 2020",
    company: "Dovenmuehle Mortgage",
    role: "Software Engineer",
    bullets: [
      "Designed and implemented frontend solutions for a $340B+ enterprise mortgage servicing platform serving 1.4M+ loan accounts nationwide.",
      "Ensured WCAG accessibility compliance and followed best practices for security and maintainability across complex web applications.",
      "Improved code quality through peer reviews and knowledge-sharing sessions using React, Redux, and Node.js.",
    ],
    tags: ["React", "Redux", "Node.js", "WCAG"],
  },
  {
    period: "2019",
    company: "JumpOffCampus",
    role: "Software Engineer",
    bullets: [
      "Built a student housing platform with interactive map-based search and user profile interfaces, reducing search and matching time by 25%.",
      "Utilized React, JavaScript (ES6+), Ruby on Rails, and REST APIs including Google Maps integration.",
      "Contributed to democratizing access to safe, affordable student housing for thousands of students across partnered universities.",
    ],
    tags: ["React", "JavaScript", "Ruby on Rails", "REST APIs"],
  },
]

const skills: Record<string, string[]> = {
  Frontend: ["React", "TypeScript", "Next.js", "GraphQL", "React Query", "Redux", "Framer Motion", "Material UI", "Tailwind CSS"],
  Backend: ["Python", "FastAPI", "Node.js", "Flask", "PostgreSQL", "pgvector", "REST APIs"],
  Tooling: ["Jest", "Cypress", "Docker", "CI/CD", "LaunchDarkly", "Figma", "Storybook"],
  "AI/ML": ["LangGraph", "RAG pipelines", "pgvector", "SSE streaming", "LLM evaluation"],
}

export default function WorkPage() {
  return (
    <main className="pt-24 pb-32">
      <div className="max-w-[1100px] mx-auto px-6">
        <AnimatedSection>
          <p className="font-mono text-xs tracking-widest uppercase text-text-tertiary mb-2">Experience</p>
          <h1 className="font-display text-4xl md:text-5xl text-text-primary mb-16">Work history</h1>
        </AnimatedSection>
        <ul className="flex flex-col divide-y divide-[rgba(0,0,0,0.06)]">
          {experience.map((job, i) => (
            <AnimatedSection key={`${job.company}-${job.role}`} as="li" delay={i * 0.08} className="py-12">
              <div className="flex gap-8">
                <div className="w-[120px] shrink-0">
                  <span className="font-mono text-xs text-text-tertiary">{job.period}</span>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-2 mb-4">
                    <h2 className="font-body font-medium text-xl text-text-primary">{job.company}</h2>
                    <span className="text-base text-text-secondary">— {job.role}</span>
                  </div>
                  <ul className="flex flex-col gap-2 mb-4">
                    {job.bullets.map((bullet, j) => (
                      <li key={j} className="text-sm text-text-secondary leading-relaxed flex gap-2">
                        <span className="text-text-tertiary shrink-0 mt-0.5">–</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <ul className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <li key={tag}><Badge>{tag}</Badge></li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </ul>
        <AnimatedSection className="mt-24 pt-16 border-t border-[rgba(0,0,0,0.06)]">
          <p className="font-mono text-xs tracking-widest uppercase text-text-tertiary mb-12">Skills</p>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <dt className="font-mono text-xs tracking-widest uppercase text-text-tertiary mb-4">{category}</dt>
                <dd className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </AnimatedSection>
      </div>
    </main>
  )
}
