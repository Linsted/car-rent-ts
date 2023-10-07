import Link from "next/link";
import React from "react";

import { PATHS } from "@/helpers/global/constants/constants";

import { HELP_LINKS, footerText } from "./constants";

export default function HelpLinks() {
  return (
    <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
      <p>{footerText}</p>
      <div className="footer__copyrights-link">
        <Link href={PATHS.HOME} className="text-gray-500">
          {HELP_LINKS.PRIVACY}
        </Link>
        <Link href={PATHS.HOME} className="text-gray-500">
          {HELP_LINKS.TERMS}
        </Link>
      </div>
    </div>
  );
}
