import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.scss";
import NavBar from "@/components/NavBar";
import styles from "./layout.module.scss";
import Link from "next/link";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import GithubIcon from "@/components/icons/GithubIcon";
import MediumIcon from "@/components/icons/MediumIcon";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Borys Melnyk - Software Engineer",
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
        <footer className={styles.footer}>
          <Link aria-label="linkedin" href="https://linkedin.com/borys-melnyk">
            <LinkedinIcon />
          </Link>
          <Link aria-label="github" href="https://github.com/boryssey">
            <GithubIcon />
          </Link>
          <Link aria-label="medium" href="https://boryssey.medium.com/">
            <MediumIcon />
          </Link>
        </footer>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
