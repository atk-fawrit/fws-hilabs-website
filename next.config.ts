import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* HI Labs Website Configuration */
  
  // Optimize for institutional content
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 768, 1024, 1280, 1600],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Performance optimizations
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', '@radix-ui/react-accordion', '@radix-ui/react-slot'],
  },
  
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Enable compression and optimization
  compress: true,
  poweredByHeader: false,
  
  // Ensure proper TypeScript checking
  typescript: {
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
