'use client';

import { motion } from 'framer-motion';
import { 
  Smartphone,
  Layout,
  Navigation,
  Zap,
  Cloud,
  Store,
} from 'lucide-react';

const learningOutcomes = [
  { text: "Build cross-platform mobile apps for iOS and Android using React Native", icon: <Smartphone className="w-6 h-6 text-black" /> },
  { text: "Design intuitive mobile user interfaces with native components", icon: <Layout className="w-6 h-6 text-black" /> },
  { text: "Implement navigation patterns including stack, tab, and drawer navigation", icon: <Navigation className="w-6 h-6 text-black" /> },
  { text: "Integrate device features such as camera, location, and notifications", icon: <Zap className="w-6 h-6 text-black" /> },
  { text: "Connect mobile apps to backend services and REST APIs", icon: <Cloud className="w-6 h-6 text-black" /> },
  { text: "Publish applications to the Apple App Store and Google Play Store", icon: <Store className="w-6 h-6 text-black" /> },
];

export default function WhatYouWillLearn() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-8">What You Will Learn</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {learningOutcomes.map((outcome, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -4, scale: 1.02 }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-4 group-hover:bg-gray-200 transition-colors duration-300 text-black group-hover:text-black">
              {outcome.icon}
            </div>
            <p className="text-slate-700 font-medium leading-snug">{outcome.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
