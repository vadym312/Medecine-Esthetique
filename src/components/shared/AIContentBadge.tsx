'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';

interface AIContentBadgeProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'subtle' | 'outline';
}

export const AIContentBadge: React.FC<AIContentBadgeProps> = ({
  className = '',
  size = 'md',
  variant = 'default'
}) => {
  const sizeClasses = {
    sm: 'text-xs py-0.5 px-1.5',
    md: 'text-sm py-1 px-2',
    lg: 'text-base py-1.5 px-3'
  };

  const variantClasses = {
    default: 'bg-purple-100 text-purple-800 border border-purple-200',
    subtle: 'bg-purple-50 text-purple-700',
    outline: 'bg-transparent text-purple-700 border border-purple-300'
  };

  return (
    <span className={`inline-flex items-center rounded-md font-medium ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}>
      <Sparkles className={`${size === 'sm' ? 'w-3 h-3' : size === 'md' ? 'w-4 h-4' : 'w-5 h-5'} mr-1`} />
      Contenu assisté par IA
    </span>
  );
};