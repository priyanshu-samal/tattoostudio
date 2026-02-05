import type { Metadata } from "next";
import { Rozha_One, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const rozhaOne = Rozha_One({
  weight: "400",
  subsets: ["devanagari", "latin"],
  variable: "--font-rozha",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Tattoo Studio | Custom Ink & Art",
  description: "Premier tattoo studio specializing in custom designs, blackwork, and traditional art. Book your consultation today.",
  keywords: ["tattoo", "tattoo studio", "ink", "custom tattoo", "artist"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${rozhaOne.variable} ${playfair.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
