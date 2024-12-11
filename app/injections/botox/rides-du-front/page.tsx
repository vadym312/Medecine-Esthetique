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
import { ridesFrontData } from '@/src/lib/mockData/injections/botox/rides-front/Data';

const RidesFrontPage: React.FC = () => {
  return (
    <>
      <TreatmentHero {...ridesFrontData.hero} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-center text-lg text-gray-700 leading-relaxed">
          {ridesFrontData.intro.text}
        </p>
      </div>

      <TreatmentTypes {...ridesFrontData.types} />
      <TreatmentProcedure {...ridesFrontData.procedure} />
      <TreatmentVideo {...ridesFrontData.video} />
      <TreatmentResults {...ridesFrontData.results} />
      <TreatmentFAQ {...ridesFrontData.faq} />
      <TreatmentCTA {...ridesFrontData.cta} />
      <RelatedProcedures {...ridesFrontData.relatedProcedures} />
    </>
  );
};

export default RidesFrontPage;