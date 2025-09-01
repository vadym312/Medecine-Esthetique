import { NextRequest, NextResponse } from 'next/server';
import { getParisDistricts, getParisLandmarks } from '@/src/utils/seo';

// This API route handles redirects for 404 pages
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const path = searchParams.get('path') || '';
  
  // Get the district or landmark from the path
  const districts = getParisDistricts();
  const landmarks = getParisLandmarks();
  
  // Check if the path contains a district or landmark
  const matchedDistrict = districts.find(district => 
    path.includes(district.toLowerCase().replace(/\s+/g, '-'))
  );
  
  const matchedLandmark = landmarks.find(landmark => 
    path.includes(landmark.toLowerCase().replace(/\s+/g, '-'))
  );
  
  // If it's a localized page, redirect to the main page
  if (matchedDistrict || matchedLandmark) {
    // Extract the base treatment type
    const basePath = path
      .replace(/medecine-esthetique-/g, '')
      .replace(/-paris-\d+/g, '')
      .replace(/-bastille/g, '')
      .replace(/-nation/g, '')
      .replace(/-gare-de-lyon/g, '');
    
    // Redirect to the main treatment page
    if (basePath) {
      return NextResponse.redirect(new URL(`/${basePath}`, request.url), 301);
    }
    
    // If it's just a district page, redirect to home
    return NextResponse.redirect(new URL('/', request.url), 301);
  }
  
  // Handle specific redirects for common 404s
  const redirectMap: Record<string, string> = {
    // Old URLs to new URLs
    '/botox-paris': '/botox',
    '/acide-hyaluronique-paris': '/acide-hyaluronique',
    '/injections-paris': '/',
    '/medecine-esthetique': '/',
    '/dr-elard': '/dr-elard-emmanuel-paris-specialiste-injections',
    '/cabinet': '/le-cabinet-paris-specialiste-injections',
    '/prix': '/tarifs',
    '/contact-paris': '/contact',
    '/blog-medecine-esthetique': '/blog',
    // Treatment variations
    '/injection-levres': '/augmentation-levres-paris',
    '/augmentation-des-levres': '/augmentation-levres-paris',
    '/injection-cernes': '/injections-cernes-paris',
    '/injection-pommettes': '/injection-acide-hyaluronique-pommettes-paris',
    '/injection-sillons': '/sillons-nasogeniens',
    '/sillons': '/sillons-nasogeniens',
    '/injection-front': '/injection-du-front',
    '/front': '/injection-du-front',
    '/injection-tempe': '/injection-tempes',
    '/tempes': '/injection-tempes',
    '/injection-ovale': '/ovale-du-visage',
    '/ovale': '/ovale-du-visage',
    '/injection-menton-paris': '/injection-menton',
    '/rhinoplastie': '/rhinoplastie-medicale-paris',
    '/nez': '/rhinoplastie-medicale-paris',
    '/plis-amertume': '/plis-armetume-acide-hyaluronique-paris',
    '/rides-bouche': '/rides-autour-de-la-bouche',
    '/rides-peribuccales': '/rides-autour-de-la-bouche',
    // Botox variations
    '/botox-front': '/botox-rides-du-front',
    '/botox-lion': '/botox-ride-du-lion',
    '/botox-pattes-oie': '/botox-rides-pattes-d-oie',
    '/botox-transpiration': '/injection-botox-transpiration',
    // Technology variations
    '/hifu-paris': '/hifu',
    '/radiofrequence-paris': '/radiofrequence',
    '/plexr': '/plexr-blepharoplastie-sans-chirurgie',
    '/blepharoplastie': '/plexr-blepharoplastie-sans-chirurgie',
    '/cryolipolyse': '/cryolipolyse-paris',
    '/microneedling': '/microneedling',
    '/epilation-laser': '/epilation-laser',
    // Skincare variations
    '/skinbooster': '/skinbooster-paris',
    '/mesolift-paris': '/mesolift',
    '/rajeunissement-mains': '/rajeunissement-des-mains',
    '/mains': '/rajeunissement-des-mains'
  };
  
  // Check if we have a direct redirect for this path
  if (redirectMap[path]) {
    return NextResponse.redirect(new URL(redirectMap[path], request.url), 301);
  }
  
  // For blog posts that might have moved
  if (path.startsWith('/blog/') && !path.includes('page')) {
    // Extract the slug
    const slug = path.replace('/blog/', '');
    
    // Redirect to the new blog URL structure
    return NextResponse.redirect(new URL(`/blog/${slug}`, request.url), 301);
  }
  
  // For pagination in blog
  if (path.match(/\/blog\/page\/\d+/)) {
    return NextResponse.redirect(new URL('/blog', request.url), 301);
  }
  
  // If no specific redirect is found, return 404
  return NextResponse.json({ message: 'No redirect found' }, { status: 404 });
}