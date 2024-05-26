import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import iconLogo from "@/../public/logos/iconLogo.png"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nasa Space Apps 2024 Colombo",
  description: "SEDS Sri Lanka",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={iconLogo.src} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
