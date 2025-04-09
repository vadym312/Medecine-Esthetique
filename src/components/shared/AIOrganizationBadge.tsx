'use client';

import React from 'react';
import { Cpu } from 'lucide-react';

interface AIOrganizationBadgeProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'subtle' | 'outline';
  text?: string;
}

export const AIOrganizationBadge: React.FC<AIOrganizationBadgeProps> = ({
  className = '',
  size = 'md',
  variant = 'default',
  text = 'IA Médicale Certifiée'
}) => {
  const sizeClasses = {
    sm: 'text-xs py-0.5 px-1.5',
    md: 'text-sm py-1 px-2',
    lg: 'text-base py-1.5 px-3'
  };

  const variantClasses = {
    default: 'bg-blue-100 text-blue-800 border border-blue-200',
    subtle: 'bg-blue-50 text-blue-700',
    outline: 'bg-transparent text-blue-700 border border-blue-300'
  };

  return (
    <span className={`inline-flex items-center rounded-md font-medium ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}>
      <Cpu className={`${size === 'sm' ? 'w-3 h-3' : size === 'md' ? 'w-4 h-4' : 'w-5 h-5'} mr-1`} />
      {text}
    </span>
  );
};