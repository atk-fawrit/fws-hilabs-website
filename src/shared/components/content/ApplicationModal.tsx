'use client';

import { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { APPS_SCRIPT_URL } from '@/app/constant';
import { Captcha, CaptchaRef } from './Captcha';

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
  highestDegree: string;
  graduationYear: string;
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

export function ApplicationModal({ isOpen, onClose, programType = 'flagship' }: ApplicationModalProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '+91 ',
    selectedCourse: '',
    comment: '',
    address: '',
    highestDegree: '',
    graduationYear: '',
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');

  // Captcha Component Ref & State
  const captchaRef = useRef<CaptchaRef>(null);
  const [userCaptcha, setUserCaptcha] = useState('');
  const [captchaError, setCaptchaError] = useState('');

  const originalOverflow = useRef('');

  useEffect(() => {
    if (isOpen) {
      originalOverflow.current = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = originalOverflow.current;
    }
    
    return () => {
      if (isOpen) {
        document.body.style.overflow = originalOverflow.current;
      }
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const isShortCourses = programType === 'short-courses';

  const PREFIX = '+91 ';

  const validatePhone = (val: string) => /^\+91 [0-9]{10}$/.test(val);
  const validateEmail = (val: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    if (!val.startsWith(PREFIX)) val = PREFIX;
    const digits = val.slice(PREFIX.length).replace(/\D/g, '').slice(0, 10);
    const newVal = PREFIX + digits;
    setFormData(prev => ({ ...prev, phone: newVal }));
    setPhoneError('');
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, email: e.target.value }));
    setEmailError('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const resetForm = () => {
    setFormData({ fullName: '', email: '', phone: PREFIX, selectedCourse: '', comment: '', address: '', highestDegree: '', graduationYear: '' });
    setResumeFile(null);
    setPhoneError('');
    setEmailError('');
    setUserCaptcha('');
    setCaptchaError('');
    captchaRef.current?.refresh();
    if (fileInputRef.current) fileInputRef.current.value = '';
    setSubmitStatus('idle');
  };

  const toBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        resolve(result.split(',')[1]);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const phoneValid = validatePhone(formData.phone);
    const emailValid = validateEmail(formData.email);

    if (!phoneValid && !emailValid) {
      setPhoneError('Invalid phone number');
      setEmailError('Enter email in correct format');
      return;
    }
    if (!phoneValid) { setPhoneError('Invalid phone number'); return; }
    if (!emailValid) { setEmailError('Enter email in correct format'); return; }

    // Validate Captcha using component ref
    if (!captchaRef.current?.validate(userCaptcha)) {
      setCaptchaError('Invalid verification code. Please try again.');
      captchaRef.current?.refresh();
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      let base64File = '';
      let filename = '';

      if (resumeFile) {
        base64File = await toBase64(resumeFile);
        filename = resumeFile.name;
      }

      const body = new URLSearchParams();
      body.append(
        'formType',
        programType === 'short-courses'
          ? 'premium'
          : 'flagship'
      );
      body.append('name', formData.fullName);
      body.append('email', formData.email);
      body.append('phone', formData.phone.replace('+91 ', ''));
      body.append('highestDegree', formData.highestDegree);
      body.append('graduationYear', formData.graduationYear);
      body.append('course', formData.selectedCourse || '-');
      body.append('comment', formData.comment || '-');
      body.append('address', formData.address);
      body.append('file', base64File);
      body.append('filename', filename);

      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: body,
      });

      resetForm();
      onClose();
      router.push('/application-success');
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl max-h-[92vh] overflow-y-auto">
        <button onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100"
          aria-label="Close modal">
          <X className="w-5 h-5" />
        </button>

        <div className="p-5 sm:p-6 md:p-7">
          <div className="mb-4 pr-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">Application Form</h2>
            <p className="text-xs sm:text-sm text-gray-500 font-light">Please provide your details to begin the application process</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">

            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-xs font-semibold text-gray-700 mb-1">Full Name *</label>
              <input type="text" id="fullName" name="fullName" required value={formData.fullName} onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                placeholder="Enter your full name" />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-gray-700 mb-1">Email Address *</label>
              <input type="email" id="email" name="email" required value={formData.email} onChange={handleEmailChange}
                className={`w-full px-3.5 py-2.5 text-sm border rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all ${emailError ? 'border-red-400' : 'border-gray-300'}`}
                placeholder="your.email@gmail.com" />
              {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-xs font-semibold text-gray-700 mb-1">Phone Number *</label>
              <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handlePhoneChange}
                className={`w-full px-3.5 py-2.5 text-sm border rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all ${phoneError ? 'border-red-400' : 'border-gray-300'}`}
                placeholder="+91 XXXXXXXXXX" />
              {phoneError && <p className="text-red-500 text-xs mt-1">{phoneError}</p>}
            </div>

            {/* Highest Degree & Graduation Year in 2-column layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="highestDegree" className="block text-xs font-semibold text-gray-700 mb-1">Highest Degree *</label>
                <input type="text" id="highestDegree" name="highestDegree" required value={formData.highestDegree} onChange={handleChange}
                  className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                  placeholder="e.g. B.Tech, BCA" />
              </div>

              <div>
                <label htmlFor="graduationYear" className="block text-xs font-semibold text-gray-700 mb-1">Graduation Year *</label>
                <select
                  id="graduationYear"
                  name="graduationYear"
                  required
                  value={formData.graduationYear}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all bg-white text-gray-900"
                >
                  <option value="" disabled>Select Year</option>
                  {Array.from({ length: 10 }, (_, i) => 2025 + i).map((year) => (
                    <option key={year} value={String(year)}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Course Dropdown — short-courses only */}
            {isShortCourses && (
              <div>
                <label htmlFor="selectedCourse" className="block text-xs font-semibold text-gray-700 mb-1">Select Course *</label>
                <select id="selectedCourse" name="selectedCourse" required value={formData.selectedCourse} onChange={handleChange}
                  className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all bg-white text-gray-900">
                  <option value="" disabled>Select a course</option>
                  {shortCoursesList.map((course) => (
                    <option key={course} value={course}>{course}</option>
                  ))}
                </select>
              </div>
            )}

            {/* Modular Reusable Captcha Component */}
            <Captcha
              ref={captchaRef}
              value={userCaptcha}
              onChange={setUserCaptcha}
              error={captchaError}
              onErrorClear={() => setCaptchaError('')}
              isOpen={isOpen}
            />

            {/* Submit */}
            <div className="pt-1">
              <button type="submit" disabled={isSubmitting}
                className={`w-full py-3 px-6 font-semibold text-sm rounded-lg transition-all ${isSubmitting ? 'bg-gray-400 text-white cursor-not-allowed' : 'bg-gray-900 text-white hover:bg-gray-800 hover:shadow-lg'
                  }`}>
                {isSubmitting ? 'Applying...' : 'Apply Now'}
              </button>
            </div>

            {submitStatus === 'error' && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 text-center text-xs font-medium">✗ Submission failed. Please try again.</p>
              </div>
            )}
          </form>

          <p className="text-xs text-gray-500 mt-3 text-center font-light">
            By submitting this form, you agree to our terms and conditions
          </p>
        </div>
      </div>
    </div>
  );
}
