import React from "react";
import { SIGNS } from "./constants";

export default function PricePerDay({ carRent }: { carRent: string }) {
  return (
    <p className="flex mt-6 text-[32px] font-extrabold">
      <span className="self-start text-[14px] font-semibold">{SIGNS.$}</span>
      {carRent}
      <span className="self-end text-[14px] font-semibold">{SIGNS.DAY}</span>
    </p>
  );
}
