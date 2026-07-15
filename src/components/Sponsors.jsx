import styles from './Sponsors.module.css'

const SPONSORS = [
  { name: 'Google', tier: 'platinum' },
  { name: 'Microsoft', tier: 'platinum' },
  { name: 'IBM', tier: 'gold' },
  { name: 'ISRO', tier: 'gold' },
  { name: 'Boeing', tier: 'silver' },
  { name: 'Tata', tier: 'silver' },
  { name: 'Qualcomm', tier: 'silver' },
  { name: 'DRDO', tier: 'silver' },
  { name: 'Samsung', tier: 'bronze' },
  { name: 'Infosys', tier: 'bronze' },
]

export default function Sponsors() {
  return (
    <section className={styles.sponsors} id="sponsors" aria-label="Sponsors and partners">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.sectionTag}>// PARTNERS</span>
          <h2 className={styles.sectionTitle}>Sponsors &amp; Partners</h2>
          <p className={styles.sectionSubtitle}>
            Powered by industry leaders who believe in the future of technology.
          </p>
        </div>

        {/* Marquee row — doubled for seamless infinite scroll */}
        <div className={styles.marqueeWrap} aria-label="Sponsor logos">
          <div className={styles.marqueeTrack} aria-hidden="true">
            {[...SPONSORS, ...SPONSORS].map((s, i) => (
              <div key={i} className={`${styles.sponsorBadge} ${styles[s.tier]}`}>
                <span className={styles.sponsorName}>{s.name}</span>
              </div>
            ))}
          </div>
        </div>

        <p className={styles.sponsorNote}>
          Interested in partnering with Techfest?&nbsp;
          <a href="mailto:sponsorship@techfest.org" className={styles.link}>
            Contact us →
          </a>
        </p>
      </div>
    </section>
  )
}
