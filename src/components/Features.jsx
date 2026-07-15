import { useEffect, useRef, useState } from 'react'
import styles from './Features.module.css'

const FEATURES = [
  {
    icon: '⚡',
    title: 'Technical Competitions',
    description: 'Push the boundaries of engineering with cutting-edge challenges in robotics, AI, and systems design.',
    accent: 'cyan',
  },
  {
    icon: '🔬',
    title: 'Workshops',
    description: 'Hands-on sessions led by industry experts and researchers from top global institutions.',
    accent: 'purple',
  },
  {
    icon: '🌐',
    title: 'Exhibitions',
    description: 'Experience the future firsthand — from quantum computing demos to neural interface prototypes.',
    accent: 'amber',
  },
  {
    icon: '🎙️',
    title: 'Guest Lectures',
    description: 'Learn from pioneers shaping the technological landscape — Nobel laureates, innovators, and visionaries.',
    accent: 'cyan',
  },
  {
    icon: '🤖',
    title: 'Robotics Arena',
    description: 'Watch machines battle it out in real-time combat and precision challenges on the grand arena floor.',
    accent: 'purple',
  },
  {
    icon: '💡',
    title: 'Innovation Challenge',
    description: 'Pitch your startup idea or breakthrough concept to a panel of investors and industry leaders.',
    accent: 'amber',
  },
]

function FeatureCard({ icon, title, description, accent, visible }) {
  return (
    <div className={`${styles.card} ${styles[`accent_${accent}`]} ${visible ? styles.visible : ''}`}>
      <div className={styles.cardBorder} aria-hidden="true" />
      <div className={styles.cardIcon} aria-hidden="true">{icon}</div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDesc}>{description}</p>
    </div>
  )
}

export default function Features() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.features} id="features" aria-label="What awaits at Techfest">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionTag}>// WHAT AWAITS</span>
          <h2 className={styles.sectionTitle}>Events &amp; Experiences</h2>
          <p className={styles.sectionSubtitle}>
            Six days of immersive technology, innovation, and human potential.
          </p>
        </div>
        <div className={styles.grid} ref={ref}>
          {FEATURES.map((f) => (
            <FeatureCard key={f.title} {...f} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  )
}
