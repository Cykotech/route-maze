/* eslint-disable react/jsx-key */
"use client";

import Link from "next/link";
import { useState } from "react";
import { Button, TabButton } from "@components/Buttons";
import { SearchBar } from "@components/SearchBar/index";
import RecentSearches from "@components/RecentSearches";
import DestinationCard from "@/components/DestinationCards/Small/index";
import { destinationsArray } from "../components/DestinationCards/destinations";

import { HotelSVG } from "@/assets/svg/Hotel";
import { PlaneSVG } from "@/assets/svg/Plane";

import styles from "./page.module.scss";

export default function Home() {
  const [mode, SetMode] = useState("flight");
  const [flightTabActive, SetFlight] = useState(true);
  const [hotelTabActive, SetHotel] = useState(false);
  const [loggedIn, SetLoggedIn] = useState(false);

  function changeToFlightMode() {
    if (!flightTabActive) {
      SetFlight(true);
      SetHotel(false);
      SetMode("flight");
    }
  }

  function changeToHotelMode() {
    if (!hotelTabActive) {
      SetFlight(false);
      SetHotel(true);
      SetMode("hotel");
    }
  }

  return (
    <main className={styles.main}>
      <div className={styles.banner}>
        <header className={styles.header}>
          <div className={styles.linkContainer}>
            <Link href="/flights">
              <Button>
                <PlaneSVG color="black" />
                Find Flights
              </Button>
            </Link>
            <Link href="/hotels">
              <Button>
                <HotelSVG color="black" />
                Find Hotels
              </Button>
            </Link>
          </div>
          <h1>RouteMaze</h1>
          <div className={styles.accountContainer}>
            <Button
              handleClick={() => {
                SetLoggedIn(true);
              }}>
              Login
            </Button>
            <Button buttonType="white">Register</Button>
          </div>
        </header>
        <div className={styles.textContainer}>
          <h2 className={styles.accent}>Helping Others</h2>
          <h2>LIVE & TRAVEL</h2>
          <p>Special offers to suit your plan</p>
        </div>
      </div>
      <div className={styles.searchContainer}>
        <div className={styles.searchmodeContainer}>
          <TabButton
            active={flightTabActive}
            handleClick={changeToFlightMode}>
            <PlaneSVG color="black" />
            Flights
          </TabButton>
          <div className={styles.border}></div>
          <TabButton
            active={hotelTabActive}
            handleClick={changeToHotelMode}>
            <HotelSVG color="black" />
            Hotels
          </TabButton>
        </div>
        <SearchBar mode={mode} />
      </div>
      <div className={styles.recentContainer}>
        <RecentSearches loggedIn={loggedIn} />
      </div>
      <div className={styles.destinationContainer}>
        <div className={styles.destinationHeader}>
          <div className="textContainer">
            <h2>Plan Your Perfect Trip</h2>
            <p>Search Flights & Hotels for your dream vacation destination</p>
          </div>
          <Button>See More Places</Button>
        </div>
        <div className={styles.cardContainer}>
          {destinationsArray.map((destination) => {
            return (
              <DestinationCard
                id={destination.id}
                alt={destination.alt}
                content={destination.content}
                key={destination.id}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
