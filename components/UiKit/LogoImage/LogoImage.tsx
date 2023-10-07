import Image from "next/image";
import React from "react";

import {
  LOGO_ALT,
  LOGO_DIMENSIONS,
  PATHS,
} from "@/helpers/global/constants/constants";
import { LogoImageProps } from "@/types";

export default function LogoImage({
  width = LOGO_DIMENSIONS.WIDTH,
  height = LOGO_DIMENSIONS.HEIGHT,
}: LogoImageProps) {
  return (
    <Image
      src={PATHS.LOGO_IMAGE}
      alt={LOGO_ALT}
      width={width}
      height={height}
      className="object-contain"
    />
  );
}
