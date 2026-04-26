'use client'

import { motion, useReducedMotion } from 'framer-motion'

const motionElements = {
  div: motion.div,
  li: motion.li,
  section: motion.section,
} as const

type SupportedTag = keyof typeof motionElements

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: SupportedTag
}

export default function AnimatedSection({ children, className, delay = 0, as: Tag = 'div' }: AnimatedSectionProps) {
  const prefersReduced = useReducedMotion()

  if (prefersReduced) {
    return <Tag className={className}>{children}</Tag>
  }

  const MotionTag = motionElements[Tag] as typeof motion.div

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </MotionTag>
  )
}
