"use client";

import React from "react";
import Image from "next/image";

import { ButtonProps } from "@/types";
import { BUTTONS_TYPES } from "@/helpers/global/constants/constants";

export default function Button({
  title,
  containerStyles = "",
  handleClick = () => {},
  type = BUTTONS_TYPES.BUTTON,
  textStyles = "",
  buttonIcon,
  isDisabled = false,
  iconWidth,
  iconHeight,
  iconAlt = "icon",
}: ButtonProps) {
  return (
    <button
      disabled={isDisabled}
      type={type}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      {title && <span className={`${textStyles} flex-1`}>{title}</span>}
      {buttonIcon && (
        <Image
          className="object-contain"
          src={buttonIcon}
          width={iconWidth}
          height={iconHeight}
          alt={iconAlt}
        />
      )}
    </button>
  );
}
