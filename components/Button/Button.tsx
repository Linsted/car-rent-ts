"use client";

import React from "react";

import { ButtonProps } from "@/types";

import { BUTTONS_TYPES } from "./constants";

export default function Button({
  title,
  containerStyles,
  handleClick,
  type = BUTTONS_TYPES.BUTTON,
}: ButtonProps) {
  return (
    <button
      disabled={false}
      type={type}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
}
