interface buttonData {
  name: string;
}

export default function CtaButton(data: buttonData) {
  const { name } = data;
  return (
    <button className="inline-block px-6 py-2 rounded-full text-sm text-white bg-accent">
      {name}
    </button>
  );
}
