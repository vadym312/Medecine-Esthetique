'use client';

import React from 'react';
import Head from 'next/head';
import { usePathname } from 'next/navigation'
import { TreatmentHero } from '@/src/components/shared/treatments/Hero';
import { TreatmentTypes } from '@/src/components/shared/treatments/Types';
import { TreatmentProcedure } from '@/src/components/shared/treatments/Procedure';
import { TreatmentFAQ } from '@/src/components/shared/treatments/FAQ';
import { TreatmentCTA } from '@/src/components/shared/treatments/CTA';
import { RelatedProcedures } from '@/src/components/shared/treatments/RelatedProcedures';
import { skinboosterData } from '@/src/lib/mockData/injections/soins/skinbooster/Data';

const SkinboosterPage: React.FC = () => {

  const pathname = usePathname();
  const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${pathname}`;

  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>

      <TreatmentHero {...skinboosterData.hero} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-center text-lg text-gray-700 leading-relaxed">
          {skinboosterData.intro.text}
        </p>
      </div>

      <TreatmentTypes {...skinboosterData.types} />
      <TreatmentProcedure {...skinboosterData.procedure} />
      <TreatmentFAQ {...skinboosterData.faq} />
      <TreatmentCTA {...skinboosterData.cta} />
      <RelatedProcedures {...skinboosterData.relatedProcedures} />
    </>
  );
};

export default SkinboosterPage;