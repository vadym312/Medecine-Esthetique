'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/src/config/site';
import {
  generateLocalBusinessSchema,
  generateMedicalServiceSchema,
  generateFAQSchema
} from '@/src/utils/seo';

interface SchemaOrgProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  type?: 'LocalBusiness' | 'MedicalService' | 'FAQ';
  faqs?: { question: string; answer: string[] }[];
  service?: {
    name: string;
    description: string;
    image?: string;
  };
}

export const SchemaOrg: React.FC<SchemaOrgProps> = ({
  title,
  description,
  imageUrl,
  type = 'LocalBusiness',
  faqs,
  service
}) => {
  const pathname = usePathname();
  const url = `${siteConfig.domain}${pathname}`;

  let schema;

  switch (type) {
    case 'MedicalService':
      schema = generateMedicalServiceSchema({
        name: service?.name || title || '',
        description: service?.description || description || '',
        url,
        image: service?.image || imageUrl
      });
      break;
    case 'FAQ':
      if (faqs && faqs.length > 0) {
        schema = generateFAQSchema(faqs);
      } else {
        schema = generateLocalBusinessSchema();
      }
      break;
    case 'LocalBusiness':
    default:
      schema = generateLocalBusinessSchema();
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};