import Image from "next/image";

import { PATHS } from "@/helpers/global/constants/constants";
import { CarItemIconsProps } from "@/types";

export function CarItemIcons({
  transmission,
  drive,
  city_mpg,
}: CarItemIconsProps) {
  const driveType = drive.toUpperCase();

  const transmissionType = transmission === "a" ? "Automatic" : "Manual";

  return (
    <div className="flex group-hover:invisible w-full justify-between text-gray">
      <div className="flex flex-col justify-center items-center gap-2">
        <Image src={PATHS.WHEEL} alt="wheel" width={20} height={20} />
        <p className="text-[14px]">{transmissionType}</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <Image src={PATHS.TIRE} alt="tire" width={20} height={20} />
        <p className="text-[14px]">{driveType}</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <Image src={PATHS.GAS} alt="gas" width={20} height={20} />
        <p className="text-[14px]">{city_mpg} MPG</p>
      </div>
    </div>
  );
}
