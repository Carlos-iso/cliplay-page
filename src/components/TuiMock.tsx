import styles from './TuiMock.module.css';

export default function TuiMock() {
  return (
    <div className={styles.frame}>
      <div className={styles.titlebar}>
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.label}>terminal</span>
      </div>
      <div className={styles.body}>
        <div className={styles.headerLine}>
          <span className={styles.bar}>▌</span>
          <span className={styles.name}> CliPlay</span>
          <span className={styles.ver}> v0.0.4</span>
          <span className={styles.muted}>   /  i</span>
        </div>
        <div className={styles.sep}>──────────────────────────────────────────</div>
        <div className={styles.hint}>↑↓ navegar  enter executar  / filtrar  r reload  q sair</div>

        <Item selected label="build"  desc="Gerar build de produção" />
        <Item label="test"   desc="Executar todos os testes" />
        <Item label="dev"    desc="Servidor de desenvolvimento" />
        <Item label="lint"   desc="Verificar código com ESLint" />

        <div className={styles.divider}>──────────────────────────────────────────</div>
        <div className={styles.special}>   ↺  Recarregar</div>
        <div className={styles.special}>   ✕  Sair</div>
        <div className={styles.footerSep}>──────────────────────────────────────────</div>
        <div className={styles.count}>4 scripts</div>
      </div>
    </div>
  );
}

function Item({ selected, label, desc }: { selected?: boolean; label: string; desc: string }) {
  return (
    <div>
      <span style={{ color: selected ? 'var(--accent)' : 'transparent', fontWeight: 600 }}>❯ </span>
      <span style={{ color: 'var(--accent)', minWidth: '2ch', display: 'inline-block' }}>·</span>
      <span style={{
        color: selected ? 'var(--text)' : 'var(--text-2)',
        fontWeight: selected ? 600 : 400,
        minWidth: '14ch',
        display: 'inline-block',
      }}>{' '}{label}</span>
      <span style={{ color: selected ? 'var(--text-2)' : 'var(--text-3)', fontSize: '12px' }}>{desc}</span>
    </div>
  );
}
