import { motion } from 'framer-motion';
import { hero } from '@/src/lib/mockData/homepage/hero';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
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
          <h1 className="text-5xl md:text-7xl text-white tracking-wide font-light">
            {hero.title}
          </h1>
          <p className="text-xl text-white/90 italic">{hero.subtitle}</p>
          <div className="pt-4">
            <button className="bg-white hover:bg-white/90 text-black px-8 py-3 rounded-full text-sm transition-colors">
              {hero.ctaText}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
