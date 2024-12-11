'use client';

import React from 'react';
import { TreatmentHero } from '@/src/components/shared/treatments/Hero';
import { TreatmentTypes } from '@/src/components/shared/treatments/Types';
import { TreatmentProcedure } from '@/src/components/shared/treatments/Procedure';
import { TreatmentVideo } from '@/src/components/shared/treatments/Video';
import { TreatmentResults } from '@/src/components/shared/treatments/Results';
import { TreatmentFAQ } from '@/src/components/shared/treatments/FAQ';
import { TreatmentCTA } from '@/src/components/shared/treatments/CTA';
import { RelatedProcedures } from '@/src/components/shared/treatments/RelatedProcedures';
import { ridesLionData } from '@/src/lib/mockData/injections/botox/rides-lion/Data';

const RidesLionPage: React.FC = () => {
  return (
    <>
      <TreatmentHero {...ridesLionData.hero} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-center text-lg text-gray-700 leading-relaxed">
          {ridesLionData.intro.text}
        </p>
      </div>

      <TreatmentTypes {...ridesLionData.types} />
      <TreatmentProcedure {...ridesLionData.procedure} />
      <TreatmentVideo {...ridesLionData.video} />
      <TreatmentResults {...ridesLionData.results} />
      <TreatmentFAQ {...ridesLionData.faq} />
      <TreatmentCTA {...ridesLionData.cta} />
      <RelatedProcedures {...ridesLionData.relatedProcedures} />
    </>
  );
};

export default RidesLionPage;