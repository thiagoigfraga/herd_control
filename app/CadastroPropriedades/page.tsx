import Header from '@/components/header/header';
import styles from './cadastroPropriedade.module.css';

export default function CadastroPropriedadePage() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.titulo}>Novo Cadastro</h1>

        <form name="meu_form">
          <div className={styles.inputGroup}>
            <label htmlFor="nome">Nome da Propriedade:</label>
            <input
              type="text"
              id="nome"
              placeholder="Nome da Propriedade"
              required
            />

            <label htmlFor="cnpj">CNPJ:</label>
            <input
              type="text"
              id="cnpj"
              placeholder="99999999999999"
              required
            />

            <div className={styles.inputGroup}>
              <label htmlFor="telefone">Telefone:</label>
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
            <div className={styles.inputGroup}>
              <label htmlFor="cargo">Cargo:</label>
              <select id="cargo" required name="cargo">
                <option value="">Selecione o Cargo</option>
                <option value="Administrador">Administrador</option>
                <option value="Funcionário">Funcionário</option>
                <option value="Veterinário">Veterinário</option>
              </select>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="rua">Rua:</label>
              <input type="text" id="rua" placeholder="Logradouro" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="numero">Número:</label>
              <input type="text" id="numero" placeholder="Numero" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="bairro">Bairro:</label>
              <input type="text" id="bairro" placeholder="Bairro" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="cep">Cep:</label>
              <input type="text" id="cep" placeholder="00000-000" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="cidade">Cidade:</label>
              <input type="text" id="cidade" placeholder="Cidade" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="senha">Senha:</label>
              <input type="password" id="senha" placeholder="senha" required />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="confirmarSenha">Confirmar Senha:</label>
              <input
                type="password"
                id="confirmarSenha"
                placeholder="Confirmar senha"
                required
              />
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
