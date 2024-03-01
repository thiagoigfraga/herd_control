import Header from '@/components/header/header';
import styles from './homeAdministrador.module.css';

export default function HomeAdministradorPage() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1>Administrador</h1>

        <fieldset>
          <center>
            <br />
            <button>Cadastrar Propriedade</button>
            <button>Cadastrar Animal</button>
            <button>Buscar Animal</button>
            <button>Aprovar Acesso</button>
            <button>Atualizar seus Dados</button>
            {/* <button>Mudar Senha</button>  */}
            <br />
          </center>
        </fieldset>
      </div>
    </div>
  );
}
