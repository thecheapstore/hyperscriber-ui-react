export interface ServiceTestimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  image: string;
}

// Placeholder testimonials shared across service pages until real,
// service-specific client quotes are available.
export const serviceTestimonials: ServiceTestimonial[] = [
  {
    name: 'Daniel Moore',
    role: 'Founder & CEO',
    company: 'SaaS Startup',
    quote:
      'Calibre Associates rebuilt our architecture with performance and scalability in mind. The result was a faster product and a system we can confidently scale.',
    rating: 5,
    image: '/placeholder.svg',
  },
  {
    name: 'Emily Carter',
    role: 'Head of Growth',
    company: 'B2B SaaS',
    quote:
      'Their strategy brought real structure to our acquisition efforts. Everything was tightly aligned with our funnel, and results followed quickly.',
    rating: 5,
    image: '/placeholder.svg',
  },
  {
    name: 'Rahul Verma',
    role: 'Marketing Manager',
    company: 'Tech Company',
    quote:
      'Rankings improved steadily, engagement increased, and our brand visibility became far more consistent within a few months of working together.',
    rating: 5,
    image: '/placeholder.svg',
  },
  {
    name: 'Sophia Nguyen',
    role: 'Product Owner',
    company: 'Consumer App',
    quote:
      'The team delivered work that actually supported the product experience. Everything felt intentional, user focused, and aligned with our goals.',
    rating: 5,
    image: '/placeholder.svg',
  },
];
