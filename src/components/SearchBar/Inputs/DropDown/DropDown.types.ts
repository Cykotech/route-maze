export interface SearchOption {
  id: string,
  content: string,
}

export interface DropDownProps {
  id: string;
  forSearchMode?: string;
  direction?: SearchOption;
  setDirection?: (direction: SearchOption) => void;
  flightClass?: SearchOption;
  setFlightClass?: (flightClass: SearchOption) => void;
}
