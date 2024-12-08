"use client";

import { createContext, useContext, useEffect, useState } from 'react';
import { WhatsAppConfig } from '@/src/types/whatsapp';
import { fetchWhatsAppConfig } from '@/src/lib/api/whatsapp';

const WhatsAppContext = createContext<WhatsAppConfig | null>(null);

export function useWhatsApp() {
  const context = useContext(WhatsAppContext);
  if (!context) {
    throw new Error('useWhatsApp must be used within a WhatsAppProvider');
  }
  return context;
}

export function WhatsAppProvider({ children }: { children: React.ReactNode }) {
  const [config, setConfig] = useState<WhatsAppConfig | null>(null);

  useEffect(() => {
    fetchWhatsAppConfig().then(setConfig);
  }, []);

  if (!config) return null;

  return (
    <WhatsAppContext.Provider value={config}>
      {children}
    </WhatsAppContext.Provider>
  );
}