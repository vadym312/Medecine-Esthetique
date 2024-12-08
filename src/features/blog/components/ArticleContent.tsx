'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface ArticleContentProps {
  content: string;
}

export const ArticleContent: React.FC<ArticleContentProps> = ({ content }) => {
  useEffect(() => {
    const article = document.querySelector('.article-content');
    if (article) {
      const headings = article.querySelectorAll('h2, h3');
      headings.forEach((heading) => {
        if (!heading.id) {
          const text = heading.textContent || '';
          const id = text
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
          heading.id = id;
        }
      });
    }
  }, [content]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="prose prose-lg max-w-none article-content"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};