import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const canvasRef = useRef(null)
  const animRef = useRef(null)
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (prefersReducedMotion) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let width, height, nodes

    function resize() {
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
      initNodes()
    }

    function initNodes() {
      const count = Math.floor((width * height) / 18000)
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 1,
        pulse: Math.random() * Math.PI * 2,
      }))
    }

    function draw() {
      ctx.clearRect(0, 0, width, height)

      // Move nodes
      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        n.pulse += 0.02
        if (n.x < 0 || n.x > width) n.vx *= -1
        if (n.y < 0 || n.y > height) n.vy *= -1
      }

      // Draw edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 160) {
            const alpha = (1 - dist / 160) * 0.35
            ctx.beginPath()
            ctx.strokeStyle = `rgba(0, 245, 255, ${alpha})`
            ctx.lineWidth = 0.7
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw nodes
      for (const n of nodes) {
        const glow = 0.6 + 0.4 * Math.sin(n.pulse)
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 245, 255, ${glow})`
        ctx.shadowColor = '#00f5ff'
        ctx.shadowBlur = 8
        ctx.fill()
        ctx.shadowBlur = 0
      }

      animRef.current = requestAnimationFrame(draw)
    }

    resize()
    draw()

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    return () => {
      cancelAnimationFrame(animRef.current)
      ro.disconnect()
    }
  }, [prefersReducedMotion])

  return (
    <section className={styles.hero} id="hero" aria-label="Hero section">
      {!prefersReducedMotion && (
        <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />
      )}

      {/* Circuit grid overlay */}
      <div className={styles.circuitOverlay} aria-hidden="true" />

      {/* Radial glow */}
      <div className={styles.radialGlow} aria-hidden="true" />

      <div className={styles.gridContainer}>
        <div className={styles.textContent}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            <span>Asia&apos;s Largest Science &amp; Technology Festival</span>
          </div>

          <p className={styles.festivalName}>TECHFEST 2025 · IIT BOMBAY</p>

          <h1 className={styles.headline}>
            <span className={styles.headlineTop}>SIMULATED</span>
            <span className={styles.headlineBottom}>PARADIGM</span>
          </h1>

          <p className={styles.tagline}>
            Where human intelligence meets machine precision.
            <br />
            The cyborg era begins.
          </p>

          <div className={styles.ctaGroup}>
            <a
              href="#features"
              className={styles.ctaPrimary}
              aria-label="Explore Techfest events"
            >
              <span>Explore Events</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="https://www.techfest.org"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaSecondary}
              aria-label="Register for Techfest on techfest.org"
            >
              Register Now
            </a>
          </div>
        </div>

        <div className={styles.visualContent}>
          <div className={styles.holoFrame}>
            <div className={styles.scanline} />
            <img src="/cyborg_hero.png" alt="Simulated Paradigm Cyborg" className={styles.heroImage} />
            <div className={styles.holoGlow} />
            <div className={styles.cornerTL} />
            <div className={styles.cornerTR} />
            <div className={styles.cornerBL} />
            <div className={styles.cornerBR} />
            {/* Tech UI overlays */}
            <div className={styles.techOverlay}>
              <span className={styles.sysStatus}>SYS.ONLINE: 98.4%</span>
              <span className={styles.sysTarget}>LOCK_ON: HEAD_UNIT</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <div className={styles.scrollLine} />
        <span className={styles.scrollLabel}>Scroll</span>
      </div>
    </section>
  )
}
