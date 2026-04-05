import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.socialdrivemedia.com"),
  title: {
    default: "Social Drive Media — AI-Powered Marketing for Small Businesses",
    template: "%s | Social Drive Media",
  },
  description:
    "Social Drive Media builds AI-powered marketing tools, strategies, and systems for small businesses in Greencastle, PA and beyond. Free tools, affordable reports, and managed marketing.",
  keywords: [
    "AI marketing for small businesses",
    "social media management Greencastle PA",
    "AI business tools",
    "small business marketing agency",
    "SmallBizHQ",
    "StratIQ",
    "Social Drive Media",
  ],
  authors: [{ name: "Matt Baer", url: "https://www.socialdrivemedia.com" }],
  creator: "Matt Baer",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.socialdrivemedia.com",
    siteName: "Social Drive Media",
    title: "Social Drive Media — AI-Powered Marketing for Small Businesses",
    description:
      "We build the tools, strategies, and systems that help small businesses grow online — without the agency price tag.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Social Drive Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Drive Media — AI-Powered Marketing for Small Businesses",
    description:
      "We build the tools, strategies, and systems that help small businesses grow online — without the agency price tag.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
