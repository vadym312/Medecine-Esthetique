import { ImageLoaderProps } from 'next/image';

export const imageLoader = ({ src, width, quality }: ImageLoaderProps): string => {
  // Handle Unsplash images
  if (src.includes('unsplash.com')) {
    return `${src}?w=${width}&q=${quality || 75}&auto=format`;
  }
  
  // Handle local images
  if (src.startsWith('/')) {
    return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
  }

  return src;
};

export const getImageDimensions = async (src: string): Promise<{ width: number; height: number }> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve({ width: img.width, height: img.height });
    img.onerror = reject;
    img.src = src;
  });
};

export const preloadCriticalImages = (images: string[]): void => {
  images.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
};