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
import { pommettesData } from '@/src/lib/mockData/injections/visage/pommettes/Data';

const PommettesPage: React.FC = () => {

  const pathname = usePathname();
  const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${pathname}`;

  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <TreatmentHero {...pommettesData.hero} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-center text-lg text-gray-700 leading-relaxed">
          {pommettesData.intro.text}
        </p>
      </div>

      <TreatmentTypes {...pommettesData.types} />
      <TreatmentProcedure {...pommettesData.procedure} />
      <TreatmentVideo {...pommettesData.video} />
      <TreatmentResults {...pommettesData.results} />
      <TreatmentTestimonials {...pommettesData.testimonials} />
      <TreatmentFAQ {...pommettesData.faq} />
      <TreatmentCTA {...pommettesData.cta} />
      <RelatedProcedures {...pommettesData.relatedProcedures} />
    </>
  );
};

export default PommettesPage;