"use client";

import { BUTTONS_TYPES, PATHS } from "@/helpers/global/constants/constants";

import SearchManufacturer from "../SearchManufacturer/SearchManufacturer";
import Button from "../Button/Button";

import { BUTTON_ICONS_DIMENSIONS, BUTTON_IMAGE_ALT } from "./constants";
import SearchModel from "../SearchModel/SearchModel";
import useSearchBar from "./useSearchBar";

export default function SearchBar() {
  const { manufacturer, model, handleInput, handleSearch, setManufacturer } =
    useSearchBar();

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__items">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
      <div className="searchbar__item">
        <SearchModel model={model} handleInput={handleInput} />
        <Button
          type={BUTTONS_TYPES.SUBMIT}
          containerStyles="-ml-3 z-10 sm:hidden "
          buttonIcon={PATHS.GLASS}
          iconAlt={BUTTON_IMAGE_ALT}
          iconWidth={BUTTON_ICONS_DIMENSIONS.WIDTH}
          iconHeight={BUTTON_ICONS_DIMENSIONS.HEIGHT}
        />
      </div>
      <Button
        type={BUTTONS_TYPES.SUBMIT}
        containerStyles="-ml-3 z-10 max-sm:hidden top-4"
        buttonIcon={PATHS.GLASS}
        iconAlt={BUTTON_IMAGE_ALT}
        iconWidth={BUTTON_ICONS_DIMENSIONS.WIDTH}
        iconHeight={BUTTON_ICONS_DIMENSIONS.HEIGHT}
      />
    </form>
  );
}
