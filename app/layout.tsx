import type { Metadata } from "next";
import { Rozha_One, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import GoogleWrapper from "@/components/providers/GoogleWrapper";
import { Analytics } from "@vercel/analytics/react";

const rozhaOne = Rozha_One({
  weight: "400",
  subsets: ["devanagari", "latin"],
  variable: "--font-rozha",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
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
        <GoogleWrapper>
          {children}
        </GoogleWrapper>
        <Analytics />
      </body>
    </html>
  );
}
