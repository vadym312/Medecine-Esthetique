'use client';

import { useState, useRef, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';
import { cn } from '@/src/utils/cn';

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad'> {
  containerClassName?: string;
  lowQualityUrl?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  containerClassName = '',
  lowQualityUrl,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
          observer.disconnect();
        }
      },
      { 
        rootMargin: '50px',
        threshold: 0.1
      }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [priority]);

  return (
    <div
      ref={containerRef}
      className={cn('relative overflow-hidden', containerClassName)}
      style={{ 
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
      }}
    >
      {(isLoaded || priority) && (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={cn(
            'object-cover transition-opacity duration-300',
            isLoaded ? 'opacity-100' : 'opacity-0',
            className
          )}
          priority={priority}
          quality={90}
          {...props}
        />
      )}
      {lowQualityUrl && !isLoaded && !priority && (
        <Image
          src={lowQualityUrl}
          alt={alt}
          width={width}
          height={height}
          className="absolute inset-0 object-cover blur-sm"
          quality={10}
        />
      )}
      {!isLoaded && !priority && !lowQualityUrl && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
    </div>
  );
};