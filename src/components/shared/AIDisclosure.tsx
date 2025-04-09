'use client';

import React from 'react';
import { Info } from 'lucide-react';

interface AIDisclosureProps {
  className?: string;
  disclosureText?: string;
  showIcon?: boolean;
}

export const AIDisclosure: React.FC<AIDisclosureProps> = ({
  className = '',
  disclosureText = 'Cet article a été rédigé avec l\'assistance de l\'intelligence artificielle, sous la supervision et validation d\'experts médicaux qualifiés.',
  showIcon = true
}) => {
  return (
    <div className={`bg-gray-100 border-l-4 border-gold p-4 my-6 rounded-r-md ${className}`}>
      <div className="flex items-start">
        {showIcon && (
          <Info className="w-5 h-5 text-gold flex-shrink-0 mt-0.5 mr-3" />
        )}
        <p className="text-sm text-gray-700">
          {disclosureText}
        </p>
      </div>
    </div>
  );
};