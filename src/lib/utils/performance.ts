export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

export const preloadImages = async (urls: string[]): Promise<void> => {
  try {
    await Promise.all(urls.map(url => preloadImage(url)));
  } catch (error) {
    console.error('Error preloading images:', error);
  }
};

export const preloadFont = (fontUrl: string): void => {
  const link = document.createElement('link');
  link.href = fontUrl;
  link.rel = 'preload';
  link.as = 'font';
  link.type = 'font/woff2';
  link.crossOrigin = 'anonymous';
  document.head.appendChild(link);
};

export const preloadFonts = (fontUrls: string[]): void => {
  fontUrls.forEach(preloadFont);
};

export const optimizeImages = (imageUrl: string, width: number = 800): string => {
  if (imageUrl.includes('unsplash.com')) {
    return `${imageUrl}?auto=format&w=${width}&q=75`;
  }
  return imageUrl;
};

export const deferNonCriticalResources = (): void => {
  const deferredScripts = document.querySelectorAll('script[data-defer]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const script = entry.target as HTMLScriptElement;
        script.src = script.dataset.src || '';
        observer.unobserve(script);
      }
    });
  });

  deferredScripts.forEach(script => observer.observe(script));
};