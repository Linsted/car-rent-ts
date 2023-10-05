import { MouseEventHandler } from "react";

export interface ButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
}