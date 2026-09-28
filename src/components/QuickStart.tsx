import { useState } from 'react';
import styles from './QuickStart.module.css';

const STEPS = [
  { label: 'Instalar',                  code: 'npm install -g @kinetnode/cliplay' },
  { label: 'Inicializar no projeto',    code: 'cd meu-projeto\ncliplay init' },
  { label: 'Abrir a TUI',               code: 'cliplay' },
  { label: 'Ou com npx, sem instalar',  code: 'npx @kinetnode/cliplay' },
];

function CodeBlock({ label, code }: { label: string; code: string }) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(code).catch(() => fallbackCopy(code));
    } else {
      fallbackCopy(code);
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
    <div className={styles.block}>
      <div className={styles.blockHeader}>
        <span>{label}</span>
        <button className={styles.copyBtn} onClick={copy}>
          {copied ? 'copiado' : 'copiar'}
        </button>
      </div>
      <pre className={styles.pre}>
        {code.split('\n').map((line, i) => (
          <div key={i}>
            <span className={styles.prefix}>$ </span>{line}
          </div>
        ))}
      </pre>
    </div>
  );
}

export default function QuickStart() {
  return (
    <section id="quickstart" className={styles.section}>
      <p className={styles.label}>Início rápido</p>
      <div className={styles.steps}>
        {STEPS.map((s) => (
          <CodeBlock key={s.label} label={s.label} code={s.code} />
        ))}
      </div>
    </section>
  );
}
