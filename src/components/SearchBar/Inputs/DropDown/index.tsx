"use client";

import { useState } from "react";

import { DropDownProps } from "./DropDown.types";

import { DownArrowSVG } from "@/assets/svg/DownArrow";

import styles from "./DropDown.module.scss";

export const DropDown = ({
  id,
  direction = { id: "oneWay", content: "One Way" },
  setDirection,
  flightClass = { id: "economy", content: "Economy" },
  setFlightClass,
}: DropDownProps) => {
  const [display, setDisplay] = useState("none");

  const tripDirectionArray = [
    { id: "oneWay", content: "One Way" },
    { id: "roundTrip", content: "Round Trip" },
  ];
  const flightClassArray = [
    { id: "economy", content: "Economy" },
    { id: "firstClass", content: "First Class" },
    { id: "business", content: "Business" },
  ];

  function showDropDown() {
    display === "none" ? setDisplay("block") : setDisplay("none");
  }

  const tripDirectionMap = (
    <div className={styles.tripDirection}>
      <div
        className={styles.wrapper}
        onClick={showDropDown}>
        <div className={styles.content}>{direction.content}</div>
        <DownArrowSVG />
      </div>
      <div
        className={styles.options}
        style={{ display: display }}>
        <ul>
          {tripDirectionArray.map((option) => {
            return (
              <li
                key={option.id}
                onClick={() => {
                  if (setDirection) {
                    setDirection(option);
                  }
                  showDropDown();
                }}>
                {option.content}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );

  const flightClassMap = (
    <>
      <div className={styles.flightClass}>
        <div
          className={styles.wrapper}
          onClick={showDropDown}>
          <div className={styles.content}>{flightClass.content}</div>
          <DownArrowSVG />
        </div>
        <div
          className={styles.options}
          style={{ display: display }}>
          <ul>
            {flightClassArray.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => {
                    if (setFlightClass) {
                      setFlightClass(option);
                    }
                    showDropDown();
                  }}>
                  {option.content}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );

  return id === "trip-direction" ? tripDirectionMap : flightClassMap;
};
