import { PATHS } from "@/helpers/global/constants/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import HelpLinks from "../UiKit/HelpLinks/HelpLinks";

export default function Footer() {
  return (
    <footer className="flex flex-col text-black-100  mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src={PATHS.LOGO_IMAGE}
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            Carhub 2023 <br />
            All Rights Reserved &copy;
          </p>
        </div>
      </div>

      <HelpLinks />
    </footer>
  );
}
