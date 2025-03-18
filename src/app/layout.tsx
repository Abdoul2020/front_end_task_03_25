// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { NuqsAdapter } from 'nuqs/adapters/next/app';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rick and Morty Finder",
  description: "Browse and filter characters from Rick and Morty",
  icons: {
    icon: "/rickmort.webp", 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NuqsAdapter><Providers>{children}</Providers></NuqsAdapter>
      </body>
    </html>
  );
}