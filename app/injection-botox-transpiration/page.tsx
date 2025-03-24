'use client';

import React from 'react';
import { TreatmentHero } from '@/src/components/shared/treatments/Hero';
import { TreatmentTypes } from '@/src/components/shared/treatments/Types';
import { TreatmentProcedure } from '@/src/components/shared/treatments/Procedure';
import { TreatmentFAQ } from '@/src/components/shared/treatments/FAQ';
import { TreatmentCTA } from '@/src/components/shared/treatments/CTA';
import { RelatedProcedures } from '@/src/components/shared/treatments/RelatedProcedures';
import { transpirationData } from '@/src/lib/mockData/injections/botox/transpiration/Data';

const TranspirationPage: React.FC = () => {
  return (
    <>
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