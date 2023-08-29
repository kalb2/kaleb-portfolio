import NavBar from "./components/NavBar/NavBar";
import "./globals.css";
import { Roboto_Mono } from "next/font/google";

const roboto = Roboto_Mono({ subsets: ["latin"] });

export const metadata = {
  title: "Kaleb Jensen Portfolio",
  description: "Thrown together by a human",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
