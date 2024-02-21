import { StaticImageData } from "next/image";

export interface IImage {
    //   image: HTMLImageElement;
    src: string | StaticImageData;
    className?: string;
  }