import { Destination } from "./destination.types";

import newYorkSmall from "../../assets/images/newYorkSmall.jpg";
import newYorkLarge from "../../assets/images/newYorkLarge.jpg";
import parisSmall from "../../assets/images/parisSmall.jpg";
import parisLarge from "../../assets/images/parisLarge.jpg";
import tokyoSmall from "../../assets/images/tokyoSmall.jpg";
import tokyoLarge from "../../assets/images/tokyoLarge.jpg";
import londonSmall from "../../assets/images/londonSmall.jpg";
import londonLarge from "../../assets/images/londonLarge.jpg";
import romeSmall from "../../assets/images/romeSmall.jpg";
import romeLarge from "../../assets/images/romeLarge.jpeg";
import barcelonaSmall from "../../assets/images/barcelonaSmall.jpg";
import barcelonaLarge from "../../assets/images/barcelonaLarge.jpg";
import sydneySmall from "../../assets/images/sydneySmall.jpg";
import sydneyLarge from "../../assets/images/sydneyLarge.jpg";
import dubaiSmall from "../../assets/images/dubaiSmall.jpg";
import dubaiLarge from "../../assets/images/dubaiLarge.jpg";
import baliSmall from "../../assets/images/baliSmall.jpg";
import baliLarge from "../../assets/images/baliLarge.jpg";

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
  newYork: [newYorkSmall, newYorkLarge],
  paris: [parisSmall, parisLarge],
  tokyo: [tokyoSmall, tokyoLarge],
  london: [londonSmall, londonLarge],
  rome: [romeSmall, romeLarge],
  barcelona: [barcelonaSmall, barcelonaLarge],
  sydney: [sydneySmall, sydneyLarge],
  dubai: [dubaiSmall, dubaiLarge],
  bali: [baliSmall, baliLarge],
};
