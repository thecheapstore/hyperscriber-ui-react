import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { Link } from '@/lib/routerLink';
import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/portfolio/ProjectCard';
import type { Project } from '@/data/portfolio/types';
import type { LandingLink, LandingProofNote, LandingTextItem } from '@/data/landingPages';
import { easeOut, fadeUp, staggerContainer, viewportOnce } from '@/lib/motion';

export interface Crumb {
  name: string;
  path: string;
}

interface LandingHeroProps {
  crumbs: Crumb[];
  eyebrow: string;
  h1: string;
  answer: string;
  /** Anchor id the secondary button scrolls to */
  proofAnchor?: string;
  secondaryLabel?: string;
  aside?: ReactNode;
}

/** Hero with breadcrumb, H1 and a direct "short answer" block that answer engines can lift. */
export const LandingHero = ({
  crumbs,
  eyebrow,
  h1,
  answer,
  proofAnchor = 'proof',
  secondaryLabel = 'See the Case Studies',
  aside,
}: LandingHeroProps) => (
  <section className="relative pt-32 pb-16 md:pb-20 bg-canvas overflow-hidden">
    <div aria-hidden className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-block-lilac opacity-50 blur-[100px]" />
    <div aria-hidden className="absolute -bottom-32 -left-24 w-[380px] h-[380px] rounded-full bg-surface-soft blur-[100px]" />

    <div className="container relative mx-auto px-4 sm:px-6">
      <div className={aside ? 'grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-14 items-start' : 'max-w-4xl'}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-ink/60 flex flex-wrap gap-2">
            {crumbs.map((crumb, i) => {
              const last = i === crumbs.length - 1;
              return (
                <span key={crumb.path} className="flex gap-2">
                  {last ? (
                    <span className="text-ink" aria-current="page">{crumb.name}</span>
                  ) : (
                    <>
                      <Link to={crumb.path} className="hover:text-ink transition-colors">{crumb.name}</Link>
                      <span aria-hidden>/</span>
                    </>
                  )}
                </span>
              );
            })}
          </nav>

          <span className="eyebrow inline-block py-1.5 px-4 mb-6 rounded-pill bg-surface-soft">{eyebrow}</span>

          <h1 className="mb-8 text-[clamp(1.75rem,1.2rem+2.4vw,3.25rem)] leading-[1.12]">{h1}</h1>

          <div className="rounded-block border border-hairline bg-surface-soft p-6 md:p-8 mb-8">
            <p className="font-mono uppercase text-caption tracking-[0.6px] text-ink/50 mb-3">The short answer</p>
            <p className="text-base md:text-lg text-ink/80 leading-relaxed">{answer}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://calendly.com/calibreassociates/meeting" target="_blank" rel="noopener noreferrer">
              <Button className="w-full sm:w-auto rounded-pill px-8 py-6 text-base group id-calendly-booking">
                Book a Free Strategy Call
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <Button variant="outline" className="w-full sm:w-auto rounded-pill px-8 py-6 text-base" asChild>
              <a href={`#${proofAnchor}`}>{secondaryLabel}</a>
            </Button>
          </div>
        </motion.div>

        {aside && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.1 }}
          >
            {aside}
          </motion.div>
        )}
      </div>
    </div>
  </section>
);

interface QuickFactsProps {
  facts: { label: string; value: string }[];
  phone: string;
}

/** Plain facts card shown beside the hero on location pages. */
export const QuickFacts = ({ facts, phone }: QuickFactsProps) => (
  <aside aria-label="Location details" className="rounded-block border border-hairline bg-canvas p-6 md:p-8 shadow-card">
    <h2 className="text-xl font-bold mb-5">At a glance</h2>
    <dl className="space-y-4">
      {facts.map((fact) => (
        <div key={fact.label}>
          <dt className="font-mono uppercase text-[11px] tracking-[0.5px] text-ink/50">{fact.label}</dt>
          <dd className="text-ink mt-1">{fact.value}</dd>
        </div>
      ))}
    </dl>
    <a
      href={`tel:${phone.replace(/\s/g, '')}`}
      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink underline underline-offset-4 hover:no-underline"
    >
      <Phone className="h-4 w-4" />
      Call {phone}
    </a>
  </aside>
);

interface SectionShellProps {
  id?: string;
  eyebrow: string;
  title: string;
  intro?: string;
  tone?: 'canvas' | 'soft';
  children: ReactNode;
}

export const SectionShell = ({ id, eyebrow, title, intro, tone = 'canvas', children }: SectionShellProps) => (
  <section id={id} className={`py-20 md:py-24 ${tone === 'soft' ? 'bg-surface-soft' : 'bg-canvas'}`}>
    <div className="container mx-auto px-4 sm:px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="text-center max-w-3xl mx-auto mb-12 md:mb-14"
      >
        <motion.span
          variants={fadeUp}
          className={`eyebrow inline-block py-1 px-3 mb-5 rounded-pill ${tone === 'soft' ? 'bg-canvas' : 'bg-surface-soft'}`}
        >
          {eyebrow}
        </motion.span>
        <motion.h2 variants={fadeUp} className="mb-4">{title}</motion.h2>
        {intro && <motion.p variants={fadeUp} className="text-ink/70 text-body-lg">{intro}</motion.p>}
      </motion.div>
      {children}
    </div>
  </section>
);

interface TextCardGridProps {
  items: LandingTextItem[];
  tone?: 'canvas' | 'soft';
  numbered?: boolean;
}

export const TextCardGrid = ({ items, tone = 'canvas', numbered = true }: TextCardGridProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={viewportOnce}
    variants={staggerContainer}
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
  >
    {items.map((item, index) => (
      <motion.article
        key={item.title}
        variants={fadeUp}
        className={`flex flex-col h-full rounded-block border border-hairline p-6 md:p-7 ${tone === 'soft' ? 'bg-canvas' : 'bg-surface-soft'}`}
      >
        {numbered && (
          <span className="font-mono text-[11px] uppercase tracking-[0.5px] text-ink/40 mb-3">
            {String(index + 1).padStart(2, '0')}
          </span>
        )}
        <h3 className="text-lg font-bold mb-3">{item.title}</h3>
        <p className="text-sm md:text-base text-ink/70 leading-relaxed flex-grow">{item.text}</p>
        {item.link && (
          <Link
            to={item.link.to}
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink underline underline-offset-4 hover:no-underline"
          >
            {item.link.label}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        )}
      </motion.article>
    ))}
  </motion.div>
);

interface ProjectGridProps {
  projects: Project[];
}

/** Static grid of existing ProjectCards. Every link is rendered into the HTML, nothing is client filtered. */
export const ProjectGrid = ({ projects }: ProjectGridProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.05 }}
    variants={staggerContainer}
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
  >
    {projects.map((project) => (
      <ProjectCard key={`${project.serviceSlug}/${project.slug}`} project={project} />
    ))}
  </motion.div>
);

interface ProofNotesProps {
  notes: LandingProofNote[];
}

export const ProofNotes = ({ notes }: ProofNotesProps) => (
  <ul className="max-w-3xl mx-auto mt-12 space-y-3 text-ink/70 text-base leading-relaxed">
    {notes.map((note) => (
      <li key={note.to} className="flex gap-3">
        <span aria-hidden className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ink/40" />
        <span>
          <Link to={note.to} className="font-semibold text-ink underline underline-offset-4 hover:no-underline">
            {note.anchor}
          </Link>{' '}
          {note.text}
        </span>
      </li>
    ))}
  </ul>
);

interface CaseStudyLinkListProps {
  title: string;
  intro: string;
  projects: Project[];
}

/** Compact list of descriptive text links to deep case studies, a second crawl path alongside the cards. */
export const CaseStudyLinkList = ({ title, intro, projects }: CaseStudyLinkListProps) => (
  <div className="max-w-4xl mx-auto mt-16 rounded-block border border-hairline bg-canvas p-6 md:p-8">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-ink/70 mb-5">{intro}</p>
    <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
      {projects.map((project) => (
        <li key={`${project.serviceSlug}/${project.slug}`}>
          <Link
            to={`/services/${project.serviceSlug}/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink underline underline-offset-4 hover:no-underline"
          >
            {project.companyName} local SEO case study
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

interface ExploreLinksProps {
  title: string;
  items: LandingTextItem[];
}

export const ExploreLinks = ({ title, items }: ExploreLinksProps) => (
  <section className="py-16 md:py-20 bg-surface-soft">
    <div className="container mx-auto px-4 sm:px-6">
      <h2 className="text-center mb-10 text-[clamp(1.5rem,1.1rem+1.4vw,2.25rem)]">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {items.map((item) => (
          <Link
            key={item.title}
            to={item.link?.to ?? '/'}
            className="group flex flex-col h-full rounded-block border border-hairline bg-canvas p-6 transition-shadow duration-300 hover:shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
            <p className="text-sm text-ink/70 mb-5 flex-grow">{item.text}</p>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
              {item.link?.label ?? 'Read more'}
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

interface InlineLinksProps {
  links: LandingLink[];
}

export const InlineLinks = ({ links }: InlineLinksProps) => (
  <div className="flex flex-wrap gap-3 mt-8">
    {links.map((link) => (
      <Link
        key={link.to}
        to={link.to}
        className="inline-flex items-center gap-1.5 rounded-pill border border-hairline bg-canvas px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-surface-soft"
      >
        {link.label}
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    ))}
  </div>
);
