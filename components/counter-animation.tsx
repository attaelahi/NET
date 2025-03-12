"use client"

import { useState, useEffect, useRef } from "react"

interface CounterAnimationProps {
  end: number
  duration?: number
  className?: string
  prefix?: string
  suffix?: string
}

export default function CounterAnimation({
  end,
  duration = 2,
  className = "",
  prefix = "",
  suffix = "",
}: CounterAnimationProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLSpanElement>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!countRef.current) return

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          animateCount()
        }
      },
      { threshold: 0.1 },
    )

    observerRef.current.observe(countRef.current)

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  const animateCount = () => {
    const startTime = Date.now()
    const endTime = startTime + duration * 1000

    const updateCount = () => {
      const now = Date.now()
      const progress = Math.min(1, (now - startTime) / (duration * 1000))

      // Use easeOutQuad for smoother animation
      const easeOutProgress = 1 - (1 - progress) * (1 - progress)

      const currentCount = Math.floor(easeOutProgress * end)
      setCount(currentCount)

      if (now < endTime) {
        requestAnimationFrame(updateCount)
      } else {
        setCount(end)
      }
    }

    updateCount()
  }

  const formattedCount = count.toLocaleString()

  return (
    <span ref={countRef} className={className}>
      {prefix}
      {formattedCount}
      {suffix}
    </span>
  )
}

