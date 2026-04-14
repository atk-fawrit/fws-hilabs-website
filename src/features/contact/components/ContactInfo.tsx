'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

interface ContactInfoProps {
  phoneNumber: string;
}

export const ContactInfo: React.FC<ContactInfoProps> = ({ phoneNumber }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-4 flex flex-col h-full"
    >
      {/* Lucknow Lab */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="group flex-1">
        <div className="flex items-start gap-5 p-6 bg-white rounded-2xl border-2 border-gray-100 hover:border-black hover:shadow-xl transition-all duration-300 h-full">
          <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
            <MapPin className="w-7 h-7 text-white" strokeWidth={2} />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Lucknow Lab</h3>
            <p className="text-gray-900 leading-relaxed font-medium">
              2nd Floor of B-4/1, Vijyant Khand,<br />Gomti Nagar Yojna, Lucknow
            </p>
          </div>
        </div>
      </motion.div>

      {/* Head Office */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }} className="group flex-1">
        <div className="flex items-start gap-5 p-6 bg-white rounded-2xl border-2 border-gray-100 hover:border-black hover:shadow-xl transition-all duration-300 h-full">
          <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
            <MapPin className="w-7 h-7 text-white" strokeWidth={2} />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Head Office</h3>
            <p className="text-gray-900 leading-relaxed font-medium">
              No.8/2, Novel Office Centre,<br />Halasuru Road, M G Road,<br />
              Sivan Chetty Gardens, Bangalore North,<br />Karnataka, India - 560042
            </p>
          </div>
        </div>
      </motion.div>

      {/* Phone */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="group flex-1">
        <div className="flex items-start gap-5 p-6 bg-white rounded-2xl border-2 border-gray-100 hover:border-black hover:shadow-xl transition-all duration-300 h-full">
          <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
            <Phone className="w-7 h-7 text-white" strokeWidth={2} />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Phone</h3>
            <a href={`tel:${phoneNumber}`} className="text-gray-900 hover:text-black font-medium transition-colors text-lg">
              {phoneNumber}
            </a>
          </div>
        </div>
      </motion.div>

      {/* Email */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }} className="group flex-1">
        <div className="flex items-start gap-5 p-6 bg-white rounded-2xl border-2 border-gray-100 hover:border-black hover:shadow-xl transition-all duration-300 h-full">
          <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
            <Mail className="w-7 h-7 text-white" strokeWidth={2} />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Email</h3>
            <a href="mailto:contact@thehilabs.com" className="text-gray-900 hover:text-black font-medium transition-colors text-lg">
              contact@thehilabs.com
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
