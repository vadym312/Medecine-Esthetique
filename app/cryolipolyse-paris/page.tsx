'use client';

import React from 'react';
import Head from 'next/head';
import { usePathname } from 'next/navigation'
import { TreatmentHero } from '@/src/components/shared/treatments/Hero';
import { TreatmentTypes } from '@/src/components/shared/treatments/Types';
import { TreatmentProcedure } from '@/src/components/shared/treatments/Procedure';
import { TreatmentVideo } from '@/src/components/shared/treatments/Video';
import { TreatmentFAQ } from '@/src/components/shared/treatments/FAQ';
import { TreatmentCTA } from '@/src/components/shared/treatments/CTA';
import { cryolipolyseData } from '@/src/lib/mockData/procedures/traitements-specialises/cryolipolyse/Data';

const CernesPage: React.FC = () => {

  const pathname = usePathname();
  const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${pathname}`;

  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <TreatmentHero {...cryolipolyseData.hero} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-center text-lg text-gray-700 leading-relaxed">
          {cryolipolyseData.intro.text}
        </p>
      </div>

      <TreatmentTypes {...cryolipolyseData.types} />
      <TreatmentProcedure {...cryolipolyseData.procedure} />
      <TreatmentVideo {...cryolipolyseData.video} />
      <TreatmentFAQ {...cryolipolyseData.faq} />
      <TreatmentCTA {...cryolipolyseData.cta} />
    </>
  );
};

export default CernesPage;