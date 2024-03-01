import Header from '@/components/header/header';
import styles from './homeFuncionario.module.css';

export default function HomeFuncionarioPage() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1>Funcionário</h1>

        <fieldset>
          <center>
            <br />
            <button>Cadastrar Animal</button>
            <button>Buscar Animal</button>
            <button>Solicitar Acesso</button>
            <button>Atualizar seus Dados</button>
            {/* <button>Mudar Senha</button>  */}
            <br />
          </center>
        </fieldset>
      </div>
    </div>
  );
}
