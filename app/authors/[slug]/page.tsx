'use client';

import React from 'react';
import { useParams, usePathname } from 'next/navigation';
import Head from 'next/head';
import { getAuthorBySlug } from '@/src/lib/mockData/authors';
import { AuthorProfile } from '@/src/features/authors/components/AuthorProfile';
import { NotFound } from '@/src/components/shared/NotFound';

export default function AuthorPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const pathname = usePathname();
  const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${pathname}`;
  
  const author = getAuthorBySlug(slug);
  
  if (!author) {
    return (
      <>
        <Head>
          <title>Auteur non trouvé | Dr Emmanuel Elard</title>
          <link rel="canonical" href={canonicalUrl} />
        </Head>
        <NotFound 
          title="Auteur non trouvé"
          message="L'auteur que vous recherchez n'existe pas ou a été déplacé."
        />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{author.name} | Dr Emmanuel Elard</title>
        <meta name="description" content={author.shortBio || author.bio.substring(0, 160)} />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <AuthorProfile author={author} />
    </>
  );
}