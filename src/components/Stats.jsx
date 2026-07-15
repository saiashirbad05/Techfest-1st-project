import { useEffect, useRef, useState } from 'react'
import styles from './Stats.module.css'

const STATS = [
  { value: 72, suffix: '+', label: 'Hours', unit: 'of non-stop innovation' },
  { value: 15000, suffix: '+', label: 'Participants', unit: 'across the globe' },
  { value: 200, suffix: '+', label: 'Events', unit: 'and competitions' },
  { value: 30, suffix: '+', label: 'Countries', unit: 'represented' },
]

function useCountUp(target, duration, active) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    let start = null
    const step = (ts) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      // Cubic ease-out
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [active, target, duration])
  return count
}

function StatItem({ value, suffix, label, unit, active }) {
  const count = useCountUp(value, 1800, active)
  return (
    <div className={styles.statItem}>
      <div className={styles.statValue}>
        <span className={styles.statNumber}>{count.toLocaleString()}</span>
        <span className={styles.statSuffix}>{suffix}</span>
      </div>
      <div className={styles.statLabel}>{label}</div>
      <div className={styles.statUnit}>{unit}</div>
    </div>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.stats} id="stats" ref={ref} aria-label="Festival statistics">
      <div className={styles.container}>
        {STATS.map((s) => (
          <StatItem key={s.label} {...s} active={active} />
        ))}
      </div>
    </section>
  )
}
