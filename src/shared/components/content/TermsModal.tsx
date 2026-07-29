'use client';

import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TermsModal({ isOpen, onClose }: TermsModalProps) {
  const originalOverflow = useRef('');

  useEffect(() => {
    if (isOpen) {
      originalOverflow.current = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = originalOverflow.current;
    }
    
    // Cleanup when component unmounts
    return () => {
      if (isOpen) {
        document.body.style.overflow = originalOverflow.current;
      }
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex-none p-6 md:p-8 border-b border-gray-100 flex justify-between items-start sticky top-0 bg-white rounded-t-2xl z-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Terms & Conditions</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100 flex-shrink-0"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content (Scrollable) */}
        <div className="px-6 pb-6 pt-4 md:px-8 md:pb-8 md:pt-6 overflow-y-auto flex-1">
          <div className="text-gray-600 text-sm leading-relaxed space-y-6">
            <p className="font-semibold text-gray-800">
              By enrolling in any program offered by HI Labs, you acknowledge that you have read, understood, and agreed to the following Terms & Conditions.
            </p>

            <section>
              <h3 className="text-lg font-bold text-gray-900 mb-3">1. Seat Booking Fee</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>A ₹5,000 seat booking fee is required to confirm admission to any HI Labs program.</li>
                <li>This amount reserves your seat and is strictly non-refundable under all circumstances, including voluntary withdrawal, non-attendance, cancellation by the student, or failure to complete the admission process.</li>
                <li>Where applicable, the seat booking fee will be adjusted against the total program fee.</li>
              </ul>
            </section>
            
            <section>
              <h3 className="text-lg font-bold text-gray-900 mb-3">2. Flagship Program Fee Refund Policy</h3>
              <p className="mb-2 italic">This policy applies only to the HI Labs Flagship Program.</p>
              <p className="mb-2">If a student secures a full-time job during the program, they will be eligible for a partial refund of the program fee as follows:</p>
              <ul className="list-disc pl-5 space-y-2 mb-3">
                <li><strong>Job secured during the 1st month:</strong> 50% of the total program fee will be refunded.</li>
                <li><strong>Job secured during the 2nd month:</strong> 30% of the total program fee will be refunded.</li>
                <li><strong>Job secured during the 3rd month:</strong> 20% of the total program fee will be refunded.</li>
                <li>No refund will be applicable if employment is secured during or after the 4th month of the program.</li>
              </ul>
              <p>Refunds are subject to verification of the employment offer and joining confirmation by HI Labs and will be processed within 30 business days after successful verification.</p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-gray-900 mb-3">3. Media, Branding & Marketing Consent</h3>
              <p className="mb-2">By enrolling in HI Labs, students grant HI Labs the irrevocable right to capture, use, reproduce, publish, and distribute their:</p>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li>Photographs</li>
                <li>Videos</li>
                <li>Testimonials</li>
                <li>Name</li>
                <li>Project showcases</li>
                <li>Event participation</li>
                <li>Classroom and workshop recordings</li>
              </ul>
              <p className="mb-2">These materials may be used for:</p>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li>Website content</li>
                <li>Social media platforms</li>
                <li>Marketing campaigns</li>
                <li>Advertisements</li>
                <li>Brochures</li>
                <li>Presentations</li>
                <li>Promotional materials</li>
                <li>Any future branding activities of HI Labs</li>
              </ul>
              <p>Students will not be entitled to any compensation, royalty, or prior approval for such usage.</p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-gray-900 mb-3">4. Attendance & Participation</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Students are expected to attend scheduled sessions regularly and actively participate in the learning process.</li>
                <li>Attendance, assignment submissions, and participation may be considered while issuing certificates or other program benefits.</li>
                <li>Repeated absenteeism without prior notice may result in suspension from the program at the discretion of HI Labs.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-bold text-gray-900 mb-3">5. Code of Conduct</h3>
              <p className="mb-2">Students are expected to maintain professional behaviour throughout the program.</p>
              <p className="mb-2">HI Labs reserves the right to suspend or terminate a student's enrollment without refund in cases including, but not limited to:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Misconduct or indiscipline</li>
                <li>Harassment or discrimination</li>
                <li>Abuse towards mentors, staff, or fellow students</li>
                <li>Academic dishonesty, plagiarism, or cheating</li>
                <li>Sharing copyrighted course materials without permission</li>
                <li>Damage to company property</li>
                <li>Any activity that disrupts the learning environment or harms the reputation of HI Labs</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-bold text-gray-900 mb-3">6. Intellectual Property</h3>
              <p className="mb-2">All course content, recordings, documentation, presentations, templates, source code, internal tools, and learning materials provided by HI Labs remain the exclusive intellectual property of HI Labs unless explicitly stated otherwise.</p>
              <p>Students may use these resources solely for personal learning and may not copy, redistribute, publish, sell, or commercially exploit them without prior written permission.</p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-gray-900 mb-3">7. Personal Information & Privacy</h3>
              <p className="mb-2">Students agree to provide accurate information during admission.</p>
              <p className="mb-2">Personal information collected by HI Labs (such as name, contact details, educational details, and identification documents) will be used only for:</p>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li>Admission and onboarding</li>
                <li>Academic administration</li>
                <li>Certification</li>
                <li>Placement support</li>
                <li>Legal and regulatory compliance</li>
              </ul>
              <p>HI Labs will take reasonable measures to protect personal information and will not sell or disclose sensitive personal data to third parties except where required by law or with the student's consent.</p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-gray-900 mb-3">8. Program Changes</h3>
              <p className="mb-2">HI Labs reserves the right to modify:</p>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li>Curriculum</li>
                <li>Schedule</li>
                <li>Session timings</li>
                <li>Faculty or mentors</li>
                <li>Technologies covered</li>
                <li>Learning methodology</li>
              </ul>
              <p>whenever necessary to improve the quality and effectiveness of the program.</p>
            </section>

            <section>
              <h3 className="text-lg font-bold text-gray-900 mb-3">9. Payment Terms</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Students are responsible for paying all applicable program fees within the prescribed timelines.</li>
                <li>Failure to make payments on time may result in suspension of access to classes, resources, assessments, certificates, or other program services until all outstanding dues are cleared.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-bold text-gray-900 mb-3">10. Acceptance</h3>
              <p>By making any payment, registering, or enrolling in a HI Labs program, the student confirms that they have read, understood, and agreed to abide by these Terms & Conditions.</p>
            </section>
          </div>
        </div>

        {/* Footer */}
        <div className="flex-none p-6 border-t border-gray-100 bg-gray-50 rounded-b-2xl sticky bottom-0 z-10 flex justify-end">
          <button 
            onClick={onClose}
            className="px-8 py-2.5 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
}
