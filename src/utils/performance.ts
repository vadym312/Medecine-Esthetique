export const optimizeDOMSize = (): void => {
  // Remove empty text nodes
  document.querySelectorAll('*').forEach(element => {
    element.childNodes.forEach(node => {
      if (node.nodeType === Node.TEXT_NODE && node.textContent?.trim() === '') {
        node.remove();
      }
    });
  });
};

export const deferNonCriticalJS = (): void => {
  document.querySelectorAll('script[data-priority="low"]').forEach(script => {
    script.setAttribute('defer', '');
  });
};

export const injectCriticalCSS = (css: string): void => {
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
};

export const measurePerformance = (): void => {
  if (typeof window !== 'undefined') {
    // Core Web Vitals
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        console.log(`${entry.name}: ${entry.startTime}ms`);
      }
    }).observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
  }
};