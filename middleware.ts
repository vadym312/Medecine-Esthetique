import { NextRequest, NextResponse } from 'next/server';
import { getParisDistricts, getParisLandmarks } from './src/utils/seo';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const { pathname } = url;
  
  // Get districts and landmarks
  const districts = getParisDistricts();
  const landmarks = getParisLandmarks();
  
  // Check if this is a localized URL (contains district or landmark)
  const isLocalizedUrl = 
    districts.some(district => 
      pathname.includes(district.toLowerCase().replace(/\s+/g, '-'))
    ) ||
    landmarks.some(landmark => 
      pathname.includes(landmark.toLowerCase().replace(/\s+/g, '-'))
    );
  
  // If it's a localized URL, extract the base treatment
  if (isLocalizedUrl) {
    // Extract the base treatment from the URL
    let basePath = pathname;
    
    // Remove district/landmark references
    districts.forEach(district => {
      const formattedDistrict = district.toLowerCase().replace(/\s+/g, '-');
      basePath = basePath.replace(`-${formattedDistrict}`, '');
    });
    
    landmarks.forEach(landmark => {
      const formattedLandmark = landmark.toLowerCase().replace(/\s+/g, '-');
      basePath = basePath.replace(`-${formattedLandmark}`, '');
    });
    
    // Remove "medecine-esthetique-" prefix if present
    basePath = basePath.replace(/^\/medecine-esthetique-/, '/');
    
    // If the base path exists and is different from the original path
    if (basePath !== pathname && basePath !== '/') {
      // Redirect with 301 status code for SEO
      return NextResponse.redirect(new URL(basePath, request.url), 301);
    }
    
    // If it's just a district/landmark page with no specific treatment
    if (basePath === '/') {
      return NextResponse.redirect(new URL('/', request.url), 301);
    }
  }
  
  // Handle common redirect patterns
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
    // Skincare variations
    '/skinbooster': '/skinbooster-paris',
    '/mesolift-paris': '/mesolift',
    '/rajeunissement-mains': '/rajeunissement-des-mains',
    '/mains': '/rajeunissement-des-mains'
  };
  
  // Check if we have a direct redirect for this path
  if (redirectMap[pathname]) {
    return NextResponse.redirect(new URL(redirectMap[pathname], request.url), 301);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all paths except for:
    // - API routes
    // - Static files
    // - _next
    // - favicon.ico
    '/((?!api|_next/static|_next/image|images|favicon.ico).*)',
  ],
};