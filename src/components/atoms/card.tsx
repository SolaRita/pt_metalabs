import { raleway } from "@/app/fonts";
import Image from "next/image";

export default function Card({ ...album }) {
  const { artist, user, src } = album;
  return (
    <div className="bg-background-300 bg-opacity-25 rounded-md w-full">
      <Image src={src} alt={artist} width={242} height={193} priority={false} />
      <h4 className={`${raleway.className} text-xl text-white font-bold mb-1`}>
        {artist}
      </h4>
      <div className="flex mx-5 gap-1">
        <Image src={user.src} alt={user.name} width={16} height={16} />
        <p className="text-white text-sm">{user.name}</p>
      </div>
    </div>
  );
}
