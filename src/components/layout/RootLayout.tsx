'use client';

import React, { useEffect } from 'react';
import { ErrorBoundary } from '@/src/components/shared/ErrorBoundary';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { StickyBanner } from './StickBanner/StickyBanner';
import { Toaster } from 'react-hot-toast';
import { usePathname } from 'next/navigation';

interface RootLayoutProps {
  children: React.ReactNode;
}

export const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const pathname = usePathname();

  // Track page views for Google Tag Manager
  useEffect(() => {
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'pageview',
        page: pathname,
      });
    }
  }, [pathname]);

  return (
    <ErrorBoundary>
      <Navigation />
      <main>{children}</main>
      <Footer />
      <StickyBanner
        buttonText="Prendre RDV"
        link="https://drelard.booking.nextmotion.net/"
        threshold={0.2}
      />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 5000,
          style: {
            background: '#333',
            color: '#fff',
          },
        }}
      />
    </ErrorBoundary>
  );
};