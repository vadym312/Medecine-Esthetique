'use client';

import React from 'react';
import Head from 'next/head';
import { usePathname } from 'next/navigation'
import { TreatmentHero } from '@/src/components/shared/treatments/Hero';
import { TreatmentTypes } from '@/src/components/shared/treatments/Types';
import { TreatmentProcedure } from '@/src/components/shared/treatments/Procedure';
import { TreatmentVideo } from '@/src/components/shared/treatments/Video';
import { TreatmentResults } from '@/src/components/shared/treatments/Results';
import { TreatmentTestimonials } from '@/src/components/shared/treatments/Testimonials';
import { TreatmentFAQ } from '@/src/components/shared/treatments/FAQ';
import { TreatmentCTA } from '@/src/components/shared/treatments/CTA';
import { RelatedProcedures } from '@/src/components/shared/treatments/RelatedProcedures';
import { augmentationLevresData } from '@/src/lib/mockData/injections/levres/augmentation-des-levres/Data';
import { siteConfig } from '@/src/config/site';
const AugmentationLevresPage: React.FC = () => {

  const pathname = usePathname();
  const canonicalUrl = `${siteConfig.domain}${pathname}`;

  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <TreatmentHero {...augmentationLevresData.hero} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-center text-lg text-gray-700 leading-relaxed">
          {augmentationLevresData.intro.text}
        </p>
      </div>

      <TreatmentTypes {...augmentationLevresData.types} />
      <TreatmentProcedure {...augmentationLevresData.procedure} />
      <TreatmentVideo {...augmentationLevresData.video} />
      <TreatmentResults {...augmentationLevresData.results} />
      <TreatmentTestimonials {...augmentationLevresData.testimonials} />
      <TreatmentFAQ {...augmentationLevresData.faq} />
      <TreatmentCTA {...augmentationLevresData.cta} />
      <RelatedProcedures {...augmentationLevresData.relatedProcedures} />
    </>
  );
};

export default AugmentationLevresPage;