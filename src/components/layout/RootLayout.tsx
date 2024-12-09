'use client';

import React from 'react';
import { ErrorBoundary } from '@/src/components/shared/ErrorBoundary';
import dynamic from 'next/dynamic';
import { LoadingSpinner } from '@/src/components/ui/LoadingSpinner';
import { StickyBanner } from './StickBanner/StickyBanner';
import { Toaster } from 'react-hot-toast';

const Navigation = dynamic(() => import('./Navigation').then(mod => mod.Navigation), {
  loading: () => <LoadingSpinner />,
  ssr: true,
});

const Footer = dynamic(() => import('./Footer').then(mod => mod.Footer), {
  loading: () => <LoadingSpinner />,
  ssr: false,
});

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
          success: {
            duration: 3000,
            iconTheme: {
              primary: '#D4AF37',
              secondary: '#fff',
            },
          },
          error: {
            duration: 4000,
            iconTheme: {
              primary: '#ff4b4b',
              secondary: '#fff',
            },
          },
        }}
      />
    </ErrorBoundary>
  );
};