'use client';

import React from 'react';
import { ArticleSchema } from './ArticleSchema';
import { AIDisclosure } from './AIDisclosure';
import { ExpertReview } from './ExpertReview';
import { ArticleAuthor } from './ArticleAuthor';

interface ArticleWrapperProps {
  title: string;
  description: string;
  imageUrl?: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  authorTitle?: string;
  authorImage?: string;
  authorUrl?: string;
  publisherName?: string;
  publisherLogo?: string;
  keywords?: string[];
  articleBody?: string;
  articleSection?: string;
  aiAssisted?: boolean;
  aiDisclosure?: string;
  expertReviewer?: {
    name: string;
    title: string;
    image?: string;
    date: string;
  };
  readTime?: number;
  children: React.ReactNode;
  className?: string;
}

export const ArticleWrapper: React.FC<ArticleWrapperProps> = ({
  title,
  description,
  imageUrl,
  datePublished,
  dateModified,
  authorName = 'Dr Emmanuel Elard',
  authorTitle = 'Médecin Esthétique',
  authorImage,
  authorUrl,
  publisherName,
  publisherLogo,
  keywords,
  articleBody,
  articleSection,
  aiAssisted = true,
  aiDisclosure,
  expertReviewer,
  readTime,
  children,
  className = ''
}) => {
  return (
    <article className={`max-w-4xl mx-auto px-4 py-8 ${className}`}>
      {/* Schema.org markup */}
      <ArticleSchema
        title={title}
        description={description}
        imageUrl={imageUrl}
        datePublished={datePublished}
        dateModified={dateModified}
        authorName={authorName}
        authorUrl={authorUrl}
        publisherName={publisherName}
        publisherLogo={publisherLogo}
        keywords={keywords}
        articleBody={articleBody}
        articleSection={articleSection}
        aiAssisted={aiAssisted}
        aiDisclosure={aiDisclosure}
      />
      
      {/* Article author information */}
      <ArticleAuthor
        authorName={authorName}
        authorTitle={authorTitle}
        authorImage={authorImage}
        authorUrl={authorUrl}
        publishDate={datePublished}
        readTime={readTime}
        className="mb-8"
      />
      
      {/* AI disclosure if applicable */}
      {aiAssisted && (
        <AIDisclosure 
          disclosureText={aiDisclosure}
          className="mb-8"
        />
      )}
      
      {/* Article content */}
      <div className="prose prose-lg max-w-none">
        {children}
      </div>
      
      {/* Expert review if applicable */}
      {expertReviewer && (
        <ExpertReview
          reviewerName={expertReviewer.name}
          reviewerTitle={expertReviewer.title}
          reviewerImage={expertReviewer.image}
          reviewDate={expertReviewer.date}
          className="mt-12"
        />
      )}
    </article>
  );
};