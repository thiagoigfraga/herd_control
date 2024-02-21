import { StaticImageData } from 'next/image'
import image1 from '../images/imagem1.png'
import image2 from '../images/imagem2.png'
import image3 from '../images/imagem3.png'
import image4 from '../images/imagem4.png'
import image5 from '../images/imagem5.png'
import image6 from '../images/imagem6.png'
import { IImage } from './IImage'

export const images: IImage[] = [image1, image2, image3, image4,image5, image6]

const imageByIndex = (index: number): IImage => images[index % images.length]

export default imageByIndex
