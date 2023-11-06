"use client";

import Image from "next/image";

import {
  CATALOGUE_WRAPPER_ID,
  PATHS,
} from "@/helpers/global/constants/constants";

import Button from "../Button/Button";
import { HERO_IMAGE_ALT, HERO_TITLES, BEHAVIOR_TYPE } from "./constants";

export default function Hero() {
  function handleScroll() {
    const nextSection = document.getElementById(CATALOGUE_WRAPPER_ID);

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: BEHAVIOR_TYPE });
    }
  }

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
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src={PATHS.HERO_IMAGE}
            alt={HERO_IMAGE_ALT}
            fill
            sizes="80vw"
            priority
            className="object-contain"
          />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
}
