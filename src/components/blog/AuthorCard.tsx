'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AIContentBadge } from '@/src/components/shared/AIContentBadge';

interface AuthorCardProps {
  name: string;
  slug?: string;
  image?: string;
  title?: string;
  bio?: string;
  aiRole?: boolean;
  className?: string;
}

export const AuthorCard: React.FC<AuthorCardProps> = ({
  name,
  slug,
  image = '/images/about/docteur-elard-emmanuel-medecin-esthetique-paris-l.webp',
  title = 'Médecin Esthétique',
  bio,
  aiRole = false,
  className = ''
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden ${className}`}>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <Link href={slug ? `/authors/${slug}` : '#'} className="flex items-center group">
            <div className="relative h-14 w-14 rounded-full overflow-hidden mr-4">
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-gray-900 group-hover:text-gold transition-colors">{name}</h3>
                {aiRole && (
                  <AIContentBadge size="sm" />
                )}
              </div>
              <p className="text-sm text-gray-600">{title}</p>
            </div>
          </Link>
        </div>
        
        {bio && (
          <p className="text-gray-700 text-sm line-clamp-3">{bio}</p>
        )}
        
        <div className="mt-4">
          <Link 
            href={slug ? `/authors/${slug}` : '#'}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            Voir le profil complet →
          </Link>
        </div>
      </div>
    </div>
  );
};