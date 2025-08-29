'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'

interface CounterProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
}

export function Counter({
  end,
  duration = 9000,
  prefix = '',
  suffix = '',
  className = '',
}: CounterProps) {
  const [count, setCount] = useState(0)
  const start = useRef(0)
  const requestRef = useRef<number | null>(null)
  const startTime = useRef<number | null>(null)

  const animate = (timestamp: number) => {
    if (!startTime.current) startTime.current = timestamp
    const progress = timestamp - startTime.current
    const progressRatio = Math.min(progress / duration, 1)
    const newCount = Math.floor(progressRatio * (end - start.current) + start.current)

    setCount(newCount)

    if (progressRatio < 1) {
      requestRef.current = requestAnimationFrame(animate)
    } else {
      setCount(end)
    }
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate)
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current)
    }
  }, [end, duration])

  return (
    <span className={`${styles.counter} ${className}`}>
      {prefix}
      {count}
      {suffix}
    </span>
  )
}


