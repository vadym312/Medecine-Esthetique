'use client';

import React from 'react';
import Head from 'next/head';
import { usePathname } from 'next/navigation'
import { TreatmentHero } from '@/src/components/shared/treatments/Hero';
import { TreatmentTypes } from '@/src/components/shared/treatments/Types';
import { TreatmentProcedure } from '@/src/components/shared/treatments/Procedure';
import { TreatmentVideo } from '@/src/components/shared/treatments/Video';
import { TreatmentResults } from '@/src/components/shared/treatments/Results';
import { TreatmentFAQ } from '@/src/components/shared/treatments/FAQ';
import { TreatmentCTA } from '@/src/components/shared/treatments/CTA';
import { RelatedProcedures } from '@/src/components/shared/treatments/RelatedProcedures';
import { pattesOieData } from '@/src/lib/mockData/injections/botox/pattes-oie/Data';

const PattesOiePage: React.FC = () => {

  const pathname = usePathname();
  const canonicalUrl = `${process.env.NEXT_PUBLIC_SITE_URL}${pathname}`;

  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <TreatmentHero {...pattesOieData.hero} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-center text-lg text-gray-700 leading-relaxed">
          {pattesOieData.intro.text}
        </p>
      </div>

      <TreatmentTypes {...pattesOieData.types} />
      <TreatmentProcedure {...pattesOieData.procedure} />
      <TreatmentVideo {...pattesOieData.video} />
      <TreatmentResults {...pattesOieData.results} />
      <TreatmentFAQ {...pattesOieData.faq} />
      <TreatmentCTA {...pattesOieData.cta} />
      <RelatedProcedures {...pattesOieData.relatedProcedures} />
    </>
  );
};

export default PattesOiePage;