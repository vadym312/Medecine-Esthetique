import { NextRequest, NextResponse } from 'next/server';
import { getParisDistricts, getParisLandmarks } from './src/utils/seo';

export default async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const { pathname } = url;

  // Remove query parameters
  if (url.search) {
    url.search = '';
    return NextResponse.redirect(url, 301);
  }

  const districts = getParisDistricts();
  const landmarks = getParisLandmarks();

  const isLocalizedUrl =
    districts.some(district => pathname.includes(district.toLowerCase().replace(/\s+/g, '-'))) ||
    landmarks.some(landmark => pathname.includes(landmark.toLowerCase().replace(/\s+/g, '-')));

  if (isLocalizedUrl) {
    let basePath = pathname;
    
    districts.forEach(district => {
      const formattedDistrict = district.toLowerCase().replace(/\s+/g, '-');
      basePath = basePath.replace(`-${formattedDistrict}`, '');
    });

    landmarks.forEach(landmark => {
      const formattedLandmark = landmark.toLowerCase().replace(/\s+/g, '-');
      basePath = basePath.replace(`-${formattedLandmark}`, '');
    });

    basePath = basePath.replace(/^\/medecine-esthetique-/, '/');

    if (basePath !== pathname && basePath !== '/') {
      const response = NextResponse.rewrite(new URL(basePath, request.url));
      response.headers.set('x-middleware-rewrite', 'true');
      return response;
    }
  }

  return NextResponse.next();
}
