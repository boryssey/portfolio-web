import type { Metadata } from "next";
import { Manrope } from 'next/font/google'

import "./globals.scss";
import NavBar from "@/components/NavBar";

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin', 'latin-ext'],
}
)

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <NavBar />
        {children}
        </body>
    </html>
  );
}