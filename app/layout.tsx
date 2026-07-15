import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inria_Serif, Kaisei_Decol, Manrope } from "next/font/google";
import { cn } from "@/lib/cn";
import "./globals.css";

const kaiseiDecol = Kaisei_Decol({
  variable: "--font-kaisei-decol",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const inriaSerif = Inria_Serif({
  variable: "--font-inria-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Kurt Lee Gayao",
  description: "Portfolio of Kurt Lee Gayao — UI/UX, web design, and development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>): ReactNode {
  return (
    <html
      lang="en"
      className={cn(
        kaiseiDecol.variable,
        inriaSerif.variable,
        manrope.variable,
        "h-full antialiased",
      )}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
