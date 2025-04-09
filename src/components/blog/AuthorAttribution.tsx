'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock } from 'lucide-react';
import { formatDate } from '@/src/utils/formatDate';
import { AIContentBadge } from '@/src/components/shared/AIContentBadge';

interface AuthorAttributionProps {
  authorName: string;
  authorSlug?: string;
  authorImage?: string;
  authorTitle?: string;
  publishDate: string;
  readTime?: number;
  aiAssisted?: boolean;
  className?: string;
}

export const AuthorAttribution: React.FC<AuthorAttributionProps> = ({
  authorName,
  authorSlug,
  authorImage = '/images/about/docteur-elard-emmanuel-medecin-esthetique-paris-l.webp',
  authorTitle = 'Médecin Esthétique',
  publishDate,
  readTime,
  aiAssisted = false,
  className = ''
}) => {
  return (
    <div className={`flex flex-col sm:flex-row sm:items-center justify-between ${className}`}>
      <div className="flex items-center mb-3 sm:mb-0">
        <Link href={authorSlug ? `/authors/${authorSlug}` : '#'} className="flex items-center group">
          <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
            <Image
              src={authorImage}
              alt={authorName}
              fill
              className="object-cover group-hover:scale-105 transition-transform"
            />
          </div>
          <div>
            <p className="font-medium text-gray-900 group-hover:text-gold transition-colors">{authorName}</p>
            <p className="text-xs text-gray-500">{authorTitle}</p>
          </div>
        </Link>
      </div>
      
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <div className="flex items-center text-sm text-gray-500">
          <Calendar className="w-4 h-4 mr-1" />
          <span>{formatDate(publishDate)}</span>
        </div>
        
        {readTime && (
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="w-4 h-4 mr-1" />
            <span>{readTime} min de lecture</span>
          </div>
        )}
        
        {aiAssisted && (
          <AIContentBadge size="sm" />
        )}
      </div>
    </div>
  );
};