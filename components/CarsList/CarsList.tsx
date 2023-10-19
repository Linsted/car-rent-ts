import React from "react";

import { CarProps } from "@/types/index";

import CarItem from "../CarItem/CarItem";

export default function CarsList({ allCars }: { allCars: CarProps[] }) {
  return (
    <section>
      <div className="home__cars-wrapper">
        {allCars.map((car, index) => (
          <CarItem car={car} key={index} />
        ))}
      </div>
    </section>
  );
}
