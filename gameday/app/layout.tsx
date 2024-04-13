import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'
import "./globals.css";
import { Navbar } from "@/components/complete/navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GameDay",
  description: "Elevate the way you play.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}><Navbar />{children}</body>
      </html>
    </ClerkProvider>
  );
}
