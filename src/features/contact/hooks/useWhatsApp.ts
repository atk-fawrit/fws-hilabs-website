/**
 * WhatsApp Hook
 * 
 * Handles WhatsApp chat functionality
 */

import { useCallback } from 'react';

export const useWhatsApp = (whatsappNumber: string) => {
  const openWhatsAppChat = useCallback(() => {
    const message = encodeURIComponent("Hi HI Labs, I'd like to know more about your courses and admissions. Kindly share the details.");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  }, [whatsappNumber]);

  return { openWhatsAppChat };
};
