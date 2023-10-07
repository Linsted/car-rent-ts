import React from "react";

import { currentYear } from "@/helpers/global/constants/constants";

import HelpLinks from "../UiKit/HelpLinks/HelpLinks";
import { HELP_LINKS_TEXT, WEBSITE_NAME } from "../UiKit/HelpLinks/constants";
import LogoImage from "../UiKit/LogoImage/LogoImage";
import { FOOTER_LOGO_DIMENSIONS } from "./constants";

export default function Footer() {
  return (
    <footer className="flex flex-col text-black-100  mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <LogoImage
            width={FOOTER_LOGO_DIMENSIONS.WIDTH}
            height={FOOTER_LOGO_DIMENSIONS.HEIGHT}
          />
          <p className="text-base text-gray-700">
            {WEBSITE_NAME} {currentYear} <br />
            All Rights Reserved &copy;
          </p>
        </div>
      </div>

      <HelpLinks
        privacyText={HELP_LINKS_TEXT.PRIVACY}
        termsText={HELP_LINKS_TEXT.TERMS}
      />
    </footer>
  );
}
