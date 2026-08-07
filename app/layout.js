import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Streamza - Live TV Streaming",
  description:
    "Stream live TV channels across entertainment, sports, kids cartoon, news, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`dark ${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-[var(--bg)] text-[var(--text)] antialiased font-sans">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
