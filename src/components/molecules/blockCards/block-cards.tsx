import Link from "next/link";

import ListCards from "@/components/molecules/ListCards/list-cards";
import { raleway, sansMedium } from "@/app/fonts";

const blockData = {
  title: "Obras destacadas",
  links: [
    {
      name: "Music",
      href: "/",
    },
    {
      name: "Colectbles",
      href: "/",
    },
    {
      name: "Utility",
      href: "/",
    },
  ],
};

export default function BlockCards() {
  const { title, links } = blockData;
  return (
    <>
      <div className="flex gap-14 text-2xl font-bold items-end mb-8">
        <h2
          className={`${raleway.className} text-2xl text-white font-bold tracking-tight inline-block leading-tight mr-20`}
        >
          {title}
        </h2>
        <ul className="flex gap-6 ">
          {links.map((link) => {
            return (
              <li>
                <Link href={link.href}>
                  <p className={`${sansMedium.className} text-sm text-grey`}>
                    {link.name}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <ListCards />
    </>
  );
}
