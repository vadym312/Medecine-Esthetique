'use client';

import React from 'react';
import { ErrorBoundary } from '@/src/components/shared/ErrorBoundary';
import dynamic from 'next/dynamic';
import { LoadingSpinner } from '@/src/components/ui/LoadingSpinner';

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
    </ErrorBoundary>
  );
};