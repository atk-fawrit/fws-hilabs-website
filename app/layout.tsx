import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter, JetBrains_Mono } from "next/font/google";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import Navigation from "@/src/shared/components/layout/Navigation";
import "./globals.css";
import { googleAnalytics, googleTag } from "./constant";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400","500","600"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thehilabs.com"),
  verification: {
    google: "cCVQkIHuQi6gDTR8qG5CRxctjKFnuT3LByMdlYLYvmY",
  },
  title: {
    default: "HI Labs - Best IT Training Institute in Lucknow | 100% Placement",
    template: "%s | HI Labs",
  },
  description:
    "HI Labs (Human Intelligence Labs) is a premier IT training institute in Lucknow offering software development courses, data science, AI, full stack developer training with 100% placement assistance. Join coding classes for beginners & working professionals.",
  keywords: [
    "Human Intelligence Labs Lucknow",
    "Hi Labs",
    "Best Software development training institute in lucknow",
    "best coding classes in Lucknow",
    "AI Software Development Company",
  ],
  other: {
    keywords:
      "Human Intelligence Labs Lucknow, Hi Labs, Best Software development training institute in lucknow, best coding classes in Lucknow, AI Software Development Company",
  },
  authors: [{ name: "HI Labs" }],
  creator: "HI Labs",
  publisher: "Human Intelligence Labs Private Limited",
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/images/favicon-1.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon-1.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/images/favicon.png",
    apple: [{ url: "/images/favicon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "HI Labs - Best IT Training Institute in Lucknow | 100% Placement",
    description:
      "HI Labs (Human Intelligence Labs) is a premier IT training institute in Lucknow offering software development, data science, AI & full stack developer courses with 100% placement assistance.",
    type: "website",
    locale: "en_US",
    url: "https://www.thehilabs.com",
    siteName: "HI Labs - Human Intelligence Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "HI Labs - Best IT Training Institute in Lucknow | 100% Placement",
    description:
      "HI Labs (Human Intelligence Labs) is a premier IT training institute in Lucknow offering software development, data science, AI & full stack developer courses with 100% placement assistance.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <GoogleTagManager gtmId={googleTag}/>
      <head>
        <link rel="preload" as="video" href="/images/Mbgvideo.mp4" type="video/mp4" />
        <link rel="preload" as="video" href="/images/bg-video.mp4" type="video/mp4" />
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="zlPNENSxgp88c0wwTFRAWA"
          strategy="afterInteractive"
        />
      </head>
      <body className="antialiased bg-black text-white font-sans overflow-x-hidden" suppressHydrationWarning={true}>
        <Navigation />
        {children}
      </body>
      <GoogleAnalytics gaId={googleAnalytics} />
    </html>
  );
}
