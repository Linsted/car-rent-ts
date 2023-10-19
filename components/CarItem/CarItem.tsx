"use client";

import React, { useState } from "react";
import Image from "next/image";

import { CarProps } from "@/types/index";

export default function CarItem({ car }: { car: CarProps }) {
  const { city_mpg, make, model, year, transmission, drive } = car;

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p>
        <span>Car rent...</span>
      </p>
    </div>
  );
}
