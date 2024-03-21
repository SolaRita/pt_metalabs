import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/molecules/Header/header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
