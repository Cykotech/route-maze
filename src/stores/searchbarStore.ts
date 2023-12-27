import { create } from "zustand";

import { SearchOption } from "@/components/SearchBar/Inputs/DropDown/DropDown.types";

type State = {
  origin: string;
  destination: string;
  direction: SearchOption;
  date1: string;
  date2: string;
  people: number;
  rooms: number;
  flightClass: SearchOption;
};

type Action = {
  updateOrigin: (origin: State["origin"]) => void;
  updateDestination: (destination: State["destination"]) => void;
  updateDirection: (direction: State["direction"]) => void;
  updateDate1: (date1: State["date1"]) => void;
  updateDate2: (date2: State["date2"]) => void;
  updatePeople: (people: State["people"]) => void;
  updateRooms: (rooms: State["rooms"]) => void;
  updateFlightClass: (flightClass: State["flightClass"]) => void;
};

export const useSearchBarStore = create<State & Action>((set) => ({
  origin: "",
  destination: "",
  direction: {
    id: "oneWay",
    content: "One Way",
  },
  date1: "",
  date2: "",
  people: 1,
  rooms: 1,
  flightClass: {
    id: "economy",
    content: "Economy",
  },
  updateOrigin: (origin: string) => set(() => ({ origin: origin })),
  updateDestination: (destination: string) =>
    set(() => ({ destination: destination })),
  updateDirection: (direction: State["direction"]) =>
    set(() => ({ direction: direction })),
  updateDate1: (date1: string) => set(() => ({ date1: date1 })),
  updateDate2: (date2: string) => set(() => ({ date2: date2 })),
  updatePeople: (people: number) => set(() => ({ people: people })),
  updateRooms: (rooms: number) => set(() => ({ rooms: rooms })),
  updateFlightClass: (flightClass: State["flightClass"]) =>
    set(() => ({ flightClass: flightClass })),
}));
