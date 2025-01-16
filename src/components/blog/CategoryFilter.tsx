import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="py-8 overflow-x-auto">
      <div className="container mx-auto px-4">
        <div className="flex space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelectCategory(null)}
            className={clsx(
              'px-6 py-2 rounded-full transition-colors',
              selectedCategory === null
                ? 'bg-[#D4AF37] text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            )}
          >
            Tous
          </motion.button>
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onSelectCategory(category)}
              className={clsx(
                'px-6 py-2 rounded-full transition-colors',
                selectedCategory === category
                  ? 'bg-[#D4AF37] text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              )}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};
