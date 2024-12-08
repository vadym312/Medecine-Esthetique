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
import { radiofrequenceData } from '@/src/lib/mockData/procedures/technologies-avancees/radiofrequence';

export const RadiofrequenceTreatment: React.FC = () => {
  return (
    <>
      <Hero {...radiofrequenceData.hero} />
      <Benefits {...radiofrequenceData.benefits} />
      <TreatmentProcess {...radiofrequenceData.process} />
      <Results {...radiofrequenceData.results} />
      <FAQ {...radiofrequenceData.faq} />
      <CaseStudies {...radiofrequenceData.caseStudies} />
      <Testimonials {...radiofrequenceData.testimonials} />
      <Booking {...radiofrequenceData.booking} />
    </>
  );
};