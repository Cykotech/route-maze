import { StaticImageData } from "next/image";

export type Destination = {
  id: string;
  alt: string;
  content: string;
};

type Images = [StaticImageData, StaticImageData];

export interface ImageMap {
  newYork: Images;
  paris: Images;
  tokyo: Images;
  london: Images;
  rome: Images;
  barcelona: Images;
  sydney: Images;
  dubai: Images;
  bali: Images;
}
