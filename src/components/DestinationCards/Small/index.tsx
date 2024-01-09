import Image from "next/image";
import styles from "./destination.module.scss";

import { imageMap } from "../destinations";

import { Destination, ImageMap } from "./destination.types";

export default function DestinationCard({ id, alt, content }: Destination) {
  const imageKey = id + "Small";

  return (
    <div className={styles.card}>
      <Image
        src={imageMap[id as keyof ImageMap][imageKey]}
        alt={alt}
        width={300}
        height={300}></Image>
      <div className={styles.textContainer}>
        <h3>{content}</h3>
        <ul>
          <li>
            <button>Flights</button>
          </li>
          &#8226;
          <li>
            <button>Hotels</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
