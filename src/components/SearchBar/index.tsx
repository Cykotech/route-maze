import { useState, useEffect } from "react";

import { DropDown } from "./Inputs/DropDown";
import { TextField } from "./Inputs/TextField";
import { Button } from "../Buttons";
// import { tempSearchAlert } from "../../util/utilities";

import { SearchBarProps } from "./SearchBar.types";

import { PointerSVG } from "@/assets/svg/Pointer";

import styles from "./searchbar.module.scss";

export const SearchBar = ({ mode }: SearchBarProps) => {
  const [direction, setDirection] = useState({
    id: "oneWay",
    content: "One Way",
  });
  const [flightClass, setFlightClass] = useState({
    id: "economy",
    content: "Economy",
  });
  const [destination, setDestination] = useState("");
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");

  // const today = new Date();

  // useEffect(() => {
  //   setDate1(today.toISOString().split("T")[0]);
  // }, [today]);

  // useEffect(() => {
  //   const minEndDate = new Date(today);
  //   minEndDate.setDate(today.getDate() + 1);
  //   minEndDate.toISOString().split("T")[0];
  //   setDate2(minEndDate);
  // }, [today]);

  if (mode === "flight") {
    return (
      <>
        <div className={styles.searchbar}>
          {/* <TextField
            placeholder="NYC, New York"
            id="from"
            label="Origin"
          /> */}
          <TextField
            placeholder="Los Angeles, California"
            id="destination"
            label="Destination"
            value={destination}
            handleChange={setDestination}
          />
          <DropDown
            id="trip-direction"
            direction={direction}
            setDirection={setDirection}
          />
          <TextField
            placeholder="1/1/2023"
            id="date1"
            label="Departure Date"
            value={date1}
            handleChange={setDate1}
          />
          <TextField
            placeholder="1/1/2023"
            id="date2"
            label="Return Date"
            value={date2}
            handleChange={setDate2}
          />
          {/* <TextField
            placeholder="1"
            id="passengers"
            label="Number of Passengers"
          /> */}
          <DropDown
            id="flight-class"
            flightClass={flightClass}
            setFlightClass={setFlightClass}
          />
        </div>
        <div className={styles.container}>
          {/* <Button
            buttonType="colored"
            handleClick={tempSearchAlert}>
            <PointerSVG />
            Search
          </Button> */}
        </div>
      </>
    );
  }
  if (mode === "hotel") {
    return (
      <>
        <div className={styles.searchbar}>
          <TextField
            placeholder="Los Angeles, California"
            id="destination"
            label="Destination"
            value={destination}
            handleChange={setDestination}
          />
          {/* <TextField
            placeholder="1/1/2023"
            id="date1"
            label="Check In Date"
          /> */}
          {/* <TextField
            placeholder="1/1/2023"
            id="date2"
            label="Check Out Date"
          /> */}
          {/* <TextField
            placeholder="1"
            id="guests"
            label="Number of Guests"
          /> */}
          {/* <TextField
            placeholder="1"
            id="rooms"
            label="Number of Rooms"
          /> */}
        </div>
        <div className={styles.container}>
          <Button buttonType="colored">
            {/* <PointerSVG /> */}
            Search
          </Button>
        </div>
      </>
    );
  }
};
