'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full pt-30 pb-46 overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/contact.jpg"
        alt="Contact HI Labs"
        fill
        className="object-cover object-[center_80%]"
        priority
      />
      {/* Light white overlay — keeps image visible, ensures dark text readable */}
      <div className="absolute inset-0 bg-white/55"></div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-4"
        >
          <span className="px-4 py-2 bg-black/8 border border-black/15 rounded-full text-xs font-bold text-gray-800 tracking-widest uppercase">
            Get in Touch
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-6xl font-black text-gray-900 tracking-tight mb-4 leading-tight"
        >
          Contact Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-900 font-medium max-w-2xl mx-auto"
        >
          We&apos;re here to answer your questions about our programs and admissions
        </motion.p>
      </div>
    </section>
  );
};
