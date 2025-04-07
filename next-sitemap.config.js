/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://medecine-esthetique.net/', // Your actual domain
  generateRobotsTxt: true, // Generate robots.txt file
  exclude: ['/blog-sitemap.xml'], // Exclude the dynamic sitemaps from the static sitemap
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://medecine-esthetique.net/blog-sitemap.xml', // Include blog sitemap
      'https://medecine-esthetique.net/local-sitemap.xml', // Include local sitemap with district variations
    ],
  },
  transform: async (config, path) => {
    // Custom priority and changefreq for specific pages
    const defaultConfig = {
      loc: path,
      changefreq: 'daily',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    };

    // Boost priority for important pages
    if (path === '/') {
      return {
        ...defaultConfig,
        priority: 1.0,
      };
    }

    // Boost priority for treatment pages
    if (path.includes('injection') || path.includes('botox')) {
      return {
        ...defaultConfig,
        priority: 0.9,
      };
    }

    return defaultConfig;
  },
};