'use client'

import { useInView } from 'react-intersection-observer'
import { motion, useReducedMotion } from 'framer-motion'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function AnimatedSection({ children, className, delay = 0 }: AnimatedSectionProps) {
  const prefersReduced = useReducedMotion()
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  if (prefersReduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
