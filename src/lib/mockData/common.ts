export const siteConfig = {
  name: 'Dr Emmanuel ELARD',
  title: 'Dr Emmanuel ELARD | Médecine Esthétique à Paris',
  description: 'Cabinet de médecine esthétique du Dr Emmanuel ELARD à Paris. Expertise en injections, soins du visage et traitements anti-âge.',
  url: 'https://medecine-esthetique.net',
  address: {
    street: '8 avenue Dorian',
    city: 'Paris',
    postalCode: '75012',
    country: 'France',
  },
  contact: {
    phone: '+33 01 84 06 37 73',
    email: 'contact@medecine-esthetique.net',
    bookingUrl: 'https://drelard.booking.nextmotion.net',
  },
  social: {
    instagram: 'https://instagram.com/dr.elard',
    facebook: 'https://facebook.com/dr.elard',
    linkedin: 'https://linkedin.com/in/dr-elard',
    tiktok: 'https://tiktok.com/@dr.elard',
  },
  hours: {
    weekdays: '10h - 19h',
    saturday: '10h - 12h',
    sunday: 'Fermé',
  },
  images: {
    logo: '/images/logo.webp',
    hero: '/images/hero.webp',
    doctor: '/images/doctor.webp',
    clinic: '/images/clinic.webp',
  }
};

export const navigation = {
  mainMenu: [
    {
      label: 'À Propos',
      items: [
        { label: 'Dr Emmanuel ELARD', href: '/about/dr-emmanuel-elard' },
        { label: 'Le Cabinet', href: '/about/le-cabinet' },
      ]
    },
    {
      label: 'Traitements',
      items: [
        { label: 'Injections', href: '/treatments/injections' },
        { label: 'Technologies', href: '/treatments/technologies' },
        { label: 'Soins', href: '/treatments/soins' },
      ]
    },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ]
};

export const buttons = {
  booking: {
    text: 'Prendre RDV',
    url: 'https://drelard.booking.nextmotion.net'
  },
  contact: {
    text: 'Nous Contacter',
    url: '/contact'
  }
};

export const footer = {
  copyright: {
    text: `© ${new Date().getFullYear()} Dr Emmanuel ELARD. Tous droits réservés.`,
    subtext: 'Médecine Esthétique Paris'
  },
  social: {
    title: 'Suivez-nous',
    links: [
      { platform: 'instagram', url: 'https://instagram.com/dr.elard' },
      { platform: 'facebook', url: 'https://facebook.com/dr.elard' },
      { platform: 'linkedin', url: 'https://linkedin.com/in/dr-elard' },
      { platform: 'tiktok', url: 'https://tiktok.com/@dr.elard' }
    ]
  }
};