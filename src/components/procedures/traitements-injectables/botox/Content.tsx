import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ContentSectionProps {
  title: string;
  content: string;
  videoUrl?: string;
  imageUrl?: string;
  isReversed?: boolean;
}

export const ContentSection = ({
  title,
  content,
  videoUrl,
  imageUrl,
  isReversed = false,
}: ContentSectionProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const mediaContent = videoUrl ? (
    <div className="relative aspect-video">
      <iframe
        src={videoUrl}
        title='media_video'
        className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  ) : imageUrl ? (
    <img
      src={imageUrl}
      alt={title}
      className="w-full h-full object-cover rounded-lg shadow-lg"
    />
  ) : null;

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8 }}
      className={`py-16 px-4 md:px-8 max-w-7xl mx-auto ${
        isReversed ? 'md:flex-row-reverse' : ''
      }`}
    >
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className={`space-y-6 ${isReversed ? 'md:pl-8' : 'md:pr-8'}`}>
          <h2 className="text-3xl font-montserrat font-bold text-gray-900">
            {title}
          </h2>
          <p className="text-gray-600 leading-relaxed">{content}</p>
        </div>
        <div className={`${isReversed ? 'md:pr-8' : 'md:pl-8'}`}>
          {mediaContent}
        </div>
      </div>
    </motion.section>
  );
};
