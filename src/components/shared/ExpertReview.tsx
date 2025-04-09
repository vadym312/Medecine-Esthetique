'use client';

import React from 'react';
import { CheckCircle, Calendar } from 'lucide-react';
import Image from 'next/image';

interface ExpertReviewProps {
  reviewerName: string;
  reviewerTitle: string;
  reviewerImage?: string;
  reviewDate: string;
  className?: string;
}

export const ExpertReview: React.FC<ExpertReviewProps> = ({
  reviewerName,
  reviewerTitle,
  reviewerImage = '/images/about/docteur-elard-emmanuel-medecin-esthetique-paris-l.webp',
  reviewDate,
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
    <div className={`bg-white border border-gray-200 rounded-lg p-4 my-6 shadow-sm ${className}`}>
      <div className="flex items-center">
        <div className="flex-shrink-0 mr-4">
          {reviewerImage && (
            <div className="relative h-16 w-16 rounded-full overflow-hidden">
              <Image
                src={reviewerImage}
                alt={reviewerName}
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>
        <div>
          <div className="flex items-center mb-1">
            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
            <span className="text-sm text-green-700 font-medium">Vérifié par un expert</span>
          </div>
          <h4 className="text-lg font-semibold">{reviewerName}</h4>
          <p className="text-gray-600 text-sm">{reviewerTitle}</p>
          <div className="flex items-center mt-1 text-gray-500 text-xs">
            <Calendar className="w-3 h-3 mr-1" />
            <span>Révisé le {formatDate(reviewDate)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};