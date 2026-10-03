import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from '@/lib/routerLink';
import { staggerContainer, fadeUp, viewportOnce } from '@/lib/motion';

interface AudienceLink {
  to: string;
  label: string;
}

interface Audience {
  title: string;
  body: string;
  bg: string;
  links: AudienceLink[];
}

const AUDIENCES: Audience[] = [
  {
    title: 'Local and home service businesses',
    body: 'Tree service, landscaping, lawn care and deck building companies around Buffalo, Rochester and Western New York hire us for websites built to rank in local search and bring in quote requests.',
    bg: 'bg-block-mint',
    links: [
      { to: '/industries/tree-service-marketing/', label: 'Tree service marketing' },
      { to: '/industries/landscaping-and-lawn-care-marketing/', label: 'Landscaping and lawn care marketing' },
      { to: '/locations/buffalo-new-york/', label: 'Digital marketing agency in Buffalo, New York' },
    ],
  },
  {
    title: 'Startups and growing brands in India',
    body: 'Founders and young brands across India work with our Lucknow team on branding, websites, social media marketing and AI automation that keeps leads and follow ups organized.',
    bg: 'bg-block-cream',
    links: [
      { to: '/locations/lucknow-india/', label: 'Digital marketing agency in Lucknow, India' },
      { to: '/services/brand-identity-development/', label: 'Brand identity development' },
    ],
  },
  {
    title: 'One team across two countries',
    body: 'Calibre Associates runs from Lucknow, India and Buffalo, New York, and serves small businesses in both the USA and India through the same connected team.',
    bg: 'bg-block-lilac',
    links: [
      { to: '/our-team/', label: 'Meet the Calibre Associates team' },
      { to: '/contact/', label: 'Contact our India and USA offices' },
    ],
  },
];

const WhoWeServe = () => {
  return (
    <section id="who-we-serve" className="py-24 md:py-32 bg-surface-soft">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="max-w-3xl mb-14 md:mb-16"
        >
          <motion.span variants={fadeUp} className="eyebrow inline-block py-1 px-3 mb-5 rounded-pill bg-canvas border border-hairline">
            WHO WE SERVE
          </motion.span>
          <motion.h2 variants={fadeUp} className="mb-4">
            Who We Serve and Where
          </motion.h2>
          <motion.p variants={fadeUp} className="text-ink/70 text-body-lg">
            Our work is concentrated in small and local service businesses, plus startups and growing brands that need
            one team for marketing, websites and automation.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {AUDIENCES.map((audience) => (
            <motion.div
              key={audience.title}
              variants={fadeUp}
              className={`${audience.bg} rounded-block p-8 md:p-10 flex flex-col`}
            >
              <h3 className="text-2xl font-bold text-ink mb-3">{audience.title}</h3>
              <p className="text-ink/70 mb-6">{audience.body}</p>
              <ul className="mt-auto space-y-2">
                {audience.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink underline underline-offset-4 hover:opacity-70"
                    >
                      {link.label}
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeServe;
