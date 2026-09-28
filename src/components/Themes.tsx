import styles from './Themes.module.css';

const THEMES = [
  {
    name: 'default',
    bg: '#0D0D14',
    primary: '#7C3AED',
    accent: '#10B981',
    muted: '#6B7280',
    text: '#F9FAFB',
    cursor: '❯',
  },
  {
    name: 'ocean',
    bg: '#050E1A',
    primary: '#0EA5E9',
    accent: '#06B6D4',
    muted: '#64748B',
    text: '#E0F2FE',
    cursor: '→',
  },
  {
    name: 'forest',
    bg: '#060F0A',
    primary: '#16A34A',
    accent: '#84CC16',
    muted: '#71717A',
    text: '#F0FDF4',
    cursor: '▸',
  },
];

export default function Themes() {
  return (
    <section className={styles.section}>
      <p className={styles.label}>Temas</p>
      <h2 className={styles.h2}>Três identidades.</h2>
      <p className={styles.sub}>
        Configure com <code>"theme": "ocean"</code> em <code>.cliplay.json</code>.
        O tema é aplicado globalmente na TUI.
      </p>
      <div className={styles.grid}>
        {THEMES.map((t) => (
          <div key={t.name} className={styles.card}>
            <div className={styles.preview} style={{ background: t.bg }}>
              <div>
                <span style={{ color: t.primary, fontWeight: 600 }}>▌ CliPlay</span>
                {' '}
                <span style={{ color: t.muted }}>v0.0.4</span>
              </div>
              <div style={{ color: t.muted }}>────────────────────</div>
              <div>
                <span style={{ color: t.primary, fontWeight: 600 }}>{t.cursor} </span>
                <span style={{ color: t.accent }}>·</span>
                <span style={{ color: t.text, fontWeight: 600 }}> build</span>
              </div>
              <div>
                <span style={{ opacity: 0 }}>{t.cursor} </span>
                <span style={{ color: t.muted }}>· test</span>
              </div>
              <div>
                <span style={{ opacity: 0 }}>{t.cursor} </span>
                <span style={{ color: t.muted }}>· dev</span>
              </div>
              <div style={{ color: t.muted }}>────────────────────</div>
              <div style={{ color: t.muted, fontSize: '12px' }}>3 scripts</div>
            </div>
            <div className={styles.themeName} style={{ color: t.muted }}>{t.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
