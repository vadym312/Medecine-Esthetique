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

export const optimizeImages = (imageUrl: string, width: number = 800): string => {
    if (imageUrl.includes('unsplash.com')) {
        return `${imageUrl}?auto=format&w=${width}&q=75`;
    }
    return imageUrl;
};