import styles from './Features.module.css';

const FEATURES = [
  { key: '01 — plug',   title: 'Zero configuração',      desc: 'Execute cliplay em qualquer diretório. Detecta automaticamente package.json, gerenciador de pacotes e arquivos .sh.' },
  { key: '02 — nav',    title: 'Navegação completa',      desc: '↑↓ para navegar, / para filtrar, i para passar args extras, r para recarregar. Navegação circular.' },
  { key: '03 — theme',  title: 'Temas integrados',        desc: 'Três temas prontos — default, ocean, forest. A TUI do seu projeto reflete a identidade que você escolher.' },
  { key: '04 — api',    title: 'Biblioteca reutilizável', desc: 'Importe openMenu<T> em qualquer CLI Node.js. Sem acoplamento — você passa os itens e o callback onSelect.' },
  { key: '05 — scroll', title: 'Scroll adaptativo',       desc: 'Janela de itens calculada pela altura do terminal. Nenhuma linha transborda, nenhum scroll quebra o viewport.' },
  { key: '06 — shell',  title: 'Args para o shell',       desc: 'Scripts package recebem -- automaticamente antes dos args extras. Flags como --no-version chegam corretas.' },
];

export default function Features() {
  return (
    <section className={styles.section}>
      <p className={styles.label}>Recursos</p>
      <div className={styles.grid}>
        {FEATURES.map((f) => (
          <div key={f.key} className={styles.card}>
            <div className={styles.cardKey}>{f.key}</div>
            <div className={styles.cardTitle}>{f.title}</div>
            <div className={styles.cardDesc}>{f.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
