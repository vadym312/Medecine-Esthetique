'use client';

import React from 'react';
import { ExpertiseTitle } from './ExpertiseTitle';
import { ExpertiseGrid } from './ExpertiseGrid';
import type { ExpertiseProps } from './types';

export const Expertise: React.FC<ExpertiseProps> = ({ title, items }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ExpertiseTitle title={title} />
        <ExpertiseGrid items={items} />
      </div>
    </section>
  );
};

export * from './types';