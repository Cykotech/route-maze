import { Destination } from "./destination.types";

import newYork from "../../assets/images/newYork.jpg";
import paris from "../../assets/images/paris.jpg";
import tokyo from "../../assets/images/tokyo.jpg";
import london from "../../assets/images/london.jpg";
import rome from "../../assets/images/rome.jpg";
import barcelona from "../../assets/images/barcelona.jpg";
import sydney from "../../assets/images/sydney.jpg";
import dubai from "../../assets/images/dubai.jpg";
import bali from "../../assets/images/bali.jpg";

export const destinationsArray: Destination[] = [
  { id: "newYork", alt: "New York City", content: "New York City, US" },
  { id: "paris", alt: "Paris", content: "Paris, France" },
  { id: "tokyo", alt: "Tokyo", content: "Tokyo, Japan" },
  { id: "london", alt: "London", content: "London, England" },
  { id: "rome", alt: "Rome", content: "Rome, Italy" },
  { id: "barcelona", alt: "Barcelona", content: "Barcelona, Spain" },
  { id: "sydney", alt: "Sydney", content: "Sydney, Australia" },
  { id: "dubai", alt: "Dubai", content: "Dubai, UAE" },
  { id: "bali", alt: "Bali", content: "Bali, Indonesia" },
];

export const imageMap = {
  newYork: newYork,
  paris: paris,
  tokyo: tokyo,
  london: london,
  rome: rome,
  barcelona: barcelona,
  sydney: sydney,
  dubai: dubai,
  bali: bali,
};
