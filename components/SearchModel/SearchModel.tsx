import Image from "next/image";

import { PATHS } from "@/helpers/global/constants/constants";
import { SearchModelProps } from "@/types";

import {
  MODEL_ICON_DIMENSIONS,
  MODEL_IMAGE_ALT,
  INPUT_ATTRIBUTES,
} from "./constants";

export default function SearchModel({ model, handleInput }: SearchModelProps) {
  return (
    <>
      <Image
        src={PATHS.MODEL_ICON}
        width={MODEL_ICON_DIMENSIONS.WIDTH}
        height={MODEL_ICON_DIMENSIONS.HEIGHT}
        className="absolute w-[20px] h-[20px] ml-4 bottom-22"
        alt={MODEL_IMAGE_ALT}
      />
      <input
        type={INPUT_ATTRIBUTES.TYPE}
        name={INPUT_ATTRIBUTES.NAME}
        value={model}
        onChange={handleInput}
        placeholder={INPUT_ATTRIBUTES.PLACEHOLDER}
        className="searchbar__input"
      />
    </>
  );
}
