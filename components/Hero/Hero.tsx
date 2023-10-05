"use client";

import React from "react";
import Image from "next/image";

import Button from "../Button/Button";

import { HERO_TITLES } from "./constants";

export default function Hero() {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">{HERO_TITLES.MAIN}</h1>
        <p className="hero__subtitle">{HERO_TITLES.SUB}</p>
        <Button
          title={HERO_TITLES.BUTTON}
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
    </div>
  );
}
