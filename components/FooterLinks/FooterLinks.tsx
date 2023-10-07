import React from "react";

import { FooterSection } from "@/types";

import FooterLink from "../FooterLink/FooterLink";

export default function FooterLinks({
  footerLinksData,
}: {
  footerLinksData: FooterSection[];
}) {
  return (
    <ul className="footer__links">
      {footerLinksData.length > 0 &&
        footerLinksData.map((item) => (
          <FooterLink key={item.title} item={item} />
        ))}
    </ul>
  );
}
