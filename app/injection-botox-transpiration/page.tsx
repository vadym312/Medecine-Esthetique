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
import { transpirationData } from '@/src/lib/mockData/injections/botox/transpiration/Data';
import { siteConfig } from '@/src/config/site';
const TranspirationPage: React.FC = () => {

  const pathname = usePathname();
  const canonicalUrl = `${siteConfig.domain}${pathname}`;

  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>

      <TreatmentHero {...transpirationData.hero} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-center text-lg text-gray-700 leading-relaxed">
          {transpirationData.intro.text}
        </p>
      </div>

      <TreatmentTypes {...transpirationData.types} />
      <TreatmentProcedure {...transpirationData.procedure} />
      <TreatmentFAQ {...transpirationData.faq} />
      <TreatmentCTA {...transpirationData.cta} />
      <RelatedProcedures {...transpirationData.relatedProcedures} />
    </>
  );
};

export default TranspirationPage;