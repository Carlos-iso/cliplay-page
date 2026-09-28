import { useState } from 'react';
import styles from './Nav.module.css';

export default function Nav() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    const text = 'npm install -g @kinetnode/cliplay';
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
    } else {
      fallbackCopy(text);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const fallbackCopy = (text: string) => {
    const el = document.createElement('textarea');
    el.value = text;
    el.style.cssText = 'position:fixed;top:-9999px;left:-9999px;opacity:0';
    document.body.appendChild(el);
    el.focus();
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <span className={styles.bar}>▌</span>CliPlay
      </div>
      <div className={styles.links}>
        <a href="#quickstart">Início rápido</a>
        <a href="#api">API</a>
        <a href="https://github.com/Carlos-iso/cliplay" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.npmjs.com/package/@kinetnode/cliplay" target="_blank" rel="noreferrer">npm</a>
      </div>
      <button className={`${styles.install} ${copied ? styles.copied : ''}`} onClick={copy} title="Copiar comando de instalação">
        {copied ? (
          <><span className={styles.check}>✓</span> copiado!</>
        ) : (
          <>
            <span className={styles.cmd}>$</span> npm i -g @kinetnode/cliplay
            <svg className={styles.copyIcon} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2"/>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
            </svg>
          </>
        )}
      </button>
    </nav>
  );
}
