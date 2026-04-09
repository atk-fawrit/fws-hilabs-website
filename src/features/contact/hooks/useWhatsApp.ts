/**
 * WhatsApp Hook
 * 
 * Handles WhatsApp chat functionality
 */

import { useCallback } from 'react';

export const useWhatsApp = (whatsappNumber: string) => {
  const openWhatsAppChat = useCallback(() => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  }, [whatsappNumber]);

  return { openWhatsAppChat };
};
