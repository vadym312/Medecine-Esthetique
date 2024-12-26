'use client';

import React from 'react';
import { ErrorBoundary } from '@/src/components/shared/ErrorBoundary';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { StickyBanner } from './StickBanner/StickyBanner';
import { Toaster } from 'react-hot-toast';

interface RootLayoutProps {
  children: React.ReactNode;
}

export const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <ErrorBoundary>
      <Navigation />
      <main>{children}</main>
      <Footer />
      <StickyBanner
        buttonText="Prendre RDV"
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