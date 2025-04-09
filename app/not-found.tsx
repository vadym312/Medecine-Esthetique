'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Home, Search } from 'lucide-react';

export default function NotFound() {
  // Add useEffect to handle client-side SchemaOrg loading
  useEffect(() => {
    // Dynamic import of SchemaOrg to avoid SSR issues
    import('@/src/components/shared/SchemaOrg').then((mod) => {
      const SchemaOrg = mod.SchemaOrg;
      const schemaContainer = document.createElement('div');
      schemaContainer.id = 'schema-org-container';
      document.body.appendChild(schemaContainer);
    }).catch((err) => {
      console.error('Failed to load SchemaOrg:', err);
    });

    // Cleanup
    return () => {
      const container = document.getElementById('schema-org-container');
      if (container) {
        container.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center"
      >
        <h1 className="text-6xl font-bold text-gold mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Page non trouvée</h2>
        <p className="text-gray-600 mb-8">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        
        <div className="mb-8">
          <h3 className="text-lg font-medium text-gray-700 mb-4">Vous cherchez peut-être :</h3>
          <ul className="space-y-2 text-left">
            <li>
              <Link href="/acide-hyaluronique" className="text-gold hover:underline flex items-center">
                <Search className="w-4 h-4 mr-2" />
                Injections d'acide hyaluronique
              </Link>
            </li>
            <li>
              <Link href="/botox" className="text-gold hover:underline flex items-center">
                <Search className="w-4 h-4 mr-2" />
                Traitement au Botox
              </Link>
            </li>
            <li>
              <Link href="/tarifs" className="text-gold hover:underline flex items-center">
                <Search className="w-4 h-4 mr-2" />
                Nos tarifs
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gold hover:underline flex items-center">
                <Search className="w-4 h-4 mr-2" />
                Nous contacter
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gold hover:bg-gold/90 transition-colors">
            <Home className="w-5 h-5 mr-2" />
            Accueil
          </Link>
          <button 
            onClick={() => window.history.back()} 
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour
          </button>
        </div>
      </motion.div>
    </div>
  );
}