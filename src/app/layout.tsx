import type { Metadata } from "next";
import Header from "@/components/molecules/Header/header";
import "./globals.css";
import { inter } from "@/app/fonts";

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
        className={`${inter.className} bg-background p-8 antialiased flex flex-col min-h-screen`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
