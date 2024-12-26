import { motion } from 'framer-motion';
import { hero } from '@/src/lib/mockData/homepage/hero';
import { Button } from '../ui/Button';
import Link from 'next/link';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-right"
        style={{
          backgroundImage: `url(${hero.backgroundImage.url})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl px-4 space-y-6"
        >
          <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-white tracking-wide font-light">
            {hero.title}
          </h1>
          <p className="text-sm md:text-base xl:text-xl text-white/90 italic">{hero.subtitle}</p>
          <Button className="bg-white hover:bg-white/90 !text-black px-8 py-3 !rounded-full text-sm transition-colors">
            <Link href={`${hero.ctaUrl}`} target='_blank'>{hero.ctaText}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
