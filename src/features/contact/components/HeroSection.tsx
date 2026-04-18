'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[50vh] flex flex-col items-center justify-center pt-32 pb-32 overflow-hidden">
      {/* Background container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/contact2.jpg"
          alt="Contact HI Labs"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay to ensure the image is visible while keeping text readable */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-4"
        >
          <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-xs font-bold text-white tracking-widest uppercase backdrop-blur-sm">
            Get in Touch
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4 leading-tight"
        >
          Contact Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-white/90 font-medium max-w-2xl mx-auto"
        >
          We&apos;re here to answer your questions about our programs and admissions
        </motion.p>
      </div>
    </section>
  );
};
