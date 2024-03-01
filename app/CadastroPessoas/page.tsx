import Header from '@/components/header/header';
import styles from './cadastroPessoa.module.css';

export default function CadastroPessoaPage() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.titulo}>Novo Cadastro</h1>

        <form name="meu_form">
          <div className={styles.inputGroup}>
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              placeholder="Nome Sobrenome"
              required
            />

            <label htmlFor="cpf">CPF:</label>
            <input type="text" id="cpf" placeholder="999999999-99" required />

            <label htmlFor="dataNascimento">Data Nasc:</label>
            <input type="date" id="dataNascimento" required />

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
              <label htmlFor="estado">Estado:</label>
              <select id="estado" required name="Estado">
                <option value="">Selecione o Estado</option>
                <option value="Acre">AC</option>
                <option value="Alagoas">AL</option>
                <option value="Amapá">AP</option>
                <option value="Amazonas">AM</option>
                <option value="Bahia">BA</option>
                <option value="Ceará">CE</option>
                <option value="Distrito Federal">DF</option>
                <option value="Espírito Santo">ES</option>
                <option value="Goiás">GO</option>
                <option value="Maranhão">MA</option>
                <option value="Mato Grosso">MT</option>
                <option value="Mato Grosso do Sul">MS</option>
                <option value="Minas Gerais">MG</option>
                <option value="Pará">PA</option>
                <option value="Paraíba">PB</option>
                <option value="Paraná">PR</option>
                <option value="Pernambuco">PE</option>
                <option value="Piauí">PI</option>
                <option value="Rio de Janeiro">RJ</option>
                <option value="Rio Grande do Norte">RN</option>
                <option value="Rio Grande do Sul">RS</option>
                <option value="Rondônia">RO</option>
                <option value="Roraima">RR</option>
                <option value="Santa Catarina">SC</option>
                <option value="São Paulo">SP</option>
                <option value="Sergipe"> SE </option>
                <option value="Tocantins">TO</option>
              </select>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="senha">Senha:</label>
            <input type="password" id="senha" placeholder="Senha" required />
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

          <div className={styles.submitSection}>
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
