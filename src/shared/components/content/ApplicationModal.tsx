'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  programType?: 'flagship' | 'short-courses';
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  selectedCourse: string;
  comment: string;
  address: string;
}

const shortCoursesList = [
  'Python Developer Bootcamp',
  'SQL & Data Foundations',
  'Frontend Developer (React)',
  'Mobile App Developer (React Native)',
  'Backend Developer (Node.js)',
  'Full-Stack Developer (MERN)',
  'Machine Learning with Python',
  'AI Foundations',
  'AI Product Developer with Python',
  'Data Analytics & Business Intelligence',
  'DevOps & Deployment for Developers',
  'QA & Test Automation',
];

// Short courses Google Form
// entry.1193222380 = Full Name
// entry.458399431  = Email
// entry.331991086  = Phone
// entry.137427821  = Selected Course
// entry.468477927  = Comment
// entry.1596564807 = Address
const SHORT_COURSES_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScUdHGpCmBxkCYd6mcySSYRtlwuOV7LTxqM9mwtUQx8AN7QlA/formResponse';
// entry.298530135  = Email
// entry.843169128  = Phone
// entry.1315506959 = Address
// entry.2045559370 = Comment
const FLAGSHIP_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfm2Ryzj-gafNdLzjHAzrWHS9Yo_XAy5Ls1wDPSgLv-WfhosA/formResponse';

export function ApplicationModal({ isOpen, onClose, programType = 'flagship' }: ApplicationModalProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    selectedCourse: '',
    comment: '',
    address: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  if (!isOpen) return null;

  const isShortCourses = programType === 'short-courses';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const resetForm = () => {
    setFormData({ fullName: '', email: '', phone: '', selectedCourse: '', comment: '', address: '' });
    setSubmitStatus('idle');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      if (isShortCourses) {
        // Short courses — Google Form
        const body = new URLSearchParams({
          'entry.1193222380': formData.fullName,
          'entry.458399431': formData.email,
          'entry.331991086': formData.phone,
          'entry.137427821': formData.selectedCourse,
          'entry.468477927': formData.comment,
          'entry.1596564807': formData.address,
        });

        await fetch(SHORT_COURSES_FORM_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: body.toString(),
        });

        // no-cors: cannot read response — assume success
        setShowSuccessModal(true);
        resetForm();
      } else {
        // Flagship — Google Form via no-cors
        const body = new URLSearchParams({
          'entry.36334069': formData.fullName,
          'entry.298530135': formData.email,
          'entry.843169128': formData.phone,
          'entry.1315506959': formData.address,
          'entry.2045559370': formData.comment,
        });

        await fetch(FLAGSHIP_FORM_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: body.toString(),
        });

        // no-cors: cannot read response status — assume success
        setShowSuccessModal(true);
        resetForm();
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
        <button onClick={onClose}
          className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100"
          aria-label="Close modal">
          <X className="w-6 h-6" />
        </button>

        <div className="p-8 md:p-12">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Application Form</h2>
            <p className="text-lg text-gray-600 font-light">Please provide your details to begin the application process</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold text-gray-900 mb-2">Full Name *</label>
              <input type="text" id="fullName" name="fullName" required value={formData.fullName} onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                placeholder="Enter your full name" />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">Email Address *</label>
              <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                placeholder="your.email@gmail.com" />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">Phone Number *</label>
              <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                placeholder="+91 XXXXX XXXXX" />
            </div>

            {/* Course Dropdown — short-courses only */}
            {isShortCourses && (
              <div>
                <label htmlFor="selectedCourse" className="block text-sm font-semibold text-gray-900 mb-2">Select Course *</label>
                <select id="selectedCourse" name="selectedCourse" required value={formData.selectedCourse} onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all bg-white text-gray-900">
                  <option value="" disabled>Select a course</option>
                  {shortCoursesList.map((course) => (
                    <option key={course} value={course}>{course}</option>
                  ))}
                </select>
              </div>
            )}

            {/* Comment */}
            <div>
              <label htmlFor="comment" className="block text-sm font-semibold text-gray-900 mb-2">Add a Comment</label>
              <input type="text" id="comment" name="comment" value={formData.comment} onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                placeholder="Any questions or comments? (optional)" />
            </div>

            {/* Address */}
            <div>
              <label htmlFor="address" className="block text-sm font-semibold text-gray-900 mb-2">Address *</label>
              <textarea id="address" name="address" required value={formData.address} onChange={handleChange} rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all resize-none"
                placeholder="Enter your complete address" />
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button type="submit" disabled={isSubmitting}
                className={`w-full py-4 px-8 font-semibold text-base rounded-lg transition-all ${
                  isSubmitting ? 'bg-gray-400 text-white cursor-not-allowed' : 'bg-gray-900 text-white hover:bg-gray-800 hover:shadow-lg'
                }`}>
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 text-center font-medium">✗ Submission failed. Please try again.</p>
              </div>
            )}
          </form>

          <p className="text-sm text-gray-500 mt-6 text-center font-light">
            By submitting this form, you agree to our terms and conditions
          </p>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 rounded-2xl">
          <div className="bg-white rounded-2xl shadow-2xl p-8 mx-4 max-w-sm w-full text-center">
            {/* Close */}
            <button
              onClick={() => { setShowSuccessModal(false); onClose(); }}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            {/* Green circle checkmark */}
            <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-5">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Application Submitted</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Our admissions team will review your submission and contact you within 5 business days.
            </p>
            <button
              onClick={() => { setShowSuccessModal(false); onClose(); }}
              className="px-10 py-2.5 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
