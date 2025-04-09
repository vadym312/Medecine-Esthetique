'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Author } from '@/src/types/author';
import { siteConfig } from '@/src/config/site';

interface AuthorSchemaProps {
  author: Author;
}

export const AuthorSchema: React.FC<AuthorSchemaProps> = ({ author }) => {
  const pathname = usePathname();
  const authorUrl = `${siteConfig.domain}${pathname}`;
  
  // Format credentials for schema
  const credentials = author.credentials.map(credential => ({
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": credential.type === 'education' ? 'degree' : 
                          credential.type === 'certification' ? 'certification' : 
                          credential.type === 'award' ? 'award' : 'credential',
    "name": credential.name,
    ...(credential.issuedBy && {
      "recognizedBy": {
        "@type": "Organization",
        "name": credential.issuedBy
      }
    }),
    ...(credential.year && { "dateCreated": credential.year })
  }));
  
  // Format expertise for schema
  const expertise = author.expertise.map(item => ({
    "@type": "DefinedTerm",
    "name": item.name,
    ...(item.description && { "description": item.description })
  }));
  
  // Format publications for schema
  const publications = author.publications?.map(pub => ({
    "@type": "ScholarlyArticle",
    "headline": pub.title,
    ...(pub.url && { "url": pub.url }),
    ...(pub.publisher && { 
      "publisher": {
        "@type": "Organization",
        "name": pub.publisher
      }
    }),
    ...(pub.date && { "datePublished": pub.date }),
    ...(pub.description && { "description": pub.description })
  })) || [];
  
  // Format social profiles for schema
  const sameAs = author.socialProfiles?.map(profile => profile.url) || [];
  
  // Construct the schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": authorUrl,
    "name": author.name,
    "jobTitle": author.title,
    "description": author.shortBio || author.bio.substring(0, 160),
    "image": author.avatar.startsWith('http') ? author.avatar : `${siteConfig.domain}${author.avatar}`,
    "url": authorUrl,
    "sameAs": sameAs,
    "knowsAbout": expertise,
    "hasCredential": credentials,
    "memberOf": {
      "@type": "Organization",
      "name": "Cabinet Dr Emmanuel ELARD",
      "url": siteConfig.domain
    },
    ...(author.publications && { "workExample": publications }),
    ...(author.aiRole && {
      "additionalType": "https://schema.org/AIBasedService",
      "serviceType": "AI Content Oversight",
      "serviceOutput": "Medically Reviewed Content"
    })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};