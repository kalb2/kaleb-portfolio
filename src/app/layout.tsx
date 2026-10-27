import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import { NavBar } from "@/components/NavBar";
import { site } from "@/data/site";
import { baseOpenGraph } from "@/lib/metadata";
import "./globals.css";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    ...baseOpenGraph,
    title: site.title,
    description: site.description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
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
