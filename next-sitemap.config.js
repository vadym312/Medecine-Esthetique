/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://medecine-esthetique.net/', // Your actual domain
  generateRobotsTxt: true, // Generate robots.txt file
  exclude: ['/server-sitemap.xml'], // Exclude the dynamic sitemap from the static sitemap
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://medecine-esthetique.net/server-sitemap.xml', // Include dynamic blog sitemap
    ],
  },
};
