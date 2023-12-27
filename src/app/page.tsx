"use client";

import { useState } from "react";
import { Button, TabButton } from "@components/Buttons";
import { SearchBar } from "@components/SearchBar/index";

import { HotelSVG } from "@/assets/svg/Hotel";
import { PlaneSVG } from "@/assets/svg/Plane";

import styles from "./page.module.scss";

export default function Home() {
  const [mode, SetMode] = useState("flight");
  const [flightTabActive, SetFlight] = useState(true);
  const [hotelTabActive, SetHotel] = useState(false);

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
      <div className={styles.test}>
        <p>Some features may not work as intended during development stage.</p>
      </div>
      <div className={styles.banner}>
        <header className={styles.header}>
          <div className={styles.linkContainer}>
            <Button>
              <PlaneSVG color="black" />
              Find Flights
            </Button>
            <Button>
              <HotelSVG color="black" />
              Find Hotels
            </Button>
          </div>
          <h1>RouteMaze</h1>
          <div className={styles.accountContainer}>
            <Button>Login</Button>
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
    </main>
  );
}
