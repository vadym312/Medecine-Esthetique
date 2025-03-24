'use client';

import React from 'react';
import { TreatmentHero } from '@/src/components/shared/treatments/Hero';
import { TreatmentTypes } from '@/src/components/shared/treatments/Types';
import { TreatmentProcedure } from '@/src/components/shared/treatments/Procedure';
import { TreatmentVideo } from '@/src/components/shared/treatments/Video';
import { TreatmentResults } from '@/src/components/shared/treatments/Results';
import { TreatmentFAQ } from '@/src/components/shared/treatments/FAQ';
import { TreatmentCTA } from '@/src/components/shared/treatments/CTA';
import { hifuData } from '@/src/lib/mockData/procedures/technologies-avancees/hifu/Data';

const CernesPage: React.FC = () => {
  return (
    <>
      <TreatmentHero {...hifuData.hero} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-center text-lg text-gray-700 leading-relaxed">
          {hifuData.intro.text}
        </p>
      </div>

      <TreatmentTypes {...hifuData.types} />
      <TreatmentProcedure {...hifuData.procedure} />
      <TreatmentVideo {...hifuData.video} />
      <TreatmentResults {...hifuData.results} />
      <TreatmentFAQ {...hifuData.faq} />
      <TreatmentCTA {...hifuData.cta} />
    </>
  );
};

export default CernesPage;