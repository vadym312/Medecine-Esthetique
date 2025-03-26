'use client';

import React from 'react';
import Head from 'next/head';
import { usePathname } from 'next/navigation'
import { TreatmentHero } from '@/src/components/shared/treatments/Hero';
import { TreatmentTypes } from '@/src/components/shared/treatments/Types';
import { TreatmentProcedure } from '@/src/components/shared/treatments/Procedure';
import { TreatmentVideo } from '@/src/components/shared/treatments/Video';
import { TreatmentResults } from '@/src/components/shared/treatments/Results';
import { TreatmentCTA } from '@/src/components/shared/treatments/CTA';
import { rajeunissementMainsData } from '@/src/lib/mockData/injections/soins/rajeunissement-mains/Data';
import { siteConfig } from '@/src/config/site';
const RajeunissementMainsPage: React.FC = () => {

  const pathname = usePathname();
  const canonicalUrl = `${siteConfig.domain}${pathname}`;

  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      
      <TreatmentHero {...rajeunissementMainsData.hero} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-center text-lg text-gray-700 leading-relaxed">
          {rajeunissementMainsData.intro.text}
        </p>
      </div>

      <TreatmentTypes {...rajeunissementMainsData.types} />
      <TreatmentProcedure {...rajeunissementMainsData.procedure} />
      <TreatmentVideo {...rajeunissementMainsData.video} />
      <TreatmentResults {...rajeunissementMainsData.results} />
      <TreatmentCTA {...rajeunissementMainsData.cta} />
    </>
  );
};

export default RajeunissementMainsPage;