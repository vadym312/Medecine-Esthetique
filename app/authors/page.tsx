'use client';

import React from 'react';
import Head from 'next/head';
import { usePathname } from 'next/navigation';
import { getAllAuthors } from '@/src/lib/mockData/authors';
import { AuthorsList } from '@/src/features/authors/components/AuthorsList';

export default function AuthorsPage() {
  const pathname = usePathname();
  const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${pathname}`;
  const authors = getAllAuthors();

  return (
    <>
      <Head>
        <title>Nos Experts | Dr Emmanuel Elard</title>
        <meta name="description" content="Découvrez notre équipe d'experts en médecine esthétique et en intelligence artificielle. Nos spécialistes combinent expertise médicale et technologies avancées pour des soins personnalisés." />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 mt-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-4">Notre Équipe d'Experts</h1>
            <p className="text-lg text-gray-600 text-center mb-12">
              Découvrez les spécialistes qui combinent expertise médicale et technologies avancées pour vous offrir des soins personnalisés de haute qualité.
            </p>
            
            <AuthorsList authors={authors} />
          </div>
        </div>
      </div>
    </>
  );
}