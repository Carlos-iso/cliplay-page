import { useState } from 'react';
import styles from './Api.module.css';

const SNIPPET = `import { openMenu } from '@kinetnode/cliplay';

await openMenu({
  title:   'meu-cli',
  theme:   'ocean',
  items: [
    { key: 'build',  label: 'Build',  description: 'Gerar build' },
    { key: 'deploy', label: 'Deploy', description: 'Publicar',
      needsInput: true, inputPrompt: 'Tag (ex: v1.2.0)' },
  ],
  onSelect:  async (item, input) => { /* sua lógica */ },
  onReload:  () => loadItems(),  // opcional
});`;

const FIELDS = [
  { name: 'title',    type: 'string',              req: false, desc: 'Título exibido no header da TUI.' },
  { name: 'theme',    type: 'string',              req: false, desc: "'default' | 'ocean' | 'forest'" },
  { name: 'items',    type: 'T[]',                 req: true,  desc: 'Array de itens com key e label. Campos opcionais: description, icon, needsInput, inputPrompt.' },
  { name: 'onSelect', type: '(item, input?) => void', req: true, desc: 'Callback chamado ao selecionar. input preenchido quando needsInput: true.' },
  { name: 'onReload', type: '() => T[]',           req: false, desc: 'Recarrega os itens quando o usuário pressiona r ou seleciona Recarregar.' },
];

export default function Api() {
  const [copied, setCopied] = useState(false);

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

  const copy = () => {
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(SNIPPET).catch(() => fallbackCopy(SNIPPET));
    } else {
      fallbackCopy(SNIPPET);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="api" className={styles.section}>
      <p className={styles.label}>API — Biblioteca</p>
      <h2 className={styles.h2}>Use em qualquer CLI Node.js.</h2>
      <p className={styles.sub}>
        Importe <code>openMenu</code> para criar menus interativos em seu próprio CLI
        sem depender do ScriptManager do CliPlay.
      </p>

      <div className={styles.block}>
        <div className={styles.blockHeader}>
          <span>TypeScript / Node.js</span>
          <button className={styles.copyBtn} onClick={copy}>
            {copied ? 'copiado' : 'copiar'}
          </button>
        </div>
        <pre className={styles.pre}>
          <Highlight code={SNIPPET} />
        </pre>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Campo</th>
            <th>Tipo</th>
            <th></th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {FIELDS.map((f) => (
            <tr key={f.name}>
              <td className={styles.field}>{f.name}</td>
              <td className={styles.type}>{f.type}</td>
              <td className={f.req ? styles.req : styles.opt}>{f.req ? 'req' : 'opt'}</td>
              <td className={styles.desc}>{f.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

function Highlight({ code }: { code: string }) {
  const html = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/(import|await|async|from|true|false)/g, '<span class="kw">$1</span>')
    .replace(/('[^']*')/g, '<span class="str">$1</span>')
    .replace(/(\/\/ [^\n]*)/g, '<span class="cmt">$1</span>');

  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}
