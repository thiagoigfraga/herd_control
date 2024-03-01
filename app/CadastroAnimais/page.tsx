import Header from '@/components/header/header';
import styles from './cadastroAnimal.module.css';

export default function CadastroAnimalPage() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1>Cadastrar Novo Animal</h1>
        <form name="meu_form">
          <div className={styles.inputGroup}>
            <label htmlFor="brinco">Número:</label>
            <input
              type="text"
              id="brinco"
              placeholder="Número do Brinco"
              required
            />
            <div className={styles.inputGroup}>
              <label htmlFor="dNasc">Data de Nascimento:</label>
              <input type="date" id="dNasc" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="dCompra">Data de Chegada:</label>
              <input type="date" id="dCompra" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="especie">Espécie:</label>
              <select id="especie" required>
                <option value="">Selecione a espécie</option>
                <option value="Bovinos">Bovinos</option>
                <option value="Bubalinos">Bubalinos</option>
                <option value="Caprinos">Caprinos</option>
                <option value="Equinos">Equinos</option>
                <option value="Ovinos">Ovinos</option>
                <option value="Outros">Outros</option>
              </select>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="raca">Raça:</label>
              <input type="text" id="raca" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="sexo">Sexo:</label>
              <select id="sexo" required>
                <option value="">Selecione o sexo</option>
                <option value="F">Fêmea</option>
                <option value="M">Macho</option>
              </select>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="especificacao">Especificação:</label>
              <select id="especificacao" required>
                <option value="">Selecione a especificação</option>
                <option value="Corte">Corte</option>
                <option value="Leiteiro">Leiteiro</option>
                <option value="Reprodução">Reprodução</option>
                <option value="Outro">Outro</option>
              </select>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="peso">Peso (kg):</label>
              <input type="number" id="peso" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="rebanho">Rebanho:</label>
              <input type="number" id="rebanho" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="alimentacao">Alimentação:</label>
              <input type="text" id="alimentacao" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="procedencia">Procedência:</label>
              <input type="text" id="procedencia" required />
            </div>
          </div>

          <div className={styles.submitSection}>
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
