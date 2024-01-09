import Link from "next/link";

import { TabButton, Button } from "../Buttons";
import { PlaneSVG } from "@/assets/svg/Plane";
import { HotelSVG } from "@/assets/svg/Hotel";

import styles from "./header.module.scss";

type HeaderProps = {
  activeMode: string;
}

export default function Header({ activeMode }: HeaderProps) {
  let flightMode;
  let hotelMode;

  if (activeMode === "flight") {
    flightMode = true;
    hotelMode = false;
  }

  if (activeMode === "hotel") {
    flightMode = false;
    hotelMode = true;
  }

  return (
    <div className={styles.header}>
      <div className={styles.linkContainer}>
        <Link href="/flights">
          <TabButton active={flightMode}>
            <PlaneSVG />
            Find Flights
          </TabButton>
        </Link>
        <Link href="/hotels">
          <TabButton active={hotelMode}>
            <HotelSVG />
            Find Hotels
          </TabButton>
        </Link>
      </div>
      <Link href="/">
        <h1>RouteMaze</h1>
      </Link>
      <div className={styles.accountContainer}>
        <Button>Login</Button>
        <Button buttonType="colored">Register</Button>
      </div>
    </div>
  );
}
