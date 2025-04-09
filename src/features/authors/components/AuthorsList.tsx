'use client';

import React from 'react';
import { Author } from '@/src/types/author';
import { AuthorCard } from './AuthorCard';

interface AuthorsListProps {
  authors: Author[];
  className?: string;
}

export const AuthorsList: React.FC<AuthorsListProps> = ({ authors, className = '' }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${className}`}>
      {authors.map((author) => (
        <AuthorCard key={author.id} author={author} />
      ))}
    </div>
  );
};