import Link from "next/link";
import React from "react";

import { PATHS } from "@/helpers/global/constants/constants";
import { HelpLinksProps } from "@/types";

import { FOOTER_TEXT } from "./constants";

export default function HelpLinks({ privacyText, termsText }: HelpLinksProps) {
  return (
    <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
      <p>{FOOTER_TEXT}</p>
      <div className="footer__copyrights-link">
        <Link href={PATHS.HOME} className="text-gray-500">
          {privacyText}
        </Link>
        <Link href={PATHS.HOME} className="text-gray-500">
          {termsText}
        </Link>
      </div>
    </div>
  );
}
