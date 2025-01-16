import { hero } from './hero';
import { doctor } from './doctor';
import { services } from './services';
import { testimonials } from './testimonials';
import { articles } from './articles';
import { contact } from './contact';
import { featuredTreatment } from './featuredTreatment';
import { instagramPosts } from './instagramPosts';

export const homepageData = {
  hero,
  doctor,
  services,
  testimonials,
  articles,
  contact,
  featuredTreatment,
  instagramPosts,
  seo: {
    title: 'Dr Emmanuel ELARD | Médecine Esthétique à Paris',
    description: 'Cabinet de médecine esthétique du Dr Emmanuel ELARD à Paris. Expertise en injections, soins du visage et traitements anti-âge.',
    image: {
      url: 'https://medecine-esthetique.net/wp-content/uploads/2023/07/dr-elard-specialiste-anti-age-paris.jpg',
      alt: 'Dr Emmanuel ELARD',
      width: 1200,
      height: 630,
    },
  },
};