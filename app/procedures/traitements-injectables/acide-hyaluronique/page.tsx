'use client';

import React from 'react';
import { TreatmentHero } from '@/src/components/shared/treatments/Hero';
import { KeyPointsGrid } from '@/src/components/procedures/traitements-injectables/acide-hyaluronique/KeyPoints/Grid';
import { ContentSection } from '@/src/components/procedures/traitements-injectables/Content';
import { AppointmentSection } from '@/src/components/procedures/traitements-injectables/acide-hyaluronique/Appointment';
import { ProceduresGrid } from '@/src/components/procedures/Grid';
import { hyaluronicAcidKeyPoints } from '@/src/lib/mockData/procedures/traitements-injectables/acide-hyaluronique/KeyPoints';
import { acideData } from '@/src/lib/mockData/procedures/traitements-injectables/acide-hyaluronique/Data';

const AcideHyaluroniquePage: React.FC = () => {
  return (
    <>
      <TreatmentHero {...acideData.hero} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {acideData.introText.map((intro, index) =>
          <p className="text-center text-lg text-gray-700 leading-relaxed" key={index}>
            {intro}
          </p>
        )}
      </div>

      <KeyPointsGrid
        title="Points Clés de l'Acide Hyaluronique"
        points={hyaluronicAcidKeyPoints}
      />

      <ContentSection {...acideData.introSection} className="bg-white" isReversed={false} />

      <ContentSection
        {...acideData.agingSection}
        className="bg-gray-50"
        isReversed={true}
      />

      <ContentSection
        {...acideData.techniquesSection}
        className="bg-white"
        isReversed={false}
      />

      <ContentSection
        {...acideData.resultsSection}
        className="bg-white"
        isReversed={false}
      />

      <ContentSection
        {...acideData.patientSection}
        className="bg-gray-50"
        isReversed={false}
      />

      <ContentSection
        {...acideData.emotionSection}
        className="bg-white"
        isReversed={true}
      />

      <ContentSection
        {...acideData.expertiseSection}
        className="bg-gray-50"
        isReversed={false}
      />

      <AppointmentSection className="bg-gradient-to-br from-gold/10 via-gold/5 to-transparent" />

      <ProceduresGrid
        {...acideData.relatedProcedures}
        className="bg-gray-50"
      />
    </>
  );
};

export default AcideHyaluroniquePage;