import TuiMock from './TuiMock';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.text}>
        <p className={styles.eyebrow}>@kinetnode/cliplay · v0.0.4</p>
        <h1 className={styles.h1}>
          Scripts.<br /><span className={styles.dim}>Sem atrito.</span>
        </h1>
        <p className={styles.desc}>
          Acople a qualquer projeto. Lê scripts do <code>package.json</code> e
          arquivos <code>.sh</code> e apresenta uma TUI navegável com temas,
          filtro e modo input.
        </p>
        <div className={styles.actions}>
          <a className={styles.btnPrimary} href="#quickstart">Início rápido</a>
          <a className={styles.btnGhost} href="https://github.com/Carlos-iso/cliplay" target="_blank" rel="noreferrer">Ver no GitHub</a>
        </div>
      </div>
      <TuiMock />
    </div>
  );
}
