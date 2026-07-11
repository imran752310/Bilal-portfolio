import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Muhammad Bilal — IT Support Engineer & Web Developer",
    template: "%s | Muhammad Bilal",
  },
  description:
    "Portfolio of Muhammad Bilal — IT Support Engineer and PHP/WordPress Developer based in Riyadh, Saudi Arabia. Specializing in system administration, web development, and technical support.",
  keywords: [
    "Muhammad Bilal",
    "IT Support Engineer",
    "WordPress Developer",
    "PHP Developer",
    "Web Developer",
    "Riyadh",
    "Saudi Arabia",
    "Portfolio",
  ],
  authors: [{ name: "Muhammad Bilal" }],
  creator: "Muhammad Bilal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://muhammadbilal.dev",
    title: "Muhammad Bilal — IT Support Engineer & Web Developer",
    description:
      "Portfolio of Muhammad Bilal — IT Support Engineer and PHP/WordPress Developer based in Riyadh, Saudi Arabia.",
    siteName: "Muhammad Bilal Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Bilal — IT Support Engineer & Web Developer",
    description:
      "Portfolio of Muhammad Bilal — IT Support Engineer and PHP/WordPress Developer based in Riyadh, Saudi Arabia.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-body`}
      >
        <div className="noise-overlay" aria-hidden="true" />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
