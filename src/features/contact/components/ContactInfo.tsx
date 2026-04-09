/**
 * Contact Info Component
 * 
 * Displays company information and contact details
 */

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
      className="space-y-6"
    >
      {/* Company Description */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">HI LABS</h2>
          <div className="w-16 h-1 bg-white/30 mb-6"></div>
          <p className="text-base text-white/90 leading-relaxed font-light">
            Human Intelligence Labs Private Limited. Engineering talent production through enforced evaluation and supervised deployment.
          </p>
        </div>
      </div>

      {/* Contact Details */}
      <div className="space-y-4">
        
        {/* Address - Lucknow Lab */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="group"
        >
          <div className="flex items-start gap-5 p-6 bg-white rounded-2xl border-2 border-gray-100 hover:border-black hover:shadow-xl transition-all duration-300">
            <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <MapPin className="w-7 h-7 text-white" strokeWidth={2} />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Lucknow Lab</h3>
              <p className="text-gray-900 leading-relaxed font-medium">
                2nd Floor of B-4/1, Vijyant Khand,<br />
                Gomti Nagar Yojna, Lucknow
              </p>
            </div>
          </div>
        </motion.div>

        {/* Address - Head Office */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="group"
        >
          <div className="flex items-start gap-5 p-6 bg-white rounded-2xl border-2 border-gray-100 hover:border-black hover:shadow-xl transition-all duration-300">
            <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <MapPin className="w-7 h-7 text-white" strokeWidth={2} />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Head Office</h3>
              <p className="text-gray-900 leading-relaxed font-medium">
                No.8/2, Novel Office Centre,<br />
                Halasuru Road, M G Road,<br />
                Sivan Chetty Gardens, Bangalore North,<br />
                Karnataka, India - 560042
              </p>
            </div>
          </div>
        </motion.div>

        {/* Phone */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="group"
        >
          <div className="flex items-start gap-5 p-6 bg-white rounded-2xl border-2 border-gray-100 hover:border-black hover:shadow-xl transition-all duration-300">
            <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Phone className="w-7 h-7 text-white" strokeWidth={2} />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Phone</h3>
              <a 
                href={`tel:${phoneNumber}`}
                className="text-gray-900 hover:text-black font-medium transition-colors text-lg"
              >
                {phoneNumber}
              </a>
            </div>
          </div>
        </motion.div>

        {/* Email */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="group"
        >
          <div className="flex items-start gap-5 p-6 bg-white rounded-2xl border-2 border-gray-100 hover:border-black hover:shadow-xl transition-all duration-300">
            <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-7 h-7 text-white" strokeWidth={2} />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Email</h3>
              <a 
                href="mailto:contact@hilabs.in"
                className="text-gray-900 hover:text-black font-medium transition-colors text-lg"
              >
                contact@hilabs.in
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
};
