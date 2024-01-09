import DestinationCard from "../DestinationCards/Small";

import { destinationsArray } from "../DestinationCards/destinations";

import { RecentSearchProps } from "./recent.types";
import { Destination } from "../DestinationCards/Small/destination.types";

import styles from "./recent.module.scss";

export default function RecentSearches({ loggedIn }: RecentSearchProps) {
  function checkLoggedIn() {
    if (!loggedIn) {
      return (
        <p>Please log in or register to display your most recent searches.</p>
      );
    }
  }

  function mapThreeRandomDestinations() {
    const randomDestinations: Destination[] = [];
    if (loggedIn) {
      for (let i = 0; randomDestinations.length < 3; i++) {
        let randomIndex = Math.floor(Math.random() * destinationsArray.length);
        if (!randomDestinations.includes(destinationsArray[randomIndex])) {
          randomDestinations.push(destinationsArray[randomIndex]);
        }
      }
      return randomDestinations.map((destination) => {
        return (
          <>
            <DestinationCard
              key={destination.id}
              id={destination.id}
              alt={destination.alt}
              content={destination.content}
            />
          </>
        );
      });
    }
  }

  return (
    <div className={styles.container}>
      <h2>Your Recent Searches</h2>
      {checkLoggedIn()}
      <div className={styles.cardContainer}>{mapThreeRandomDestinations()}</div>
    </div>
  );
}
