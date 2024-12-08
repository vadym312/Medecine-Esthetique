import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  imageUrl: string;
}

export const Hero = ({ title, imageUrl }: HeroProps) => {
  return (
    <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative h-full flex items-center justify-center px-4"
      >
        <h1 className="text-4xl md:text-6xl text-white font-bold text-center max-w-4xl">
          {title}
        </h1>
      </motion.div>
    </div>
  );
};
