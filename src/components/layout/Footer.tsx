import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(0,0,0,0.08)] py-12 mt-24">
      <div className="max-w-[1100px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-text-tertiary">
          © {new Date().getFullYear()} Kwame Amosah
        </p>
        <div className="flex items-center gap-6">
          <Link
            href="https://github.com/kamosah"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-text-tertiary hover:text-accent transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/kamosah/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-text-tertiary hover:text-accent transition-colors"
          >
            LinkedIn
          </Link>
          <Link
            href="mailto:kamosah1@gmail.com"
            className="font-mono text-xs text-text-tertiary hover:text-accent transition-colors"
          >
            Email
          </Link>
        </div>
      </div>
    </footer>
  )
}
