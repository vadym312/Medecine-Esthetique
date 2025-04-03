import { NextRequest, NextResponse } from 'next/server';
import { getParisDistricts, getParisLandmarks } from '@/src/utils/seo';

// This API route handles redirects for localized pages
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
      return NextResponse.redirect(new URL(`/${basePath}`, request.url));
    }
    
    // If it's just a district page, redirect to home
    return NextResponse.redirect(new URL('/', request.url));
  }
  
  // If not a localized page, return 404
  return new NextResponse('Not Found', { status: 404 });
}