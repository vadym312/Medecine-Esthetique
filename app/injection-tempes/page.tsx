'use client';

import React from 'react';
import Head from 'next/head';
import { usePathname } from 'next/navigation'
import { TreatmentHero } from '@/src/components/shared/treatments/Hero';
import { TreatmentTypes } from '@/src/components/shared/treatments/Types';
import { TreatmentProcedure } from '@/src/components/shared/treatments/Procedure';
import { TreatmentVideo } from '@/src/components/shared/treatments/Video';
import { TreatmentAvant } from '@/src/components/shared/treatments/Avant_Après';
import { TreatmentTestimonials } from '@/src/components/shared/treatments/Testimonials';
import { TreatmentFAQ } from '@/src/components/shared/treatments/FAQ';
import { TreatmentCTA } from '@/src/components/shared/treatments/CTA';
import { RelatedProcedures } from '@/src/components/shared/treatments/RelatedProcedures';
import { tempesData } from '@/src/lib/mockData/injections/visage/tempes/Data';

const TempesPage: React.FC = () => {

  const pathname = usePathname();
  const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${pathname}`;

  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <TreatmentHero {...tempesData.hero} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-center text-lg text-gray-700 leading-relaxed">
          {tempesData.intro.text}
        </p>
      </div>

      <TreatmentTypes {...tempesData.types} />
      <TreatmentProcedure {...tempesData.procedure} />
      <TreatmentVideo {...tempesData.video} />
      <TreatmentAvant {...tempesData.avant_apres} />
      <TreatmentTestimonials {...tempesData.testimonials} />
      <TreatmentFAQ {...tempesData.faq} />
      <TreatmentCTA {...tempesData.cta} />
      <RelatedProcedures {...tempesData.relatedProcedures} />
    </>
  );
};

export default TempesPage;