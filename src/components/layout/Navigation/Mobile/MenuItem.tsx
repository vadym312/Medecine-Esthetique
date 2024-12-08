'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MenuItem } from '@/src/types/navigation';

interface MobileMenuItemProps {
  item: MenuItem;
  onClose: () => void;
  level?: number;
}

export const MobileMenuItem: React.FC<MobileMenuItemProps> = ({
  item,
  onClose,
  level = 0,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isActive = pathname === item.path;
  const hasChildren = item.children && item.children.length > 0;

  const handleClick = () => {
    if (hasChildren) {
      setIsOpen(!isOpen);
    } else {
      onClose();
    }
  };

  return (
    <div className={`border-b border-gray-100 last:border-0 ${level > 0 ? 'ml-4' : ''}`}>
      {hasChildren ? (
        <button
          className={`flex items-center justify-between w-full py-3 text-gray-800 hover:text-gold ${
            isActive ? 'text-gold' : ''
          }`}
          onClick={handleClick}
        >
          <span className="text-sm font-light">{item.label}</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
            strokeWidth={1.5}
          />
        </button>
      ) : (
        <Link
          href={item.path || '#'}
          className={`block w-full py-3 text-sm font-light text-gray-800 hover:text-gold ${
            isActive ? 'text-gold' : ''
          }`}
          onClick={onClose}
        >
          {item.label}
        </Link>
      )}

      <AnimatePresence>
        {isOpen && hasChildren && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="py-2 space-y-2">
              {item.children?.map((child) => (
                <MobileMenuItem
                  key={child.id}
                  item={child}
                  onClose={onClose}
                  level={level + 1}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};