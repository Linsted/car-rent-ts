import { MouseEventHandler } from "react";

export interface ButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
}

export interface LogoImageProps {
  width?: number;
  height?: number;
}

export interface HelpLinksProps {
  privacyText: string;
  termsText: string;
}

interface Link {
  title: string;
  url: string;
}

export interface FooterSection {
  title: string;
  links: Link[];
}
