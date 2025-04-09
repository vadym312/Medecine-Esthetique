'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Home } from 'lucide-react';

interface NotFoundProps {
  title?: string;
  message?: string;
  showHomeLink?: boolean;
  showBackButton?: boolean;
}

export const NotFound: React.FC<NotFoundProps> = ({
  title = 'Page non trouvée',
  message = 'La page que vous recherchez n\'existe pas ou a été déplacée.',
  showHomeLink = true,
  showBackButton = true
}) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center"
      >
        <h1 className="text-6xl font-bold text-gold mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">{title}</h2>
        <p className="text-gray-600 mb-8">
          {message}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {showHomeLink && (
            <Link href="/" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gold hover:bg-gold/90 transition-colors">
              <Home className="w-5 h-5 mr-2" />
              Accueil
            </Link>
          )}
          
          {showBackButton && (
            <button 
              onClick={() => window.history.back()} 
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Retour
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
};