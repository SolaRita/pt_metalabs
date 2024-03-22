import Link from "next/link";

interface buttonData {
  name: string;
  href: string;
}

export default function Button({ name, href }: buttonData) {
  return (
    <Link
      className="inline-block px-6 py-2 rounded-full text-sm text-white"
      href={href}
    >
      {name}
    </Link>
  );
}

export function AccentButton({ name, href }: buttonData) {
  return (
    <div className="inline-block rounded-full bg-accent-300">
      <Button name={name} href={href} />
    </div>
  );
}

export function WhiteBorderButton({ name, href }: buttonData) {
  return (
    <div className=" border inset-0 border-white inline-block rounded-full">
      <Button name={name} href={href} />
    </div>
  );
}
