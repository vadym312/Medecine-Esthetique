'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { WhatsAppConfig } from '@/src/types/whatsapp';

const WhatsAppContext = createContext<WhatsAppConfig | null>(null);

const defaultConfig: WhatsAppConfig = {
  phoneNumber: '+33620352428',
  message: 'Bonjour, je souhaite vous contacter.',
  position: 'bottom-right',
  theme: 'light'
};

export function useWhatsApp() {
  const context = useContext(WhatsAppContext);
  if (!context) {
    throw new Error('useWhatsApp must be used within a WhatsAppProvider');
  }
  return context;
}

export function WhatsAppProvider({ children }: { children: React.ReactNode }) {
  const [config, setConfig] = useState<WhatsAppConfig>(defaultConfig);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const response = await fetch('/api/whatsapp-config');
        if (response.ok) {
          const data = await response.json();
          setConfig(data);
        }
      } catch (error) {
        console.error('Failed to fetch WhatsApp config:', error);
      }
    };

    fetchConfig();
  }, []);

  return (
    <WhatsAppContext.Provider value={config}>
      {children}
    </WhatsAppContext.Provider>
  );
}