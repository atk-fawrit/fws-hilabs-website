import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Navigation from "@/src/shared/components/layout/Navigation";
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
  title: "HI Labs - Engineering Talent Production Lab",
  description: "HI Labs is an in-person Engineering lab. We produce deployable junior engineers through enforced evaluation and supervised deployment.",
  keywords: ["engineering", "talent", "training", "deployment", "evaluation", "lucknow"],
  authors: [{ name: "HI Labs" }],
  creator: "HI Labs",
  publisher: "Human Intelligence Laboratories Private Limited",
  robots: "index, follow",
  openGraph: {
    title: "HI Labs - Engineering Talent Production Lab",
    description: "HI Labs is an in-person Engineering lab. We produce deployable junior engineers through enforced evaluation and supervised deployment.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "HI Labs - Engineering Talent Production Lab",
    description: "HI Labs is an in-person Engineering lab. We produce deployable junior engineers through enforced evaluation and supervised deployment.",
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
        {/* Preload critical images for better performance */}
        <link
          rel="preload"
          as="image"
          href="/images/Image-R.png"
          type="image/png"
        />
        <link
          rel="preload"
          as="image"
          href="/images/Image-Right.png"
          type="image/png"
        />
        <link
          rel="preload"
          as="image"
          href="/images/Bg-Transform.jpg"
          type="image/jpeg"
        />
      </head>
      <body className="antialiased bg-black text-white font-sans" suppressHydrationWarning={true}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
