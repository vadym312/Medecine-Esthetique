import { NextRequest, NextResponse } from 'next/server';
import { getParisDistricts, getParisLandmarks } from './utils/seo';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const { pathname } = url;
  const allowedParams = ['utm_source']; // Add any necessary parameters here
  let modified = false;

  for (const param of Array.from(url.searchParams.keys())) {
    if (!allowedParams.includes(param)) {
      url.searchParams.delete(param);
      modified = true;
    }
  }

  if (modified) {
    return NextResponse.redirect(url, 301);
  }
  
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
      // Set x-middleware-rewrite header for analytics
      const response = NextResponse.rewrite(new URL(basePath, request.url));
      response.headers.set('x-middleware-rewrite', 'true');
      return response;
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|images|favicon.ico).*)',
  ],
};