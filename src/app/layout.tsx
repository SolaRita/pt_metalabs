import type { Metadata } from "next";
import "./globals.css";
import { sansRegular } from "./fonts";
import Header from "@/components/molecules/Header/header";

export const metadata: Metadata = {
  title: "Polygon",
  description: "Buscador de música",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${sansRegular.className} bg-background px-10 antialiased flex flex-col justify-center w-full max-w-[1440px]`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
