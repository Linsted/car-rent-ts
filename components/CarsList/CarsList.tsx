import { CarProps } from "@/types";

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
