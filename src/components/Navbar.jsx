import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#features', label: 'Events' },
    { href: '#timeline', label: 'Timeline' },
    { href: '#sponsors', label: 'Sponsors' },
    { href: '#footer', label: 'Contact' },
  ]

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} aria-label="Main navigation">
      <div className={styles.container}>
        <a href="#hero" className={styles.logo} aria-label="Techfest IIT Bombay">
          <img src="/logo.jpg" alt="Techfest Logo" className={styles.logoImage} />
          <span className={styles.logoTechfest}>TECHFEST</span>
          <span className={styles.logoDivider}>|</span>
          <span className={styles.logoIIT}>IIT BOMBAY</span>
        </a>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.menuOpen : ''}`}>
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={styles.navLink}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://www.techfest.org"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaButton}
        >
          Register Now
        </a>
      </div>
    </nav>
  )
}
