"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/Button";
import { fadeIn } from "@/src/utils/animations";
import { hero } from "@/src/lib/mockData/homepage/hero";
import { SchemaOrg } from "@/src/components/shared/SchemaOrg";

const customLoader = ({ src, width }: { src: string; width: number }) => {
  let finalWidth;
  if (width <= 480) finalWidth = 480;
  else if (width <= 768) finalWidth = 768;
  else if (width <= 1200) finalWidth = 1200;
  else finalWidth = 1440;

  return `${src}?w=${finalWidth}&q=80&auto=format,compress,quality`;
};

export const Hero: React.FC = () => {
  // Preload the hero image
  useEffect(() => {
    const preloadImage = () => {
      const img = new window.Image();
      img.src = customLoader({ 
        src: hero.backgroundImage.url, 
        width: window.innerWidth 
      });
    };
    preloadImage();
  }, []);

  return (
    <section className="relative w-full min-h-[80vh] sm:min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 w-full h-full">
        <Image
          loader={customLoader}
          src={hero.backgroundImage.url}
          alt="Médecine esthétique à Paris 12 - Cabinet du Dr Emmanuel Elard, spécialiste des injections près de Bastille et Nation"
          quality={80}
          fill
          priority
          fetchPriority="high"
          loading="eager"
          decoding="async"
          sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, 100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQrJiEyPjktLjY5OC9AOjU6ODUxN0dKSFdYX2VnaGc7SlxkaW9oV2deZWf/2wBDARUXFx4aHR4eHWRVOkVkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGf/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          className="absolute inset-0 w-full h-full object-cover transform-gpu will-change-transform"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-center">
        <motion.div
          variants={fadeIn}
          initial="initial"
          animate="animate"
          className="space-y-6"
        >
          <h1 className="text-2xl md:text-4xl lg:text-6xl text-white tracking-wide font-light">
            {hero.title}
          </h1>
          <p className="text-sm md:text-base xl:text-xl text-white/90 italic">
            {hero.subtitle}
          </p>
          <Button className="bg-white hover:bg-white/90 !text-black px-8 py-3 !rounded-full text-sm transition-colors">
            <Link href={hero.ctaUrl} target="_blank">
              {hero.ctaText}
            </Link>
          </Button>
        </motion.div>
      </div>
      
      <SchemaOrg />
    </section>
  );
};