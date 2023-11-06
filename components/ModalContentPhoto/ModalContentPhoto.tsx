import Image from "next/image";

import { IMAGE_CARD_ALT } from "@/helpers/global/constants/constants";
import { CarProps } from "@/types";
import { generateCarImageUrl } from "@/utils";

import { IMAGE_ANGLES } from "./constants";

export default function ModalContentPhoto({ car }: { car: CarProps }) {
  return (
    <div className="flex-1 flex flex-col gap-3">
      <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
        <Image
          src={generateCarImageUrl({ car })}
          alt={IMAGE_CARD_ALT}
          fill
          sizes="80"
          className="object-contain"
        />
      </div>
      <div className="flex gap-3">
        {IMAGE_ANGLES.map((angle) => (
          <div
            key={angle}
            className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg"
          >
            <Image
              src={generateCarImageUrl({ car, angle })}
              alt={IMAGE_CARD_ALT}
              fill
              sizes="80"
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
