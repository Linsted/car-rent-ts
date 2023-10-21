"use client";

import React, { useState } from "react";
import Image from "next/image";

import { CarProps } from "@/types/index";
import { calculateCarRent } from "@/utils";
import PricePerDay from "../PricePerDay/PricePerDay";
import { LOGO_ALT, PATHS } from "@/helpers/global/constants/constants";
import { CarItemIcons } from "../CarItemIcons/CarItemIcons";

export default function CarItem({ car }: { car: CarProps }) {
  const { city_mpg, make, model, year, transmission, drive } = car;

  const carRent = calculateCarRent({ city_mpg, year });

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
          src={PATHS.HERO_IMAGE}
          alt={LOGO_ALT}
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
      </div>
    </div>
  );
}
