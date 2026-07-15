import { useEffect, useRef, useState } from 'react'
import styles from './Timeline.module.css'

const PHASES = [
  {
    phase: 'Phase 01',
    date: 'Day 1 — Oct 17',
    title: 'Ignition',
    description: 'Opening ceremony, keynote addresses from global innovators, and the Techfest 2025 theme reveal.',
    tag: 'Ceremony',
    accent: 'cyan',
  },
  {
    phase: 'Phase 02',
    date: 'Day 2–3 — Oct 18–19',
    title: 'Amplify',
    description: 'Technical competitions go live — robotics, hackathons, design challenges, and AI battles.',
    tag: 'Competitions',
    accent: 'purple',
  },
  {
    phase: 'Phase 03',
    date: 'Day 3–4 — Oct 19–20',
    title: 'Synthesize',
    description: 'Expert workshops, lab tours, and immersive exhibitions. Guest lectures from Nobel laureates.',
    tag: 'Workshops',
    accent: 'amber',
  },
  {
    phase: 'Phase 04',
    date: 'Day 4–5 — Oct 20–21',
    title: 'Transcend',
    description: 'Innovation Challenge finals, startup pitch battles, and collaborative project showcases.',
    tag: 'Innovation',
    accent: 'cyan',
  },
  {
    phase: 'Phase 05',
    date: 'Day 6 — Oct 22',
    title: 'Singularity',
    description: 'Grand finale, awards ceremony, and the vision for Techfest 2026 unveiled.',
    tag: 'Finale',
    accent: 'purple',
  },
]

export default function Timeline() {
  const itemRefs = useRef([])
  const [visible, setVisible] = useState([])

  useEffect(() => {
    const observers = itemRefs.current.map((el, i) => {
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(prev => [...new Set([...prev, i])])
            obs.disconnect()
          }
        },
        { threshold: 0.2 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  return (
    <section className={styles.timeline} id="timeline" aria-label="Festival timeline">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionTag}>// SCHEDULE</span>
          <h2 className={styles.sectionTitle}>Festival Timeline</h2>
        </div>
        <div className={styles.track}>
          <div className={styles.line} aria-hidden="true" />
          {PHASES.map((phase, i) => (
            <div
              key={phase.phase}
              ref={el => { itemRefs.current[i] = el }}
              className={`${styles.item} ${i % 2 === 0 ? styles.left : styles.right} ${styles[`accent_${phase.accent}`]} ${visible.includes(i) ? styles.visible : ''}`}
            >
              <div className={styles.dot} aria-hidden="true">
                <span className={styles.dotInner} />
              </div>
              <div className={styles.card}>
                <div className={styles.cardMeta}>
                  <span className={styles.phaseLabel}>{phase.phase}</span>
                  <span className={styles.tag}>{phase.tag}</span>
                </div>
                <div className={styles.date}>{phase.date}</div>
                <h3 className={styles.phaseTitle}>{phase.title}</h3>
                <p className={styles.phaseDesc}>{phase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
