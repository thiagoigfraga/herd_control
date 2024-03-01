import Image from 'next/image';
import styles from './header.module.css';
import Imagem1 from '../../images/imagem1.png';
import Imagem2 from '../../images/imagem2.png';
import Imagem3 from '../../images/imagem3.png';
import Imagem4 from '../../images/imagem4.png';

export default function Header() {
  return (
    <div className={styles.gridFiguras}>
      <Image src={Imagem1} width="266" height="200" alt="Animal Grande 1" />
      <Image src={Imagem2} width="266" height="200" alt="Animal Grande 2" />
      <Image src={Imagem3} width="266" height="200" alt="Animal Grande 3" />
      <Image src={Imagem4} width="266" height="200" alt="Animal Grande 4" />
    </div>
  );
}
