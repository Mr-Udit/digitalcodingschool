import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Digital Coding School",
  description: "Learn what matters. Teach what matters.",
  image: "../components/images/logo.jpg",
  url: "../components/images/logo.jpg",
  type: "website",
  keywords: [
    "coding",
    "programming",
    "web development",
    "software development",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
