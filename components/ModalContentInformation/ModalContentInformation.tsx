import React from "react";

import { CarProps } from "@/types";

export default function ModalContentInformation({ car }: { car: CarProps }) {
  const { make, model } = car;

  const carDetails = Object.entries(car);

  return (
    <div className="flex-1 flex flex-col gap-2">
      <h2 className="font-semibold text-xl capitalize">
        {make} {model}
      </h2>
      <div className="mt-3 flex flex-wrap gap-2">
        {carDetails.map(([key, value]) => (
          <div
            className="flex justify-between gap-5 w-full text-right"
            key={key}
          >
            <p className="text-grey capitalize">{key.split("_").join(" ")}</p>
            <p className="capitalize text-black-100 font-semibold">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
