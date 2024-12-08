'use client';

import React from 'react';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { TreatmentProcess } from './components/TreatmentProcess';
import { Results } from './components/Results';
import { FAQ } from './components/FAQ';
import { CaseStudies } from './components/CaseStudies';
import { Testimonials } from './components/Testimonials';
import { Booking } from './components/Booking';
import { plexrData } from '@/src/lib/mockData/procedures/traitements-specialises/plexr';

export const PlexrTreatment: React.FC = () => {
  return (
    <>
      <Hero {...plexrData.hero} />
      <Benefits {...plexrData.benefits} />
      <TreatmentProcess {...plexrData.process} />
      <Results {...plexrData.results} />
      <FAQ {...plexrData.faq} />
      <CaseStudies {...plexrData.caseStudies} />
      <Testimonials {...plexrData.testimonials} />
      <Booking {...plexrData.booking} />
    </>
  );
};