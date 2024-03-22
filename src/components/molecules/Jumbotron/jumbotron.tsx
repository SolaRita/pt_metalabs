import Image, { StaticImageData } from "next/image";

import WomanLiseningMusic from "../../../../public/images/woman_lisening_music.png";
import { AccentButton } from "@/components/atoms/button";
import { WhiteBorderButton } from "@/components/atoms/button";
import { raleway } from "../../../app/fonts";

interface JumbotronData {
  title: string;
  image: StaticImageData;
  alt: string;
}

const JumboData: JumbotronData = {
  title: "Membresía Premium",
  image: WomanLiseningMusic,
  alt: "woman lisening music",
};

export default function Jumbotron() {
  const { title, image, alt } = JumboData;
  return (
    <section className="flex justify-between bg-gradient-to-r from-accent to-cyan  rounded-lg h-2/6">
      <div className="relative z-10 w-1/4 m-8">
        <h1
          className={`${raleway.className} text-6xl font-bold tracking-tighter inline-block text-transparent bg-clip-text bg-gradient-to-r from-withe to-pink leading-tight mb-4`}
        >
          {title}
        </h1>
        <div className="flex gap-3">
          <AccentButton name={"Subscribirse"} href={"/"} />
          <WhiteBorderButton name={"Descubrir planes"} href={"/"} />
        </div>
      </div>
      <Image
        src={image}
        alt={alt}
        width={400}
        height={400}
        style={{ objectFit: "contain" }}
      />
    </section>
  );
}
