'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LoadingSpinner } from '@/src/components/ui/LoadingSpinner';

interface LoadMoreProps {
  loading: boolean;
  hasMore: boolean;
  onLoadMore: () => void;
}

export const LoadMore: React.FC<LoadMoreProps> = ({ loading, hasMore, onLoadMore }) => {
  if (!hasMore) return null;

  return (
    <div className="flex justify-center mt-12">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onLoadMore}
          className="px-8 py-3 bg-gold text-white rounded-full hover:bg-gold/90 transition-colors"
        >
          Charger plus d'articles
        </motion.button>
      )}
    </div>
  );
};