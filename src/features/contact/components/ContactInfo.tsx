'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

interface ContactInfoProps {
  phoneNumber: string;
  onWhatsAppClick?: () => void;
}

// Location Cards Component
export const LocationCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* Head Office */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="group"
      >
        <div className="flex flex-col items-center text-center w-full gap-4 p-8 bg-white rounded-2xl border border-black shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300">
          <div className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center">
            <MapPin className="w-6 h-6 text-white" strokeWidth={2} />
          </div>
          <div className="flex-1 w-full">
            <h3 className="text-lg font-bold font-sans tracking-tight text-gray-900 mb-2">Head Office (Banglore)</h3>
            <p className="text-sm font-medium text-gray-600 leading-relaxed max-w-xs mx-auto">
              No.8/2, Novel Office Centre,<br />Halasuru Road, M G Road,<br />
              Banglore, India - 560042
            </p>

            {/* Inline Map */}
            <div className="mt-8 mx-auto w-80 h-72 bg-white rounded-xl border border-gray-200 overflow-hidden shadow-2xl flex flex-col">
              <div className="flex-1 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9876543210987!2d77.6088!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzYnMzEuNyJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map of Head Office (Bangalore)"
                />
              </div>
              <div className="p-3 bg-gray-50 border-t border-gray-200 flex justify-center items-center">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('No.8/2, Novel Office Centre, Halasuru Road, M G Road, Sivan Chetty Gardens, Bangalore North, Karnataka, India - 560042')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-bold transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Open in Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Lucknow Branch */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="group"
      >
        <div className="flex flex-col items-center text-center w-full gap-4 p-8 bg-white rounded-2xl border border-black shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300">
          <div className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center">
            <MapPin className="w-6 h-6 text-white" strokeWidth={2} />
          </div>
          <div className="flex-1 w-full">
            <h3 className="text-lg font-bold font-sans tracking-tight text-gray-900 mb-2">Lucknow Branch</h3>
            <p className="text-sm font-medium text-gray-600 leading-relaxed max-w-xs mx-auto">
              2nd Floor of B-4/1, Vijyant Khand,<br />Gomti Nagar Yojna, Lucknow,<br />Uttar Pradesh -226010
            </p>

            {/* Inline Map */}
            <div className="mt-8 mx-auto w-80 h-72 bg-white rounded-xl border border-gray-200 overflow-hidden shadow-2xl flex flex-col">
              <div className="flex-1 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.7234567890123!2d80.9462!3d26.8467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUwJzQ4LjEiTiA4MMKwNTYnNDYuMyJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map of Lucknow Branch"
                />
              </div>
              <div className="p-3 bg-gray-50 border-t border-gray-200 flex justify-center items-center">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('2nd Floor of B-4/1, Vijyant Khand, Gomti Nagar Yojna, Lucknow')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-bold transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Open in Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Contact Cards Component
export const ContactCards: React.FC<ContactInfoProps> = ({ phoneNumber, onWhatsAppClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="w-full pt-4"
    >
      <div className="max-w-md mx-auto bg-white rounded-2xl border border-black p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 group">
        <div className="flex flex-col items-center space-y-6">

          <div className="flex flex-col space-y-6">
            {/* Phone */}
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" strokeWidth={2} />
              </div>
              <a href={`tel:${phoneNumber}`} className="text-base font-medium text-gray-900 hover:text-gray-600 transition-colors">
                {phoneNumber}
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" strokeWidth={2} />
              </div>
              <a href="mailto:contact@thehilabs.com" className="text-base font-medium text-gray-900 hover:text-gray-600 transition-colors">
                contact@thehilabs.com
              </a>
            </div>
          </div>

          {/* WhatsApp CTA */}
          {onWhatsAppClick && (
            <div className="flex flex-col items-center pt-2">
              <motion.button
                onClick={onWhatsAppClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-green-600 text-white font-medium text-sm rounded-md hover:bg-green-700 transition-all duration-300 shadow-sm"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span>Start Chat</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Keep the original export for backward compatibility
export const ContactInfo: React.FC<ContactInfoProps> = ({ phoneNumber, onWhatsAppClick }) => {
  return (
    <div className="space-y-4">
      <LocationCards />
      <ContactCards phoneNumber={phoneNumber} onWhatsAppClick={onWhatsAppClick} />
    </div>
  );
};