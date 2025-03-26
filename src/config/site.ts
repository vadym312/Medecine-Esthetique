export const DOMAIN =
  process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_SITE_URL
    : process.env.NEXT_PUBLIC_SITE_URL_DEV;

export const siteConfig = {
  domain: DOMAIN,
  baseUrl: DOMAIN,
}; 