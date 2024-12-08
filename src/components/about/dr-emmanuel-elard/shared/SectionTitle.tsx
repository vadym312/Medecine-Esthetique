import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/src/utils/animations';

interface SectionTitleProps {
  icon: LucideIcon;
  title: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  icon: Icon,
  title,
}) => {
  return (
    <motion.div
      className="text-center mb-16"
      initial="initial"
      animate="animate"
      variants={fadeIn}
    >
      <Icon className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
      <h2 className="text-3xl font-montserrat font-light text-gray-900 mb-4">
        {title}
      </h2>
      <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
    </motion.div>
  );
};
