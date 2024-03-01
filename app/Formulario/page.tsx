import Header from '@/components/header/header';
import styles from './formulario.module.css';

export default function FormularioPage() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.titulo}>Formulário</h1>

        <form name="meu_form">
          <div className={styles.inputGroup}>
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              placeholder="Nome Sobrenome"
              required
            />

            <div className={styles.inputGroup}>
              <label htmlFor="telefone">Fone:</label>
              <input
                type="tel"
                id="telefone"
                placeholder="(99)999999999"
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                placeholder="email@gmail.com"
                required
              />
            </div>

            <label htmlFor="dataNascimento">Data Nasc:</label>
            <input type="date" id="dataNascimento" required />
          </div>

          <div className={styles.submitSection}>
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
