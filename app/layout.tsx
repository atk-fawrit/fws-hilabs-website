import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Navigation from "@/src/shared/components/layout/Navigation";
import JsonLd from "@/src/shared/components/JsonLd";
import "./globals.css";

// Modern typography - Inter and JetBrains Mono
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: 'swap',
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.thehilabs.com'),
  title: {
    default: "HI Labs - Best IT Training Institute in Lucknow | 100% Placement",
    template: "%s | HI Labs",
  },
  description: "HI Labs (Human Intelligence Labs) is a premier IT training institute in Lucknow offering software development courses, data science, AI, full stack developer training with 100% placement assistance. Join coding classes for beginners & working professionals.",
  keywords: [
    "Human Intelligence Labs Lucknow",
    "Hi Labs",
    "Best Software development training institute in lucknow",
    "best coding classes in Lucknow"
  ],
  authors: [{ name: "HI Labs" }],
  creator: "HI Labs",
  publisher: "Human Intelligence Labs Private Limited",
  robots: "index, follow",
  icons: {
    icon: [
      { url: '/images/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/images/favicon.png',
    apple: [
      { url: '/images/favicon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "HI Labs - Best IT Training Institute in Lucknow | 100% Placement",
    description: "HI Labs (Human Intelligence Labs) is a premier IT training institute in Lucknow offering software development, data science, AI & full stack developer courses with 100% placement assistance.",
    type: "website",
    locale: "en_US",
    url: "https://www.thehilabs.com",
    siteName: "HI Labs - Human Intelligence Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "HI Labs - Best IT Training Institute in Lucknow | 100% Placement",
    description: "HI Labs (Human Intelligence Labs) is a premier IT training institute in Lucknow offering software development, data science, AI & full stack developer courses with 100% placement assistance.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* Preload critical videos for better performance */}
        <link
          rel="preload"
          as="video"
          href="/images/Mbgvideo.mp4"
          type="video/mp4"
        />
        <link
          rel="preload"
          as="video"
          href="/images/bg-video.mp4"
          type="video/mp4"
        />
      </head>
      <body className="antialiased bg-black text-white font-sans overflow-x-hidden" suppressHydrationWarning={true}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
