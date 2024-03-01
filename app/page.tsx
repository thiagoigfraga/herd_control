import Header from '@/components/header/header';
import styles from './home.module.css';
export default function HomePage() {
  return (
    <div>
      <Header />
      <h1 style={{ textAlign: 'center' }}>Herd Control</h1>

      <div className="corPrincipal">
        <fieldset>
          <center>
            <br />
            <input
              id="inputPrincipal"
              type="text"
              name="Email"
              placeholder="E-mail ou Usuário"
            />
            <input id="inputPrincipal" type="password" placeholder="Senha" />
            <br />
            <form action="./HomeAdministrador.html">
              <button>Acessar</button>
            </form>
            <br />
          </center>
        </fieldset>

        <fieldset>
          <center>
            <table>
              <tbody>
                {' '}
                {/* Agrupe o conteúdo da tabela */}
                <tr>
                  <td>
                    <button>Esqueci minha senha</button>
                  </td>
                  <td>
                    <form action="./CadastroPessoas.html">
                      <button>Quero me cadastrar!</button>
                    </form>
                  </td>
                </tr>
              </tbody>
            </table>
          </center>
        </fieldset>
      </div>

      <div className={styles.contato}>
        <p>(42)9999-9999</p>
        <p>contato@herdcontrol.com</p>
      </div>
    </div>
  );
}
