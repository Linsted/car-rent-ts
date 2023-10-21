import { MouseEventHandler } from "react";

export interface ButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
}

export interface LogoImageProps {
  width?: number;
  height?: number;
}

export interface HelpLinksProps {
  privacyText: string;
  termsText: string;
}

interface Link {
  title: string;
  url: string;
}

export interface FooterSection {
  title: string;
  links: Link[];
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface FilteredManufacturesListProps {
  filteredManufactures: string[];
  query: string;
  setQuery: (query: string) => void;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface CarItemIconsProps {
  transmission: string;
  drive: string;
  city_mpg: number;
}
