import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <span className={styles.bar}>▌</span> CliPlay
      </div>
      <div className={styles.links}>
        <a href="https://www.npmjs.com/package/@kinetnode/cliplay" target="_blank" rel="noreferrer">npm</a>
        <a href="https://github.com/Carlos-iso/cliplay" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://github.com/Carlos-iso/cliplay/blob/main/CHANGELOG.md" target="_blank" rel="noreferrer">Changelog</a>
        <a href="https://github.com/Carlos-iso/cliplay/blob/main/LICENSE" target="_blank" rel="noreferrer">MIT</a>
      </div>
    </footer>
  );
}
