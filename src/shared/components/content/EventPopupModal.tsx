'use client';

import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { REGISTRATION_EVENT_URL } from '@/app/constant';

interface EventPopupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onViewMoreEvents?: () => void;
  disableActions?: boolean;
}

export function EventPopupModal({ isOpen, onClose, onViewMoreEvents, disableActions }: EventPopupModalProps) {
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

  const registrationUrl = REGISTRATION_EVENT_URL;

  const handleRegisterClick = () => {
    window.open(registrationUrl, '_blank', 'noopener,noreferrer');
  };

  const handleViewMoreClick = () => {
    onClose();
    if (onViewMoreEvents) {
      onViewMoreEvents();
    } else {
      const programsEl = document.getElementById('programs');
      if (programsEl) {
        programsEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center p-3 sm:p-4 bg-black/40 backdrop-blur-xs animate-fade-in">
      {/* Container: Normal screens remain max-w-[480px], small mobile screens shrink to max-w-[360px] */}
      <div className="relative w-full max-w-[380px] sm:max-w-[560px] bg-white rounded-[24px] sm:rounded-[28px] shadow-2xl overflow-hidden max-h-[95vh] flex flex-col p-4 sm:p-6 text-gray-900 transition-all animate-modal-pop">
        
        {/* Close Button Top Right */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors rounded-full"
          aria-label="Close modal"
        >
          <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>

        {/* Modal Heading */}
        <h2 className="text-lg sm:text-xl font-extrabold text-gray-900 mb-3 pr-8 tracking-tight">
          Upcoming Event
        </h2>

        {/* 100% Fully Visible Graphic Illustration */}
        <div className="w-full mb-3 overflow-hidden rounded-xl flex justify-center min-h-0 flex-shrink">
          <img
            src="/images/ai-chatbot-event.jpg"
            alt="Build Your Own AI Chatbot using Python & Generative AI"
            className="w-full h-full max-h-[260px] sm:max-h-[320px] block object-contain"
          />
        </div>

        {/* Event Subtitle / Description */}
        <p className="text-[11px] sm:text-sm text-gray-600 leading-snug mb-4 text-left font-normal">
          Learn To Build An AI Chatbot That Can Chat With PDFs, Answer Questions,
          Generate Quizzes, Summarize Documents, And Much More Using Python,
          LangChain &amp; Google Gemini.
        </p>

        {/* Event Info List */}
        <div className="space-y-1.5 text-[11px] sm:text-sm text-gray-800 mb-5 font-normal">
          <div className="flex items-center gap-2">
            <span>📅</span>
            <span>16th August 2026</span>
          </div>
          <div className="flex items-center gap-2">
            <span>📍</span>
            <span>Lucknow</span>
          </div>
          <div className="flex items-center gap-2">
            <span>💰</span>
            <span>₹499 Only</span>
          </div>
          <div className="flex items-center gap-2">
            <span>🎓</span>
            <span>Hands-On Project • Source Code • Portfolio Ready</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-1">
          <button
            disabled
            onClick={handleViewMoreClick}
            className="flex-1 py-2.5 sm:py-3 px-3 sm:px-4 text-center font-medium text-xs sm:text-sm text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white transition-all"
          >
            View More Events
          </button>
          <button
            disabled={disableActions}
            onClick={handleRegisterClick}
            className={`flex-1 py-2.5 sm:py-3 px-3 sm:px-4 text-center font-medium text-xs sm:text-sm rounded-xl shadow-sm transition-all ${
              disableActions ? 'text-gray-400 bg-gray-100 cursor-not-allowed' : 'text-white bg-[#1d59f2] hover:bg-blue-700'
            }`}
          >
            Register
          </button>
        </div>

      </div>
    </div>
  );
}
