'use client';

import { motion } from 'framer-motion';

export const HiLabsCard: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48 pointer-events-none"></div>
      <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-white mb-3 tracking-tight">HiLabs</h2>
          <div className="w-16 h-1 bg-white/30 mb-4"></div>
          <p className="text-base text-white/80 leading-relaxed font-medium whitespace-nowrap max-w-2xl">
            Human Intelligence Labs Private Limited. Engineering talent production through enforced evaluation and supervised deployment.
          </p>
        </div>
      </div>
    </motion.div>
  );
};
