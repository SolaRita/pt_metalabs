import Link from "next/link";
import { interSemiBold } from "@/app/fonts";
import { Button } from "@/app/intefaces/button";

export default function Button({ name, href }: Button) {
  return (
    <Link className="inline-block px-7 py-2 rounded-full items-end" href={href}>
      <p className={`${interSemiBold.className}  text-sm text-white`}>{name}</p>
    </Link>
  );
}

export function AccentButton({ name, href }: Button) {
  return (
    <div className="inline-block rounded-full bg-accent-300">
      <Button name={name} href={href} />
    </div>
  );
}

export function WhiteBorderButton({ name, href }: Button) {
  return (
    <div className=" border inset-0 border-white inline-block rounded-full">
      <Button name={name} href={href} />
    </div>
  );
}
