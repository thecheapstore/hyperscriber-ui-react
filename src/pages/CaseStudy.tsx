import React, { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Target, Search, Gauge, TrendingUp, Sparkles } from 'lucide-react';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { services } from '@/components/services/data/services';
import { findProject, allPortfolioProjects } from '@/data/portfolio';
import { pageTransition, fadeUp, staggerContainer, viewportOnce } from '@/lib/motion';

import CaseStudyHero from '@/components/portfolio/CaseStudyHero';
import AboutClientSection from '@/components/portfolio/AboutClientSection';
import ChallengeSection from '@/components/portfolio/ChallengeSection';
import StrategySection from '@/components/portfolio/StrategySection';
import SolutionSection from '@/components/portfolio/SolutionSection';
import BulletListCard from '@/components/portfolio/BulletListCard';
import FeatureGrid from '@/components/portfolio/FeatureGrid';
import MediaGallery from '@/components/portfolio/MediaGallery';
import BuiltBySection from '@/components/portfolio/BuiltBySection';
import RelatedProjects from '@/components/portfolio/RelatedProjects';
import SearchPerformanceDashboard from '@/components/portfolio/SearchPerformanceDashboard';
import GbpMetricsPanel from '@/components/portfolio/GbpMetricsPanel';
import CaseStudyTestimonial from '@/components/portfolio/CaseStudyTestimonial';
import ProcessTimeline from '@/components/services/sections/ProcessTimeline';
import StatsSection from '@/components/services/sections/StatsSection';
import FinalCTA from '@/components/services/sections/FinalCTA';

const SITE_URL = 'https://calibreassociates.com';
const OG_IMAGE = 'https://calibreassociates.com/favicons/android-chrome-512x512.png';

const CaseStudy = () => {
  const { serviceSlug, projectSlug } = useParams<{ serviceSlug: string; projectSlug: string }>();
  const project = serviceSlug && projectSlug ? findProject(serviceSlug, projectSlug) : undefined;
  const service = services.find((s) => s.slug === serviceSlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectSlug]);

  if (!project || !service) {
    return <Navigate to={service ? `/services/${service.slug}` : '/services'} replace />;
  }

  const pageUrl = `${SITE_URL}/services/${project.serviceSlug}/projects/${project.slug}`;
  const pageTitle = `${project.projectName} Case Study | Calibre Associates`;
  const rawShareImage = project.socialImage || project.thumbnail || OG_IMAGE;
  // Vite-resolved asset imports (thumbnail/socialImage) are root-relative paths, but
  // OG/Twitter/JSON-LD image URLs must be absolute for external crawlers to resolve them.
  const shareImage = rawShareImage.startsWith('/') ? `${SITE_URL}${rawShareImage}` : rawShareImage;
  const hasBrief = Boolean(project.goals?.length || project.challenge || project.strategy || project.solution);
  const hasTechnicalFoundation = Boolean(project.seoFoundation?.length || project.performanceOptimizations?.length);
  const hasImpact = Boolean(project.businessImpact?.length || project.results.length > 0);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
      { '@type': 'ListItem', position: 3, name: service.title, item: `${SITE_URL}/services/${service.slug}` },
      { '@type': 'ListItem', position: 4, name: project.projectName, item: pageUrl },
    ],
  };

  const caseStudySchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: pageTitle,
    description: project.shortDescription,
    url: pageUrl,
    image: shareImage,
    about: service.title,
    author: { '@type': 'Organization', name: 'Calibre Associates', url: SITE_URL },
  };

  const rawVideoThumb = project.video?.poster;
  const videoThumb = rawVideoThumb
    ? (rawVideoThumb.startsWith('/') ? `${SITE_URL}${rawVideoThumb}` : rawVideoThumb)
    : shareImage;
  const rawVideoSrc = project.video?.src ?? '';
  const videoContentUrl = rawVideoSrc.startsWith('/') ? `${SITE_URL}${rawVideoSrc}` : rawVideoSrc;
  const videoSchema = project.video
    ? {
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        name: project.video.label || pageTitle,
        description: project.shortDescription,
        thumbnailUrl: videoThumb,
        contentUrl: videoContentUrl,
        embedUrl: pageUrl,
      }
    : null;

  return (
    <motion.div {...pageTransition} className="min-h-screen">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{pageTitle}</title>
        <meta name="description" content={project.shortDescription} />
        <link rel="canonical" href={pageUrl} />
        <link rel="icon" href={OG_IMAGE} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={project.shortDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={shareImage} />
        <meta property="og:site_name" content="Calibre Associates" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={project.shortDescription} />
        <meta name="twitter:image" content={shareImage} />

        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(caseStudySchema)}</script>
        {videoSchema && <script type="application/ld+json">{JSON.stringify(videoSchema)}</script>}
      </Helmet>

      <Navbar />

      <main className="mt-16">
        <CaseStudyHero project={project} serviceTitle={service.title} />

        {/* Overview + About the client */}
        {(project.overview || project.about) && (
          <section className="py-16 md:py-20 bg-surface-soft">
            <div className="container mx-auto px-4 sm:px-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={staggerContainer}
                className="max-w-5xl mx-auto grid md:grid-cols-5 gap-10 md:gap-12"
              >
                {project.overview && (
                  <motion.div variants={fadeUp} className="md:col-span-3">
                    <span className="font-mono text-caption uppercase tracking-[0.6px] text-ink/40 block mb-3">Project Overview</span>
                    <p className="text-ink/80 leading-relaxed">{project.overview}</p>
                  </motion.div>
                )}
                <div className="md:col-span-2">
                  <AboutClientSection about={project.about} />
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* The brief: goals, challenge, strategy, solution */}
        {hasBrief && (
          <section className="py-20 md:py-24 bg-canvas">
            <div className="container mx-auto px-4 sm:px-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={staggerContainer}
                className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6"
              >
                {project.goals && project.goals.length > 0 && (
                  <BulletListCard icon={<Target className="h-5 w-5 text-ink" />} eyebrow="Client Goals" items={project.goals} variant="light" />
                )}
                {project.challenge && <ChallengeSection challenge={project.challenge} />}
                {project.strategy && <StrategySection strategy={project.strategy} />}
                {project.solution && <SolutionSection solution={project.solution} />}
              </motion.div>
            </div>
          </section>
        )}

        {project.gallery && project.gallery.length > 0 && (
          <MediaGallery
            gallery={project.gallery}
            video={project.video}
            description={`A look at the campaign visuals and content produced for ${project.projectName}.`}
          />
        )}

        {project.process.length > 0 && (
          <ProcessTimeline
            process={project.process}
            eyebrow="HOW WE GOT THERE"
            title="Design Process"
            description={`The path we took to bring ${project.projectName} to life.`}
          />
        )}

        {project.designHighlights && project.designHighlights.length > 0 && (
          <section className="py-20 md:py-24 bg-block-lilac">
            <div className="container mx-auto px-4 sm:px-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={staggerContainer}
                className="max-w-2xl mx-auto"
              >
                <BulletListCard
                  icon={<Sparkles className="h-5 w-5 text-ink" />}
                  eyebrow="CRAFT & DETAIL"
                  title="Design Highlights"
                  items={project.designHighlights}
                  variant="light"
                />
              </motion.div>
            </div>
          </section>
        )}

        {project.features.length > 0 && (
          <FeatureGrid
            features={project.features}
            title={project.featuresSectionTitle ?? 'Website Features'}
            eyebrow={project.featuresSectionEyebrow ?? 'WHAT SHIPPED'}
          />
        )}

        {/* Technical foundation: SEO + performance */}
        {hasTechnicalFoundation && (
          <section className="py-20 md:py-24 bg-surface-soft">
            <div className="container mx-auto px-4 sm:px-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={staggerContainer}
                className="text-center max-w-2xl mx-auto mb-14"
              >
                <motion.span variants={fadeUp} className="eyebrow inline-block py-1 px-3 mb-5 rounded-pill bg-canvas">
                  BUILT TO LAST
                </motion.span>
                <motion.h2 variants={fadeUp}>Technical Foundation</motion.h2>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={staggerContainer}
                className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6"
              >
                {project.seoFoundation && project.seoFoundation.length > 0 && (
                  <BulletListCard icon={<Search className="h-5 w-5 text-ink" />} eyebrow="SEO Foundation" items={project.seoFoundation} variant="light" />
                )}
                {project.performanceOptimizations && project.performanceOptimizations.length > 0 && (
                  <BulletListCard icon={<Gauge className="h-5 w-5 text-ink" />} eyebrow="Performance & Mobile" items={project.performanceOptimizations} variant="light" />
                )}
              </motion.div>
            </div>
          </section>
        )}

        {/* Business impact + quantified results */}
        {hasImpact && (
          <>
            {project.businessImpact && project.businessImpact.length > 0 && (
              <section className="py-20 md:py-24 bg-canvas">
                <div className="container mx-auto px-4 sm:px-6">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                    variants={staggerContainer}
                    className="max-w-3xl mx-auto"
                  >
                    <BulletListCard
                      icon={<TrendingUp className="h-5 w-5 text-ink" />}
                      eyebrow="THE OUTCOME"
                      title="Business Impact"
                      description={project.businessImpactSummary}
                      items={project.businessImpact}
                      variant="accent"
                    />
                  </motion.div>
                </div>
              </section>
            )}
            {project.results.length > 0 && <StatsSection stats={project.results} />}
          </>
        )}

        {project.showSeoReporting && (
          <section className="py-20 md:py-24 bg-surface-soft">
            <div className="container mx-auto px-4 sm:px-6 space-y-8">
              <SearchPerformanceDashboard seed={`${project.serviceSlug}-${project.slug}`} />
              <GbpMetricsPanel seed={`${project.serviceSlug}-${project.slug}`} />
            </div>
          </section>
        )}

        {project.testimonial && (
          <section className="py-20 md:py-24 bg-canvas">
            <div className="container mx-auto px-4 sm:px-6">
              <CaseStudyTestimonial testimonial={project.testimonial} />
            </div>
          </section>
        )}

        <BuiltBySection services={project.highlights} />

        <RelatedProjects currentProject={project} allProjects={allPortfolioProjects} />

        <FinalCTA
          headline={project.finalCtaHeadline ?? 'Ready to Build Your Next Digital Success Story?'}
          description={
            project.finalCtaDescription ??
            "Whether you're launching a new business, scaling an existing brand, or transforming your online presence, let's build something exceptional together."
          }
        />
      </main>

      <Footer />
    </motion.div>
  );
};

export default CaseStudy;
