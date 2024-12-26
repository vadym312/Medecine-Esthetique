'use client';

import { useEffect, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { usePreventLayoutShift } from '@/src/hooks/usePreventLayoutShift';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { WhatsAppProvider } from './WhatsApp/Provider';

const DynamicWhatsApp = dynamic(
  () => import('./WhatsApp/Wrapper').then(mod => mod.WhatsAppWrapper),
  { 
    ssr: false,
    loading: () => null
  }
);

export const OptimizedLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  usePreventLayoutShift('.nav-container');
  usePreventLayoutShift('footer');

  const preloadCriticalAssets = useCallback(() => {
    // Preload critical fonts
    const fontUrls = ['/fonts/montserrat-regular.woff2', '/fonts/montserrat-medium.woff2'];
    fontUrls.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'font';
      link.type = 'font/woff2';
      link.href = url;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // Preconnect to critical domains
    const domains = [
      'https://patient.nextmotion.net',
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ];
    
    domains.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = url;
      if (url.includes('gstatic')) {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });
  }, []);

  useEffect(() => {
    preloadCriticalAssets();
  }, [preloadCriticalAssets]);

  return (
    <WhatsAppProvider>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
        <DynamicWhatsApp />
      </div>
    </WhatsAppProvider>
  );
};