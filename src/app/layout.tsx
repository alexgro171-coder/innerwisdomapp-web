import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Inner Wisdom - Personal Daily Astrological Guidance",
  description:
    "Receive personalized daily guidance aligned to your natal chart and today's planetary transits. Available on iOS and Android.",
  keywords: [
    "astrology",
    "daily horoscope",
    "natal chart",
    "personalized guidance",
    "zodiac",
    "planetary transits",
  ],
  authors: [{ name: "Inner Wisdom" }],
  openGraph: {
    title: "Inner Wisdom - Personal Daily Astrological Guidance",
    description:
      "Receive personalized daily guidance aligned to your natal chart and today's planetary transits.",
    url: "https://innerwisdomapp.com",
    siteName: "Inner Wisdom",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inner Wisdom - Personal Daily Astrological Guidance",
    description:
      "Receive personalized daily guidance aligned to your natal chart and today's planetary transits.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-screen bg-background font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
