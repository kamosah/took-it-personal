'use client'

import { useState, useEffect } from 'react'

export default function ReadingProgressBar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollY = window.scrollY
      const docHeight = document.documentElement.scrollHeight
      const viewportHeight = window.innerHeight
      const total = docHeight - viewportHeight
      setProgress(total > 0 ? (scrollY / total) * 100 : 0)
    }

    window.addEventListener('scroll', updateProgress, { passive: true })
    updateProgress()
    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 h-[2px] bg-accent z-50"
      style={{
        width: `${progress}%`,
        transition: 'width 50ms linear',
      }}
    />
  )
}
