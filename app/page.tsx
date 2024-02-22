import Image from 'next/image'
import styles from "./home.module.css"
import Imagem1 from "../images/imagem1.png"
import Imagem2 from "../images/imagem2.png"
import Imagem3 from "../images/imagem3.png"
import Imagem4 from "../images/imagem4.png"
import Imagem5 from "../images/imagem5.png"
import Imagem6 from "../images/imagem6.png"

export default function HomePage() {
    return (
        <div>
            <div className={styles.gridFiguras}>
                <Image src={Imagem1} width="266" height="200" alt="Animal Grande 1" />
                <Image src={Imagem2} width="266" height="200" alt="Animal Grande 2" />
                <Image src={Imagem3} width="266" height="200" alt="Animal Grande 3" />
                <Image src={Imagem4} width="266" height="200" alt="Animal Grande 4" />
                <Image src={Imagem5} width="266" height="200" alt="Animal Grande 5" />
                <Image src={Imagem6} width="266" height="200" alt="Animal Grande 6" />
            </div>

            <h1 style={{textAlign: 'center'}}>Herd Control</h1>

            <div className="corPrincipal">
                <fieldset>
                    <center>
                        <br />
                        <input id="inputPrincipal" type="text" name="Email"
                            placeholder="E-mail ou Usuário" />
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
                            <tbody> {/* Agrupe o conteúdo da tabela */}
                                <tr>
                                    <td><button>Esqueci minha senha</button></td>
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
