'use client';

import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface AIEthicsStatementProps {
  className?: string;
  title?: string;
  statements?: string[];
}

export const AIEthicsStatement: React.FC<AIEthicsStatementProps> = ({
  className = '',
  title = 'Notre Engagement Éthique en IA',
  statements = [
    'Nous utilisons l\'IA pour améliorer les soins, jamais pour les remplacer',
    'Toutes les recommandations IA sont validées par nos médecins experts',
    'Vos données sont traitées avec le plus haut niveau de confidentialité',
    'Nous maintenons une transparence totale sur l\'utilisation de l\'IA dans nos services'
  ]
}) => {
  return (
    <div className={`bg-white border border-blue-200 rounded-lg p-6 my-8 shadow-sm ${className}`}>
      <div className="flex items-center mb-4">
        <ShieldCheck className="w-6 h-6 text-blue-600 mr-3" />
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      
      <ul className="space-y-2">
        {statements.map((statement, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-600 font-bold mr-2">•</span>
            <span className="text-gray-700">{statement}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};