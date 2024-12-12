'use client';

import React from 'react';
import { TreatmentHero } from '@/src/components/shared/treatments/Hero';
import { TreatmentTypes } from '@/src/components/shared/treatments/Types';
import { TreatmentProcedure } from '@/src/components/shared/treatments/Procedure';
import { TreatmentFAQ } from '@/src/components/shared/treatments/FAQ';
import { TreatmentCTA } from '@/src/components/shared/treatments/CTA';
import { pelxrData } from '@/src/lib/mockData/procedures/traitements-specialises/plexr/Data';

const CernesPage: React.FC = () => {
  return (
    <>
      <TreatmentHero {...pelxrData.hero} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-center text-lg text-gray-700 leading-relaxed">
          {pelxrData.intro.text}
        </p>
      </div>

      <TreatmentTypes {...pelxrData.types} />
      <TreatmentProcedure {...pelxrData.procedure} />
      <TreatmentFAQ {...pelxrData.faq} />
      <TreatmentCTA {...pelxrData.cta} />
    </>
  );
};

export default CernesPage;