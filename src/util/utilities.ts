import { flightSearch, hotelSearch } from "./utilities.types";

export function tempFlightSearchAlert(
  mode: string,
  searchParams: flightSearch
): void {
  console.log("Searching...");
  if (mode === "flight") {
    alert(
      `Your ${searchParams.direction.content} ${
        searchParams.flightClass.content
      } flight from ${searchParams.origin} to ${
        searchParams.destination
      } leaving ${searchParams.date1} ${
        searchParams.date2 ? `and returning on ${searchParams.date2}` : ""
      } has been booked for ${searchParams.people} people.`
    );
  }
}

export function tempHotelSearchAlert(
  mode: string,
  searchParams: hotelSearch
): void {
  if (mode === "hotel") {
    alert(
      `${searchParams.rooms} ${
        searchParams.rooms > 1 ? "rooms have" : "room has"
      } been booked in ${searchParams.destination} checking in on ${
        searchParams.date1
      } and checking out on ${searchParams.date2} for ${
        searchParams.people
      } people.`
    );
  }
}
