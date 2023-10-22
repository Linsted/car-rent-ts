import Image from "next/image";

import { ICONS_DIMENSIONS, PATHS } from "@/helpers/global/constants/constants";
import { CarItemIconsProps } from "@/types";
import { IMAGE_ALTS, TRANSMISSION_TYPE } from "./constants";

export function CarItemIcons({
  transmission,
  drive,
  city_mpg,
}: CarItemIconsProps) {
  const driveType = drive.toUpperCase();

  const transmissionType =
    transmission === "a"
      ? TRANSMISSION_TYPE.AUTOMATIC
      : TRANSMISSION_TYPE.MANUAL;

  return (
    <div className="flex group-hover:invisible w-full justify-between text-gray">
      <div className="flex flex-col justify-center items-center gap-2">
        <Image
          src={PATHS.WHEEL}
          alt={IMAGE_ALTS.WHEEL}
          width={ICONS_DIMENSIONS.WIDTH}
          height={ICONS_DIMENSIONS.HEIGHT}
        />
        <p className="text-[14px]">{transmissionType}</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <Image
          src={PATHS.TIRE}
          alt={IMAGE_ALTS.TIRE}
          width={ICONS_DIMENSIONS.WIDTH}
          height={ICONS_DIMENSIONS.HEIGHT}
        />
        <p className="text-[14px]">{driveType}</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <Image
          src={PATHS.GAS}
          alt={IMAGE_ALTS.GAS}
          width={ICONS_DIMENSIONS.WIDTH}
          height={ICONS_DIMENSIONS.HEIGHT}
        />
        <p className="text-[14px]">{city_mpg} MPG</p>
      </div>
    </div>
  );
}
