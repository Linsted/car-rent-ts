"use client";

import React, { useState } from "react";
import Image from "next/image";

import { CarProps } from "@/types/index";
import { calculateCarRent } from "@/utils";
import PricePerDay from "../PricePerDay/PricePerDay";

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
    </div>
  );
}
