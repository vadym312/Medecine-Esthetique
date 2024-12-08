'use client';

import { Container } from '@/src/components/ui/Container';
import { HeroBackground } from './Background';
import { HeroTitle } from './Title';

export interface HeroProps {
  title: string;
  imageUrl: string;
  subtitle?: string;
}

export const Hero = ({ title, subtitle, imageUrl }: HeroProps) => {
  return (
    <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
      <HeroBackground imageUrl={imageUrl} />
      <Container className="h-full flex items-center justify-center relative">
        <HeroTitle title={title} subtitle={subtitle} />
      </Container>
    </section>
  );
};