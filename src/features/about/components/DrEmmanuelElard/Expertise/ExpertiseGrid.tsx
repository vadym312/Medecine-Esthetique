'use client';

import React from 'react';
import { ExpertiseCard } from './ExpertiseCard';
import { EXPERTISE_ICONS } from './constants';
import type { ExpertiseItem } from './types';

interface ExpertiseGridProps {
  items: ExpertiseItem[];
}

export const ExpertiseGrid: React.FC<ExpertiseGridProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {items.map((item, index) => {
        const Icon = EXPERTISE_ICONS[item.icon];
        return (
          <ExpertiseCard
            key={`${item.title}-${index}`}
            icon={Icon}
            title={item.title}
            description={item.description}
            index={index}
          />
        );
      })}
    </div>
  );
};