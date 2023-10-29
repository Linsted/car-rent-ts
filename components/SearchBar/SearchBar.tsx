"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { BUTTONS_TYPES, PATHS } from "@/helpers/global/constants/constants";
import { SearchParams } from "@/types";

import SearchManufacturer from "../SearchManufacturer/SearchManufacturer";
import Button from "../Button/Button";

import {
  BUTTON_ICONS_DIMENSIONS,
  BUTTON_IMAGE_ALT,
  TOAST_NOTIFICATION,
} from "./constants";
import SearchModel from "../SearchModel/SearchModel";

export default function SearchBar() {
  // Logic can`t be moved to the custom hook because of NextRouter utilizing.
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  const router = useRouter();

  const updateSearchParams = ({ model, manufacturer }: SearchParams) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }

    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathName, { scroll: false });
  };

  const handleSearch = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (manufacturer === "" && model === "") {
      return toast.error(TOAST_NOTIFICATION);
    }

    updateSearchParams({
      model: model.toLowerCase(),
      manufacturer: manufacturer.toLowerCase(),
    });
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) =>
    setModel(event.target.value);

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
