import React from "react";
import Image from "next/image";
import { PATHS } from "@/helpers/global/constants/constants";
import { HERO_IMAGE_ALT } from "../Hero/constants";

export default function ModalContentPhoto() {
  return (
    <div className="flex-1 flex flex-col gap-3">
      <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
        <Image
          src={PATHS.HERO_IMAGE}
          alt={HERO_IMAGE_ALT}
          fill
          className="object-contain"
        />
      </div>
      <div className="flex gap-3">
        <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
          <Image
            src={PATHS.HERO_IMAGE}
            alt={HERO_IMAGE_ALT}
            fill
            className="object-contain"
          />
        </div>
        <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
          <Image
            src={PATHS.HERO_IMAGE}
            alt={HERO_IMAGE_ALT}
            fill
            className="object-contain"
          />
        </div>
        <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
          <Image
            src={PATHS.HERO_IMAGE}
            alt={HERO_IMAGE_ALT}
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
