import Image from "next/image";
import Link from "next/link";

import PoligonLogo from "../../../../public/polygon_logo.svg";

export default function Navbar() {
  return (
    <header>
      <Link href={"/"}>
        <Image src={PoligonLogo} alt={"poligon_logo"} width={209} height={21} />
      </Link>
      <nav></nav>
    </header>
  );
}
