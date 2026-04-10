/**
 * WhatsApp Hook
 * 
 * Handles WhatsApp chat functionality
 */

import { useCallback } from 'react';

export const useWhatsApp = (whatsappNumber: string) => {
  const openWhatsAppChat = useCallback(() => {
    const message = encodeURIComponent("Hi HI Labs, I'm reaching out to you through your website regarding an inquiry.");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  }, [whatsappNumber]);

  return { openWhatsAppChat };
};
