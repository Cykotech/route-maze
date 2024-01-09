import Image from "next/image";
import { Button } from "../../Buttons";

import { Destination, ImageMap } from "../Small/destination.types";
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
  const imageKey = id + "Large";

  return (
    <div
      className={styles.card}
      style={{
        backgroundImage: `url("${imageMap[id as keyof ImageMap][imageKey].src}")`,
      }}>
      <div className={styles.textContainer}>
        <h3>{cardTitle()}</h3>
        <p>$ 700</p>
      </div>
      <Button buttonType="colored">Book Flight</Button>
    </div>
  );
}
