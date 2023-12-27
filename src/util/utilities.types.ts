import { SearchOption } from "@/components/SearchBar/Inputs/DropDown/DropDown.types";

interface SearchObject {
  destination: string;
  people: number;
  date1: string;
  date2?: string
}

export interface flightSearch extends SearchObject {
  origin: string;
  direction: SearchOption;
  flightClass: SearchOption;
}

export interface hotelSearch extends SearchObject {
  rooms: number;
}