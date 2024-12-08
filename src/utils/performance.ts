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

export const measureWebVitals = (): void => {
  if (typeof window !== 'undefined') {
    // Core Web Vitals
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry) => {
        switch (entry.entryType) {
          case 'layout-shift':
            const clsEntry = entry as PerformanceEntry & { value: number };
            console.log('CLS:', Math.round(clsEntry.value * 1000));
            break;
          case 'largest-contentful-paint':
            const lcpEntry = entry as PerformanceEntry & { startTime: number };
            console.log('LCP:', Math.round(lcpEntry.startTime));
            break;
          case 'first-input':
            const fidEntry = entry as PerformanceEntry & {
              processingStart: number;
              startTime: number;
            };
            console.log(
              'FID:',
              Math.round(fidEntry.processingStart - fidEntry.startTime)
            );
            break;
        }
      });
    }).observe({ entryTypes: ['layout-shift', 'largest-contentful-paint', 'first-input'] });

    // Navigation Timing
    window.addEventListener('load', () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        console.log('TTFB:', Math.round(navigation.responseStart - navigation.requestStart));
        console.log('FCP:', Math.round(navigation.domContentLoadedEventEnd - navigation.requestStart));
      }, 0);
    });
  }
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