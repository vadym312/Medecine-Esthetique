export const CACHE_DURATION = {
  SHORT: 60 * 5, // 5 minutes
  MEDIUM: 60 * 60, // 1 hour
  LONG: 60 * 60 * 24, // 1 day
  VERY_LONG: 60 * 60 * 24 * 7, // 1 week
};

export const getCacheKey = (key: string): string => {
  return `dr-elard:${key}`;
};

export const setCache = (key: string, data: any, duration: number): void => {
  try {
    const item = {
      data,
      expiry: new Date().getTime() + duration * 1000,
    };
    localStorage.setItem(getCacheKey(key), JSON.stringify(item));
  } catch (error) {
    console.error('Error setting cache:', error);
  }
};

export const getCache = <T>(key: string): T | null => {
  try {
    const item = localStorage.getItem(getCacheKey(key));
    if (!item) return null;

    const { data, expiry } = JSON.parse(item);
    if (new Date().getTime() > expiry) {
      localStorage.removeItem(getCacheKey(key));
      return null;
    }

    return data as T;
  } catch (error) {
    console.error('Error getting cache:', error);
    return null;
  }
};

export const clearCache = (key?: string): void => {
  try {
    if (key) {
      localStorage.removeItem(getCacheKey(key));
    } else {
      Object.keys(localStorage).forEach(k => {
        if (k.startsWith('dr-elard:')) {
          localStorage.removeItem(k);
        }
      });
    }
  } catch (error) {
    console.error('Error clearing cache:', error);
  }
};