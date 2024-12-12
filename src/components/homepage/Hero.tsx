import { motion } from 'framer-motion';
import { hero } from '@/src/lib/mockData/homepage/hero';
import { Button } from '@headlessui/react';
import Link from 'next/link';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full">
      <video autoPlay muted playsInline loop className='w-full h-full absolute object-cover inset-0 z-0' src="https://medecine-esthetique.net/wp-content/uploads/2024/11/video-cover-mobile2.mp4"></video>
      <div className='absoulte inset-0 bg-black/50 z-10' />
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl px-4 space-y-6"
        >
          <h1 className="text-5xl md:text-7xl text-white tracking-wide">
            {hero.title}
          </h1>
          <p className="text-xl text-white/90 italic">{hero.subtitle}</p>
          <Button className="bg-white hover:bg-white/90 text-black px-8 py-3 rounded-full text-sm transition-colors">
            <Link href='https://drelard.booking.nextmotion.net/site-web' target='_blank'>{hero.ctaText}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
