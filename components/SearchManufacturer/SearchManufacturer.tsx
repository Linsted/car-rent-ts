import React, { useState } from "react";
import { Combobox } from "@headlessui/react";
import Image from "next/image";

import { SearchManufacturerProps } from "@/types";
import { PATHS } from "@/helpers/global/constants/constants";
import { CAR_LOGO, CAR_LOGO_DIMENSIONS, INPUT_PLACEHOLDER } from "./constants";
import FilteredManufacturesList from "../FilteredManufacturesList/FilteredManufacturesList";
import useSearchManufacturer from "./useSearchManufacturer";

export default function SearchManufacturer({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) {
  const { filteredManufactures, handleChange, query, setQuery } =
    useSearchManufacturer();

  return (
    <div className="search-manufacturer">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top[14px]">
            <Image
              src={PATHS.CAR_LOGO}
              alt={CAR_LOGO}
              width={CAR_LOGO_DIMENSIONS.WIDTH}
              height={CAR_LOGO_DIMENSIONS.HEIGHT}
              className="ml-4 mt-3.5"
            />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer__input"
            placeholder={INPUT_PLACEHOLDER}
            displayValue={(manufacturer: string) => manufacturer}
            onChange={handleChange}
          />
          <FilteredManufacturesList
            filteredManufactures={filteredManufactures}
            query={query}
            setQuery={setQuery}
          />
        </div>
      </Combobox>
    </div>
  );
}
