import Link from "next/link";
import ListCards from "@/components/molecules/blockCards/list-cards";
import { raleway, sansMedium } from "@/app/fonts";
import { BlockData } from "@/app/intefaces/blockData";

const blockData: BlockData = {
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
          {links.map((link, index) => {
            return (
              <li key={index}>
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
