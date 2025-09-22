import { Geist, Geist_Mono, PT_Serif } from "next/font/google";
import "./globals.css";
import { Header } from "./cmps/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nethanel Buz",
  description: "Fullstack Developer",
};

const ptSerif = PT_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${ptSerif.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
