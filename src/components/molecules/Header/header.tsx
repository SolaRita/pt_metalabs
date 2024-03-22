"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Searcher from "@/components/atoms/searcher";
import CtaButton, { AccentButton } from "@/components/atoms/button";

import PoligonLogo from "../../../../public/polygon_logo.svg";
import Avatar from "../../../../public/images/avatar.png";
import House from "../../../../public/images/house.svg";

interface NavLink {
  name: string;
  href: string;
  icon: string;
}

const navbarLinks = [
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

const cta = [
  {
    name: "Subir Obra",
  },
];
export default function Navbar() {
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
                    className={`flex gap-2 px-4 py-2 rounded-full text-sm text-white ${
                      pathname === link.href ? "bg-accent bg-opacity-50" : ""
                    }`}
                    href={link.href}
                  >
                    {link.icon && (
                      <Image
                        src={`/icons/${link.icon}.svg`}
                        alt={link.name}
                        width={45}
                        height={45}
                        className="md:w-5"
                        priority={false}
                      />
                    )}
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        {cta.map((button, index) => (
          <AccentButton href={"/"} key={index} {...button} />
        ))}
        <Link href={"/"}>
          <Image src={Avatar} alt={"avatar"} width={38} height={38} />
        </Link>
      </div>
    </header>
  );
}
