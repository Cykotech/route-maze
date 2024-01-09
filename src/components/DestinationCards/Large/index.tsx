import Image from "next/image";
import { Button } from "../../Buttons";

import { Destination, ImageMap } from "../destination.types";
import { imageMap } from "../destinations";

import styles from "./largeCard.module.scss";

export default function DestinationCardLarge({
  id,
  alt,
  content,
}: Destination) {
  const cardTitle = () => {
    const indexOfComma = content.indexOf(",");
    return content.slice(0, indexOfComma);
  };

  return (
    <div
      className={styles.card}
      style={{
        backgroundImage: `url("${imageMap[id as keyof ImageMap][1].src}")`,
      }}>
      <div>
        <div className={styles.textContainer}>
          <h3>{cardTitle()}</h3>
          <p>$ 700</p>
        </div>
        <Button buttonType="colored">Book Flight</Button>
        <div className={styles.gradient}></div>
      </div>
    </div>
  );
}
