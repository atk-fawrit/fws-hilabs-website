'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

interface ContactInfoProps {
  phoneNumber: string;
}

// Location Cards Component
export const LocationCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* Lucknow Branch */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, delay: 0.2 }} 
        className="group"
      >
        <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-300">
          <div className="flex-shrink-0 w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
            <MapPin className="w-5 h-5 text-white" strokeWidth={2} />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-gray-900 mb-1">Lucknow Branch</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              2nd Floor of B-4/1, Vijyant Khand,<br />Gomti Nagar Yojna, Lucknow
            </p>
          </div>
        </div>
      </motion.div>

      {/* Head Office */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, delay: 0.3 }} 
        className="group"
      >
        <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-300">
          <div className="flex-shrink-0 w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
            <MapPin className="w-5 h-5 text-white" strokeWidth={2} />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-gray-900 mb-1">Head Office</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              No.8/2, Novel Office Centre,<br />Halasuru Road, M G Road,<br />
              Sivan Chetty Gardens, Bangalore North,<br />Karnataka, India - 560042
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Contact Cards Component
export const ContactCards: React.FC<ContactInfoProps> = ({ phoneNumber }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* Phone */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, delay: 0.4 }} 
        className="group"
      >
        <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-300">
          <div className="flex-shrink-0 w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
            <Phone className="w-5 h-5 text-white" strokeWidth={2} />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-gray-900 mb-1">Phone</h3>
            <a href={`tel:${phoneNumber}`} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              {phoneNumber}
            </a>
          </div>
        </div>
      </motion.div>

      {/* Email */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, delay: 0.5 }} 
        className="group"
      >
        <div className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all duration-300">
          <div className="flex-shrink-0 w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
            <Mail className="w-5 h-5 text-white" strokeWidth={2} />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-gray-900 mb-1">Email</h3>
            <a href="mailto:contact@thehilabs.com" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              contact@thehilabs.com
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Keep the original export for backward compatibility
export const ContactInfo: React.FC<ContactInfoProps> = ({ phoneNumber }) => {
  return (
    <div className="space-y-4">
      <LocationCards />
      <ContactCards phoneNumber={phoneNumber} />
    </div>
  );
};