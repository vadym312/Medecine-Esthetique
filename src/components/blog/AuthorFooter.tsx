'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AIContentBadge } from '@/src/components/shared/AIContentBadge';

interface AuthorFooterProps {
  authorName: string;
  authorSlug?: string;
  authorImage?: string;
  authorTitle?: string;
  authorBio?: string;
  aiAssisted?: boolean;
  reviewerName?: string;
  reviewerSlug?: string;
  reviewerImage?: string;
  reviewerTitle?: string;
  className?: string;
}

export const AuthorFooter: React.FC<AuthorFooterProps> = ({
  authorName,
  authorSlug,
  authorImage = '/images/about/docteur-elard-emmanuel-medecin-esthetique-paris-l.webp',
  authorTitle = 'Médecin Esthétique',
  authorBio,
  aiAssisted = false,
  reviewerName,
  reviewerSlug,
  reviewerImage,
  reviewerTitle,
  className = ''
}) => {
  return (
    <div className={`border-t border-gray-200 pt-8 mt-8 ${className}`}>
      <div className="bg-gray-50 rounded-lg p-6">
        {/* Author info */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6">
          <Link href={authorSlug ? `/authors/${authorSlug}` : '#'} className="flex items-center group mb-4 sm:mb-0 sm:mr-6">
            <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
              <Image
                src={authorImage}
                alt={authorName}
                fill
                className="object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-gray-900 group-hover:text-gold transition-colors">{authorName}</h3>
                {aiAssisted && (
                  <AIContentBadge size="sm" />
                )}
              </div>
              <p className="text-sm text-gray-600">{authorTitle}</p>
            </div>
          </Link>
          
          {reviewerName && (
            <div className="flex items-center">
              <div className="hidden sm:block h-10 border-l border-gray-300 mx-4"></div>
              <Link href={reviewerSlug ? `/authors/${reviewerSlug}` : '#'} className="flex items-center group">
                {reviewerImage && (
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-3">
                    <Image
                      src={reviewerImage}
                      alt={reviewerName}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                )}
                <div>
                  <div className="flex items-center">
                    <p className="text-xs text-green-600 font-medium mb-1">Vérifié par</p>
                  </div>
                  <p className="font-medium text-gray-900 group-hover:text-gold transition-colors">{reviewerName}</p>
                  {reviewerTitle && (
                    <p className="text-xs text-gray-500">{reviewerTitle}</p>
                  )}
                </div>
              </Link>
            </div>
          )}
        </div>
        
        {/* Author bio */}
        {authorBio && (
          <p className="text-gray-700 text-sm">{authorBio}</p>
        )}
        
        {/* AI disclosure */}
        {aiAssisted && (
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4 rounded-r">
            <p className="text-sm text-gray-700">
              <span className="font-medium">Note sur le contenu assisté par IA :</span> Cet article a été rédigé avec l'assistance de l'intelligence artificielle, sous la supervision et validation d'experts médicaux qualifiés. Tout le contenu est vérifié pour garantir son exactitude et sa pertinence clinique.
            </p>
          </div>
        )}
        
        {/* View profile link */}
        <div className="mt-4 text-center">
          <Link 
            href={authorSlug ? `/authors/${authorSlug}` : '#'}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            Voir le profil complet de l'auteur →
          </Link>
        </div>
      </div>
    </div>
  );
};