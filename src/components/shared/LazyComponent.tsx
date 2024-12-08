'use client';

import React, { Suspense } from 'react';
import { LoadingSpinner } from '@/src/components/ui/LoadingSpinner';

interface LazyComponentProps {
  children: React.ReactNode;
}

export const LazyComponent: React.FC<LazyComponentProps> = ({ children }) => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      {children}
    </Suspense>
  );
};