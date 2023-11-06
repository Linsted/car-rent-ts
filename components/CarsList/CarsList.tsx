"use client";

import { CarsListProps } from "@/types";
import { ITEMS_PER_PAGE } from "@/helpers/global/constants/constants";

import CarItem from "../CarItem/CarItem";
import ShowMore from "../ShowMore/ShowMore";

export default function CarsList({ allCars, searchParams }: CarsListProps) {
  const pageNumber = (searchParams.limit || ITEMS_PER_PAGE) / ITEMS_PER_PAGE;

  const isNext = (searchParams.limit || ITEMS_PER_PAGE) > allCars.length;

  return (
    <section>
      <div className="home__cars-wrapper">
        {allCars.map((car, index) => (
          <CarItem car={car} key={index} />
        ))}
      </div>
      <ShowMore pageNumber={pageNumber} isNext={isNext} />
    </section>
  );
}
