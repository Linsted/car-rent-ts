"use client";

import React, { useState } from "react";
import Image from "next/image";

import { CarProps } from "@/types/index";
import {
  ICONS_DIMENSIONS,
  IMAGE_CARD_ALT,
  PATHS,
} from "@/helpers/global/constants/constants";
import { generateCarImageUrl } from "@/utils";

import { CarItemIcons } from "../CarItemIcons/CarItemIcons";
import { BUTTON_TITLE, IMAGE_ALT_TEXT } from "./constants";
import PricePerDay from "../PricePerDay/PricePerDay";
import { useCarItem } from "./useCarItem";

import Button from "../Button/Button";
import CarDetails from "../CarDetails/CarDetails";

export default function CarItem({ car }: { car: CarProps }) {
  const {
    handleClick,
    carRent,
    isOpen,
    city_mpg,
    make,
    model,
    transmission,
    drive,
    closeModal,
  } = useCarItem(car);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <PricePerDay carRent={carRent} />
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          className="object-contain"
          src={generateCarImageUrl({ car })}
          alt={IMAGE_CARD_ALT}
          fill
          priority
        />
      </div>
      <div className="relative flex w-full mt-2">
        <CarItemIcons
          transmission={transmission}
          drive={drive}
          city_mpg={city_mpg}
        />
        <div className="car-card__btn-container">
          <Button
            title={BUTTON_TITLE}
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            buttonIcon={PATHS.ARROW}
            iconWidth={ICONS_DIMENSIONS.WIDTH}
            iconHeight={ICONS_DIMENSIONS.HEIGHT}
            iconAlt={IMAGE_ALT_TEXT}
            handleClick={handleClick}
          />
        </div>
      </div>
      <CarDetails isOpen={isOpen} closeModal={closeModal} car={car} />
    </div>
  );
}
