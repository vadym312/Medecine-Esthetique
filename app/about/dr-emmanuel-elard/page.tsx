'use client';

import { DrEmmanuelElard } from '@/src/features/about/components/DrEmmanuelElard';
import { mockdrData } from '@/src/lib/mockData/about/dr-emmanuel-elard';
import { ExpertiseIconType } from '@/src/features/about/components/DrEmmanuelElard/Expertise/types';

// Transform the mock data to match the expected types
const transformedData = {
  home: {
    ...mockdrData.home,
    expertise: {
      ...mockdrData.home.expertise,
      items: mockdrData.home.expertise.items.map(item => ({
        ...item,
        icon: item.icon as ExpertiseIconType // Type assertion for icon
      }))
    }
  }
};

export default function DrEmmanuelElardPage() {
  return <DrEmmanuelElard initialData={transformedData} />;
}
