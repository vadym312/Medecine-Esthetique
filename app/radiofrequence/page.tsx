'use client';

import React from 'react';
import { TreatmentHero } from '@/src/components/shared/treatments/Hero';
import { TreatmentTypes } from '@/src/components/shared/treatments/Types';
import { TreatmentProcedure } from '@/src/components/shared/treatments/Procedure';
import { TreatmentFAQ } from '@/src/components/shared/treatments/FAQ';
import { TreatmentCTA } from '@/src/components/shared/treatments/CTA';
import { radioData } from '@/src/lib/mockData/procedures/technologies-avancees/radiofrequence/Data';

const CernesPage: React.FC = () => {
  return (
    <>
      <TreatmentHero {...radioData.hero} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-center text-lg text-gray-700 leading-relaxed">
          {radioData.intro.text}
        </p>
      </div>

      <TreatmentTypes {...radioData.types} />
      <TreatmentProcedure {...radioData.procedure} />
      <TreatmentFAQ {...radioData.faq} />
      <TreatmentCTA {...radioData.cta} />
    </>
  );
};

export default CernesPage;