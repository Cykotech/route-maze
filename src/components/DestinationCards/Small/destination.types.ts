import { StaticImageData } from "next/image";

export type Destination = {
  id: string;
  alt: string;
  content: string;
};

export interface ImageMap {
  newYork: StaticImageData;
  paris: StaticImageData;
  tokyo: StaticImageData;
  london: StaticImageData;
  rome: StaticImageData;
  barcelona: StaticImageData;
  sydney: StaticImageData;
  dubai: StaticImageData;
  bali: StaticImageData;
}
