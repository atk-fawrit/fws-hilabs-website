import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import "./globals.css";

// HI Labs institutional typography - IBM Plex Sans and Mono
const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: 'swap',
  preload: true,
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono", 
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
  themeColor: "#F4F4F2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ibmPlexSans.variable} ${ibmPlexMono.variable}`}>
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/fonts/IBMPlexSans-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/IBMPlexSans-Medium.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/IBMPlexMono-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </head>
      <body className="antialiased bg-background text-primary font-sans">
        <div className="min-h-screen flex flex-col">
          {/* Primary Navigation - appears on all pages */}
          <header role="banner">
            <Navigation currentPath="" />
          </header>
          
          {/* Main Content Area with responsive 12-column grid system */}
          <main 
            id="main-content" 
            className="flex-1 w-full" 
            role="main"
            tabIndex={-1}
          >
            <div className="container-institutional">
              <div className="grid-12 py-4 md:py-8 lg:py-12">
                <div className="col-span-12">
                  {children}
                </div>
              </div>
            </div>
          </main>
          
          {/* Footer - appears on all pages */}
          <footer role="contentinfo">
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
