import Image, { StaticImageData } from "next/image";

import WomanLiseningMusic from "../../../../public/images/woman_lisening_music.png";
import CtaButton from "@/components/atoms/button";
import { raleway } from "../../../app/fonts";

interface Button {
  name: string;
}

interface JumbotronData {
  title: string;
  image: StaticImageData;
  alt: string;
  buttons: Button[];
}

const JumboData: JumbotronData = {
  title: "Membresía Premium",
  image: WomanLiseningMusic,
  alt: "woman lisening music",
  buttons: [
    {
      name: "Subscribirse",
    },
    {
      name: "Descubrir planes",
    },
  ],
};

export default function Jumbotron() {
  const { title, image, alt, buttons } = JumboData;
  return (
    <section className="flex justify-between bg-gradient-to-r from-cyan to-accent rounded-lg h-2/6">
      <div className="relative z-10 w-1/4 m-8">
        <h1
          className={`${raleway.className} text-6xl font-bold tracking-tighter inline-block text-transparent bg-clip-text bg-gradient-to-r from-withe to-pink leading-tight mb-4`}
        >
          {title}
        </h1>
        <ul className="flex gap-4">
          {buttons.map((button, index) => (
            <li key={index}>
              <CtaButton key={index} {...button} />
            </li>
          ))}
        </ul>
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
