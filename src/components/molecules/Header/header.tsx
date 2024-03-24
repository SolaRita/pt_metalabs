"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Searcher from "@/components/atoms/searcher";
import { AccentButton } from "@/components/atoms/button";

import { Button } from "@/app/intefaces/button";
import { NavLink } from "@/app/intefaces/navLink";

import { interSemiBold } from "@/app/fonts";
import PoligonLogo from "../../../../public/polygon_logo.svg";
import Avatar from "../../../../public/images/avatar.png";

const navbarLinks: NavLink[] = [
  {
    name: "Home",
    href: "/",
    icon: "house",
  },
  {
    name: "Descubrir",
    href: "/discover",
    icon: "",
  },
  {
    name: "Favoritos",
    href: "/favourites",
    icon: "",
  },
];

const cta: Button = {
  name: "Subir Obra",
  href: "/",
};
export default function Header() {
  const pathname = usePathname();
  return (
    <header className="bg-background flex justify-between items-center p-5">
      <Link href={"/"}>
        <Image
          src={PoligonLogo}
          alt={"poligon_logo"}
          width={145}
          height={38}
          priority={false}
        />
      </Link>
      <Searcher />
      <div className="flex gap-8 items-center">
        <nav>
          <ul className="flex gap-4">
            {navbarLinks.map((link) => {
              return (
                <li key={link.name} className="flex">
                  <Link
                    className={`flex gap-2 px-4 py-2 rounded-full items-end ${
                      pathname === link.href ? "bg-accent bg-opacity-50" : ""
                    }`}
                    href={link.href}
                  >
                    {link.icon && (
                      <Image
                        src={`/icons/${link.icon}.svg`}
                        alt={link.name}
                        width={40}
                        height={40}
                        className="md:w-5"
                        priority={false}
                      />
                    )}
                    <p
                      className={`${interSemiBold.className}  text-sm text-white place-self-end`}
                    >
                      {link.name}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <AccentButton href={cta.href} name={cta.name} />
        <Link href={"/"}>
          <Image src={Avatar} alt={"avatar"} width={38} height={38} />
        </Link>
      </div>
    </header>
  );
}
