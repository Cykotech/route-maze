/* eslint-disable react/no-unescaped-entities */
"use client";

import Header from "@components/Header/index";
import { SearchBar } from "@/components/SearchBar";
import RecentSearches from "@/components/RecentSearches";
import DestinationCardLarge from "@/components/DestinationCards/Large";
import { destinationsArray } from "@/components/DestinationCards/destinations";
import { Destination } from "@/components/DestinationCards/Small/destination.types";

import styles from "./page.module.scss";

export default function Flights() {
  function mapFourRandomDestinations() {
    const randomDestinations: Destination[] = [];

    for (let i = 0; randomDestinations.length < 4; i++) {
      let randomIndex = Math.floor(Math.random() * destinationsArray.length);
      if (!randomDestinations.includes(destinationsArray[randomIndex])) {
        randomDestinations.push(destinationsArray[randomIndex]);
      }
    }
    return randomDestinations.map((destination) => {
      return (
        <DestinationCardLarge
          key={destination.id}
          id={destination.id}
          alt={destination.alt}
          content={destination.content}
        />
      );
    });
  }

  return (
    <main className={styles.main}>
      <Header activeMode="hotel"></Header>
      <div className={styles.banner}>
        <div className={styles.textContainer}>
          <h2>Make your travel wishlist, we'll do the rest</h2>
          <p>Special offers to suit your plan</p>
        </div>
      </div>
      <div className={styles.searchContainer}>
        <SearchBar mode="hotel" />
      </div>
      <div className={styles.recentContainer}>
        <RecentSearches loggedIn={true} />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.text}>
          <h2>Fall into Travel</h2>
          <p>Going somewhere to celebrate this season? Whether you're going home or somewhere to roam, we've got the tools to get you to your destination.</p>
        </div>
        <div className={styles.cardContainer}>
          {mapFourRandomDestinations()}
        </div>
      </div>
    </main>
  );
}