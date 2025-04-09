'use client';

import React from 'react';
import { Author } from '@/src/types/author';
import Image from 'next/image';
import Link from 'next/link';
import { AIContentBadge } from '@/src/components/shared/AIContentBadge';

interface AuthorCardProps {
  author: Author;
  className?: string;
}

export const AuthorCard: React.FC<AuthorCardProps> = ({ author, className = '' }) => {
  return (
    <Link href={`/authors/${author.slug}`} className={`block ${className}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="p-6">
          <div className="flex items-center mb-4">
            {/* Avatar */}
            <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
              <Image
                src={author.avatar}
                alt={author.name}
                fill
                className="object-cover"
              />
            </div>
            
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-semibold text-gray-900">{author.name}</h3>
                {author.aiRole && (
                  <AIContentBadge size="sm" variant="subtle" />
                )}
              </div>
              <p className="text-gray-600">{author.title}</p>
            </div>
          </div>
          
          <p className="text-gray-700 text-sm line-clamp-3 mb-4">
            {author.shortBio || author.bio.substring(0, 150) + '...'}
          </p>
          
          {/* Expertise tags */}
          {author.expertise && author.expertise.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {author.expertise.slice(0, 3).map((item, index) => (
                <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                  {item.name}
                </span>
              ))}
              {author.expertise.length > 3 && (
                <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                  +{author.expertise.length - 3}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};