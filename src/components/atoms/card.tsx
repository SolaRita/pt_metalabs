import { raleway } from "@/app/fonts";
import Image from "next/image";

export default function Card({ ...album }) {
  const { artist, user, src } = album;
  return (
    <div className="bg-background-300 bg-opacity-25 rounded-2xl w-full">
      <Image
        src={src}
        alt={artist}
        width={242}
        height={193}
        priority={false}
        className="pb-4"
      />
      <div className="mx-5 mb-9">
        <h4 className={`${raleway.className} text-xl text-white mb-1`}>
          {artist}
        </h4>
        <div className="flex gap-1">
          <Image
            src={user.src}
            alt={user.name}
            width={16}
            height={16}
            style={{ objectFit: "contain" }}
          />
          <p className="text-white text-xs text-opacity-65">{user.name}</p>
        </div>
      </div>
    </div>
  );
}
