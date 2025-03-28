import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface ImageSliderProps {
  testimonials: {
    id: number;
    image: string;
    content: string;
    author: string;
  }[];
  autoScrollInterval?: number; // Optional prop for auto-scroll timing
}

const customLoader = ({ src, width }: { src: string; width: number }) => {
  const maxWidth = Math.min(width <= 480 ? 393 : 384, 576);
  const quality = 50;
  return `${src}?w=${maxWidth}&q=${quality}&auto=format,compress`;
};

export const ImageSlider: React.FC<ImageSliderProps> = ({
  testimonials,
  autoScrollInterval = 3000, // Default to 3 seconds
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  // Add useEffect for auto-scrolling
  useEffect(() => {
    const newTimer = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % testimonials.length);
    }, autoScrollInterval);
    setTimer(newTimer);

    return () => clearInterval(newTimer);
  }, [testimonials.length, autoScrollInterval]);

  const next = () => {
    setCurrentIndex((i) => (i + 1) % testimonials.length);
    if (timer) clearInterval(timer);
    const newTimer = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % testimonials.length);
    }, autoScrollInterval);
    setTimer(newTimer);
  };

  const prev = () => {
    setCurrentIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
    if (timer) clearInterval(timer);
    const newTimer = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % testimonials.length);
    }, autoScrollInterval);
    setTimer(newTimer);
  };

  return (
    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0"
        >
          <Image
            loader={customLoader}
            src={testimonials[currentIndex].image}
            alt="Treatment result"
            quality={50}
            width={576}
            height={768}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prev}
        className="absolute z-50 left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:bg-white transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={next}
        className="absolute z-50 right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:bg-white transition-colors"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute left-8 right-8 bottom-16 bg-white rounded-xl p-6 shadow-xl">
        <blockquote className="text-gray-700 italic mb-2">
          {testimonials[currentIndex].content}
        </blockquote>
        <cite className="text-gray-900 font-semibold block">
          {testimonials[currentIndex].author}
        </cite>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
