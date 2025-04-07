"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "@/src/utils/animations";
import { optimizeImageAlt, optimizeImageFilename } from "@/src/utils/seo";
import { SchemaOrg } from "@/src/components/shared/SchemaOrg";

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

const customLoader = ({ src, width }: { src: string; width: number }) => {
  let finalWidth;
  if (width <= 480) finalWidth = 480;
  else if (width <= 768) finalWidth = 768;
  else if (width <= 1200) finalWidth = 1200;
  else finalWidth = 1440;

  const quality = width <= 768 ? 40 : 60;

  return `${src}?w=${finalWidth}&q=${quality}&auto=format,compress`;
};

export const TreatmentHero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage,
}) => {
  // Optimize alt text with location information
  const optimizedAlt = optimizeImageAlt(`${title} - ${subtitle}`, 'Paris 12');
  
  // Optimize image filename
  const keywords = [title.toLowerCase().replace(/\s+/g, '-'), 'paris-12'];
  const optimizedImageName = optimizeImageFilename(backgroundImage, keywords);

  // Create service data for schema
  const serviceData = {
    name: `${title}`,
    description: `${subtitle} Traitement réalisé par le Dr Emmanuel Elard à Paris 12, proche de Bastille, Nation et Gare de Lyon.`,
    image: backgroundImage
  };

  return (
    <section className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center">
      <div className="absolute inset-0">
        <Image
          loader={customLoader}
          src={backgroundImage}
          alt={optimizedAlt}
          fill
          priority
          quality={40}
          sizes="(max-width: 480px) 480px,
                 (max-width: 768px) 768px,
                 1024px"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQrJiEyPjktLjY5OC9AOjU6ODUxN0dKSFdYX2VnaGc7SlxkaW9oV2deZWf/2wBDARUXFx4aHR4eHWRVOkVkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGf/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-1 max-w-4xl text-center">
        <div className="w-full max-w-4xl mx-auto">
          <motion.h1
            variants={fadeIn}
            initial="initial"
            animate="animate"
            className="text-5xl md:text-5xl text-white mb-6"
          >
            {title}
          </motion.h1>
          <motion.p
            variants={fadeIn}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200"
          >
            {subtitle}
          </motion.p>
        </div>
      </div>
      
      {/* Add structured data for medical service */}
      <SchemaOrg type="MedicalService" service={serviceData} />
    </section>
  );
};