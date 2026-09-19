import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import { NavBar } from "@/components/NavBar";
import { site } from "@/data/site";
import "./globals.css";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: {
    default: site.title,
    template: `%s — ${site.name}`,
  },
  description: site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoMono.variable} font-sans`}>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
