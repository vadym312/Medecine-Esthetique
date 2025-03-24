'use client';

import React from 'react';
import { TreatmentHero } from '@/src/components/shared/treatments/Hero';
import { TreatmentTypes } from '@/src/components/shared/treatments/Types';
import { TreatmentProcedure } from '@/src/components/shared/treatments/Procedure';
import { TreatmentVideo } from '@/src/components/shared/treatments/Video';
import { TreatmentResults } from '@/src/components/shared/treatments/Results';
import { TreatmentTestimonials } from '@/src/components/shared/treatments/Testimonials';
import { TreatmentFAQ } from '@/src/components/shared/treatments/FAQ';
import { TreatmentCTA } from '@/src/components/shared/treatments/CTA';
import { RelatedProcedures } from '@/src/components/shared/treatments/RelatedProcedures';
import { rhinoplastieMedicaleData } from '@/src/lib/mockData/injections/visage/rhinoplastie-medicale/Data';

const RhinoplastieMedicalePage: React.FC = () => {
  return (
    <>
      <TreatmentHero {...rhinoplastieMedicaleData.hero} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-center text-lg text-gray-700 leading-relaxed">
          {rhinoplastieMedicaleData.intro.text}
        </p>
      </div>

      <TreatmentTypes {...rhinoplastieMedicaleData.types} />
      <TreatmentProcedure {...rhinoplastieMedicaleData.procedure} />
      <TreatmentVideo {...rhinoplastieMedicaleData.video} />
      <TreatmentResults {...rhinoplastieMedicaleData.results} />
      <TreatmentTestimonials {...rhinoplastieMedicaleData.testimonials} />
      <TreatmentFAQ {...rhinoplastieMedicaleData.faq} />
      <TreatmentCTA {...rhinoplastieMedicaleData.cta} />
      <RelatedProcedures {...rhinoplastieMedicaleData.relatedProcedures} />
    </>
  );
};

export default RhinoplastieMedicalePage;