export const getOptimizedImageUrl = (
  url: string,
  width: number = 800
): string => {
  if (!url) return '';

  // If it's an Unsplash image, use their optimization API
  if (url.includes('unsplash.com')) {
    const baseUrl = url.split('?')[0];
    return `${baseUrl}?auto=format&w=${width}&q=80`;
  }

  return url;
};

export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

export const preloadImages = async (urls: string[]): Promise<void> => {
  await Promise.all(urls.map((url) => preloadImage(url)));
};
