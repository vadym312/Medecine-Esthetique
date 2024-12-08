'use client';

import React from 'react';
import { useNavigation } from '@/src/hooks/useNavigation';

export default function ProceduresPage() {
  const { items } = useNavigation();
  const procedures = items.find(item => item.label === 'Procédures')?.children || [];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Nos Procédures</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {procedures.map((category) => (
            <div key={category.id} className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">{category.label}</h2>
              <ul className="space-y-2">
                {category.children?.map((procedure) => (
                  <li key={procedure.id}>
                    <a
                      href={procedure.path}
                      className="text-gray-600 hover:text-gold transition-colors"
                    >
                      {procedure.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}