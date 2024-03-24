import { StaticImageData } from "next/image";

export interface Album {
  artist: string;
  src: StaticImageData;
  user: User;
  id: number;
  like: boolean;
}

interface User {
  src: StaticImageData;
  name: string;
}
