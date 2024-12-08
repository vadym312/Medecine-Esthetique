'use client';

import React from 'react';
import { Hero } from './Hero';
import { Biography } from './Biography';
import { Expertise } from './Expertise';
import { Qualifications } from './Qualifications';
import { Training } from './Training';
import { Award } from './Award';
import { Testimonials } from './Testimonials';
import { Map } from './Map';

interface DrEmmanuelElardProps {
  initialData: {
    home: {
      hero: React.ComponentProps<typeof Hero>;
      biography: React.ComponentProps<typeof Biography>;
      expertise: React.ComponentProps<typeof Expertise>;
      qualifications: React.ComponentProps<typeof Qualifications>;
      training: React.ComponentProps<typeof Training>;
      award: React.ComponentProps<typeof Award>;
      testimonials: React.ComponentProps<typeof Testimonials>;
      contact: React.ComponentProps<typeof Map>;
    };
  };
}

export const DrEmmanuelElard: React.FC<DrEmmanuelElardProps> = ({ initialData }) => {
  return (
    <>
      <Hero {...initialData.home.hero} />
      <Biography {...initialData.home.biography} />
      <Expertise {...initialData.home.expertise} />
      <Qualifications {...initialData.home.qualifications} />
      <Training {...initialData.home.training} />
      <Award {...initialData.home.award} />
      <Testimonials {...initialData.home.testimonials} />
      <Map {...initialData.home.contact} />
    </>
  );
};