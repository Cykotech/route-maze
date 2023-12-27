import { useEffect } from "react";

import { useSearchBarStore } from "@/stores/searchbarStore";

import { DropDown } from "./Inputs/DropDown";
import { TextField } from "./Inputs/TextField";
import { Button } from "../Buttons";
import {
  tempFlightSearchAlert,
  tempHotelSearchAlert,
} from "../../util/utilities";

import { SearchBarProps } from "./SearchBar.types";
import { SearchOption } from "./Inputs/DropDown/DropDown.types";

import { PointerSVG } from "@/assets/svg/Pointer";

import styles from "./searchbar.module.scss";

export const SearchBar = ({ mode }: SearchBarProps) => {
  const {
    origin,
    updateOrigin,
    destination,
    updateDestination,
    direction,
    updateDirection,
    date1,
    updateDate1,
    date2,
    updateDate2,
    people,
    updatePeople,
    rooms,
    updateRooms,
    flightClass,
    updateFlightClass,
  } = useSearchBarStore((state) => state);

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

  useEffect(() => {
    if (direction.id === "oneWay") {
    }

    if (direction.id === "roundTrip" || mode === "hotel") {
    }
  }, [direction, mode]);

  function buildFlightSearch(
    origin: string,
    destination: string,
    direction: SearchOption,
    people: number,
    flightClass: SearchOption,
    date1: string,
    date2?: string
  ) {
    const flightSearch = {
      origin,
      destination,
      direction,
      people,
      flightClass,
      date1,
      date2,
    };
    tempFlightSearchAlert(mode, flightSearch);
  }

  function buildHotelSearch(
    destination: string,
    people: number,
    date1: string,
    date2: string,
    rooms: number
  ) {
    const hotelSearch = {
      destination,
      people,
      date1,
      date2,
      rooms,
    };
    tempHotelSearchAlert(mode, hotelSearch);
  }

  if (mode === "flight") {
    return (
      <>
        <div className={styles.searchbar}>
          <TextField
            placeholder="NYC, New York"
            id="origin"
            label="Origin"
            value={origin}
            handleChange={updateOrigin}
          />
          <TextField
            placeholder="Los Angeles, California"
            id="destination"
            label="Destination"
            value={destination}
            handleChange={updateDestination}
          />
          <DropDown
            id="trip-direction"
            direction={direction}
            setDirection={updateDirection}
          />
          <TextField
            placeholder="1/1/2023"
            id="date1"
            label="Departure Date"
            value={date1}
            handleChange={updateDate1}
          />
          <TextField
            placeholder="1/1/2023"
            id="date2"
            label="Return Date"
            value={date2}
            handleChange={updateDate2}
          />
          <TextField
            placeholder="1"
            id="passengers"
            label="Passengers"
            value={people}
            handleChange={updatePeople}
          />
          <DropDown
            id="flight-class"
            flightClass={flightClass}
            setFlightClass={updateFlightClass}
          />
        </div>
        <div className={styles.container}>
          <Button
            buttonType="colored"
            handleClick={() =>
              buildFlightSearch(
                origin,
                destination,
                direction,
                people,
                flightClass,
                date1,
                date2
              )
            }>
            <PointerSVG />
            Search
          </Button>
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
            handleChange={updateDestination}
          />
          <TextField
            placeholder="1/1/2023"
            id="date1"
            label="Check In Date"
            value={date1}
            handleChange={updateDate1}
          />
          <TextField
            placeholder="1/1/2023"
            id="date2"
            label="Check Out Date"
            value={date2}
            handleChange={updateDate2}
          />
          <TextField
            placeholder="1"
            id="guests"
            label="Number of Guests"
            value={people}
            handleChange={updatePeople}
          />
          <TextField
            placeholder="1"
            id="rooms"
            label="Number of Rooms"
            value={rooms}
            handleChange={updateRooms}
          />
        </div>
        <div className={styles.container}>
          <Button
            buttonType="colored"
            handleClick={() =>
              buildHotelSearch(destination, people, date1, date2, rooms)
            }>
            <PointerSVG />
            Search
          </Button>
        </div>
      </>
    );
  }
};
