'use client'

import { Counter } from '@/components/atoms/Counter'
import styles from './styles.module.scss'

export interface CountersProps {
  stats: {
    end: number
    prefix?: string
    suffix?: string
    label: string
  }[]
  className?: string
}

export function Counters({ stats, className = '' }: CountersProps) {
  return (
    <section className={`${styles.counters} ${className}`}>
      {stats.map((item, index) => (
        <div className={styles.counterItem} key={index}>
          <Counter
            end={item.end}
            prefix={item.prefix}
            suffix={item.suffix}
            className={styles.counter}
          />
          <span className={styles.label}>{item.label}</span>
        </div>
      ))}
    </section>
  )
}
