import { MouseEventHandler } from "react";

export interface ButtonProps {
  iconWidth?: number;
  iconHeight?: number;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  textStyles?: string;
  buttonIcon?: string;
  isDisabled?: boolean;
  iconAlt?: string;
  title?: string;
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

export interface generateCarImageUrlArgs {
  car: CarProps;
  angle?: string;
}

export interface URLSearchParameters {
  url: URL;
  make: string;
  model: string;
  year: number;
  angle?: string;
}

export interface CarItemIconsProps {
  transmission: string;
  drive: string;
  city_mpg: number;
}

export interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

export interface calculateCarRentArgs {
  city_mpg: number;
  year: number;
}

export interface SearchParams {
  model: string;
  manufacturer: string;
}

export interface SearchModelProps {
  model: string;
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface FilterParams {
  manufacturer?: string;
  year?: number;
  fuel?: string;
  limit?: number;
  model?: string;
}

interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface HandleUpdateParams {
  title: string;
  value: string;
}
