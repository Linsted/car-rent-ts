import Link from "next/link";

import { PATHS } from "@/helpers/global/constants/constants";

import Button from "../Button/Button";

import { BUTTON_TEXT } from "./constants";
import LogoImage from "../UiKit/LogoImage/LogoImage";

export default function Header() {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href={PATHS.HOME} className="flex justify-center items-center">
          <LogoImage />
        </Link>
        <Button
          title={BUTTON_TEXT}
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  );
}
