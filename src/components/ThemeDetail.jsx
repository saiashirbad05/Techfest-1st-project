import { useEffect, useRef, useState } from 'react'
import styles from './ThemeDetail.module.css'

export default function ThemeDetail() {
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
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.themeSection} id="blueprint" ref={ref} aria-label="Theme blueprint details">
      <div className={styles.container}>
        <div className={`${styles.visualColumn} ${visible ? styles.visible : ''}`}>
          {/* Card 1: Neural Synapse */}
          <div className={styles.blueprintCard}>
            <div className={styles.glowOverlay} />
            <div className={styles.cardHeader}>
              <span className={styles.moduleCode}>MOD_01 // COGNITIVE</span>
              <h3 className={styles.cardTitle}>Neural Network Synapse</h3>
            </div>
            <div className={styles.imageContainer}>
              <img src="/cyborg_brain.png" alt="Neural Synapse" className={styles.moduleImage} />
            </div>
            <p className={styles.cardText}>
              Translating synaptic impulses into real-time digital computations, merging organic thought with cybernetic processing speed.
            </p>
            <div className={styles.techBar}>
              <span>SYNAPSE RATE: 1.2 GB/S</span>
              <span className={styles.statusOk}>ACTIVE</span>
            </div>
          </div>

          {/* Card 2: Bionic Arm */}
          <div className={styles.blueprintCard}>
            <div className={styles.glowOverlay} />
            <div className={styles.cardHeader}>
              <span className={styles.moduleCode}>MOD_02 // KINETIC</span>
              <h3 className={styles.cardTitle}>Bionic Motor Augmentation</h3>
            </div>
            <div className={styles.imageContainer}>
              <img src="/cyborg_implant.png" alt="Bionic Motor Augmentation" className={styles.moduleImage} />
            </div>
            <p className={styles.cardText}>
              High-precision titanium chassis integrated with neuromuscular feedback loops, enabling flawless cybernetic coordination.
            </p>
            <div className={styles.techBar}>
              <span>MOTOR OUTPUT: 98.2 NM</span>
              <span className={styles.statusOk}>CALIBRATED</span>
            </div>
          </div>
        </div>

        <div className={`${styles.textColumn} ${visible ? styles.visible : ''}`}>
          <span className={styles.sectionTag}>// SYSTEM SCHEMATICS</span>
          <h2 className={styles.sectionTitle}>Simulated Paradigm</h2>
          
          <div className={styles.descriptionBlock}>
            <p className={styles.leadText}>
              Techfest 2025 presents the ultimate convergence of biology and engineering. The "Simulated Paradigm" theme explores the boundary where humanity meets mechanical evolution.
            </p>
            
            <p className={styles.normalText}>
              By interfacing cognitive neural networks with biomechanical machinery, we unlock unprecedented potential. From advanced neural implants to adaptive cybernetic prosthetics, this paradigm redefines human capacity and sparks the next industrial revolution.
            </p>
          </div>

          <div className={styles.specGrid}>
            <div className={styles.specItem}>
              <span className={styles.specValue}>01 / COGNITIVE</span>
              <p className={styles.specLabel}>Quantum synapses connecting neural signals directly to data algorithms.</p>
            </div>
            <div className={styles.specItem}>
              <span className={styles.specValue}>02 / MECHANICAL</span>
              <p className={styles.specLabel}>Adaptive titanium frames responsive to motor cortical commands.</p>
            </div>
            <div className={styles.specItem}>
              <span className={styles.specValue}>03 / EVOLUTIONARY</span>
              <p className={styles.specLabel}>A unified system redefining the paradigm of human intelligence.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
