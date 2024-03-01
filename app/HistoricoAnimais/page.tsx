import Header from '@/components/header/header';
import styles from './historicoAnimais.module.css';

export default function HistoricoAnimaisPage() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.titulo}>Histórico Animal</h1>

        <form>
          <div className={styles.inputGroup}>
            <label htmlFor="dvacina">Data da Vacina:</label>
            <input
              type="date"
              id="dvacina"
              placeholder="00/00/0000"
              name="dvacina"
            />

            <label htmlFor="vacina">Tipo de Vacina:</label>
            <input
              type="text"
              id="vacina"
              placeholder="Descreva a vacina"
              name="vacina"
            />

            <label htmlFor="peso">Peso:</label>
            <input
              type="number"
              id="peso"
              placeholder="kg"
              required
              name="peso"
            />

            <label htmlFor="descricao">Descrição de saúde:</label>
            <textarea
              id="descricao"
              name="descricao"
              placeholder="Descreva o estado de saúde do animal"
            />

            <label htmlFor="alimentacao">Alimentação:</label>
            <input
              type="text"
              id="alimentacao"
              name="alimentacao"
              placeholder="Tipo de alimentação"
            />
          </div>

          <div className={styles.submitSection}>
            <button type="submit">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
