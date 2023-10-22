import React, { useState } from "react";

import { calculateCarRent } from "@/utils";
import { CarProps } from "@/types/index";

export function useCarItem(car: CarProps) {
  const { city_mpg, make, model, year, transmission, drive } = car;

  const [isOpen, setIsOpen] = useState(false);

  const carRent = calculateCarRent({ city_mpg, year });

  const handleClick = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  return {
    handleClick,
    carRent,
    isOpen,
    city_mpg,
    make,
    model,
    year,
    transmission,
    drive,
    closeModal,
  };
}
