import Link from "next/link";

import { FooterSection } from "@/types";

export default function FooterLink({ item }: { item: FooterSection }) {
  return (
    <li className="footer__link">
      <h3 className="font-bold">{item.title}</h3>
      <ul className="flex flex-col gap-5">
        {item.links.map((link) => (
          <li key={link.title}>
            <Link href={link.url} className="text-gray-500">
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}
