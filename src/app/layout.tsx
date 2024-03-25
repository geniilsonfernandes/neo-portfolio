import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ola! Sou Genilson Fernandes",
  description:
    "Software Enginner Front-end | React js | React Native | NextJs | TypeScript | GraphQL | Nest | NodeJs",
  authors: [{ name: "Genilson Fernandes" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  category: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="container grid grid-cols-12 gap-4">
          <div className="col-span-12  sm:col-span-3  sm:sticky top-0  sm:h-screen sm:p-4 sm:pt-8">
            <Sidebar />
          </div>

          <div className="col-span-12  sm:col-span-9  space-y-4 sm:py-8  px-4">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
