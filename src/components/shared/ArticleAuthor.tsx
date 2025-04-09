'use client';

import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ArticleAuthorProps {
  authorName: string;
  authorTitle?: string;
  authorImage?: string;
  authorUrl?: string;
  publishDate: string;
  readTime?: number;
  className?: string;
}

export const ArticleAuthor: React.FC<ArticleAuthorProps> = ({
  authorName,
  authorTitle = 'Médecin Esthétique',
  authorImage = '/images/about/docteur-elard-emmanuel-medecin-esthetique-paris-l.webp',
  authorUrl = '/dr-elard-emmanuel-paris-specialiste-injections',
  publishDate,
  readTime,
  className = ''
}) => {
  // Format date to display in a user-friendly format
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(date);
  };

  return (
    <div className={`flex items-center ${className}`}>
      <Link href={authorUrl} className="flex-shrink-0 mr-4">
        <div className="relative h-12 w-12 rounded-full overflow-hidden">
          <Image
            src={authorImage}
            alt={authorName}
            fill
            className="object-cover"
          />
        </div>
      </Link>
      <div>
        <Link href={authorUrl} className="font-medium text-gray-900 hover:text-gold transition-colors">
          {authorName}
        </Link>
        <p className="text-sm text-gray-500">{authorTitle}</p>
        <div className="flex items-center text-xs text-gray-500 mt-1">
          <Calendar className="w-3 h-3 mr-1" />
          <span className="mr-3">{formatDate(publishDate)}</span>
          
          {readTime && (
            <>
              <Clock className="w-3 h-3 mr-1" />
              <span>{readTime} min de lecture</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};