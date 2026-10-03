import React, { Suspense, lazy, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import TopBanner from "@/components/layout/TopBanner";
import CookieConsent from "@/components/layout/CookieConsent";
import DisableInspect from "@/components/layout/DisableInspect";
import OrganizationSchema from "@/components/layout/OrganizationSchema";

// Pages. The home page ships in the main bundle (it is the landing page for most visits);
// every other route is split into its own chunk and loaded on demand.
import Index from "@/pages/Index";
const Services = lazy(() => import("@/pages/Services"));
const ServiceDetail = lazy(() => import("@/pages/ServiceDetail"));
const WebsiteDevelopment = lazy(() => import("@/pages/WebsiteDevelopment"));
const SocialMediaMarketing = lazy(() => import("@/pages/SocialMediaMarketing"));
const Seo = lazy(() => import("@/pages/Seo"));
const VideoEditing = lazy(() => import("@/pages/VideoEditing"));
const LeadGeneration = lazy(() => import("@/pages/LeadGeneration"));
const AIAutomation = lazy(() => import("@/pages/AIAutomation"));
const BrandIdentityDevelopment = lazy(() => import("@/pages/BrandIdentityDevelopment"));
const CaseStudy = lazy(() => import("@/pages/CaseStudy"));
const Portfolio = lazy(() => import("@/pages/Portfolio"));
const IndustryPage = lazy(() => import("@/pages/IndustryPage"));
const LocationPage = lazy(() => import("@/pages/LocationPage"));
const OurTeam = lazy(() => import("@/pages/OurTeam"));
const TeamProfile = lazy(() => import("@/pages/TeamProfile"));
const Faq = lazy(() => import("@/pages/Faq"));
const WhyUs = lazy(() => import("@/pages/WhyUs"));
const Contact = lazy(() => import("@/pages/Contact"));
const TermsConditions = lazy(() => import("@/pages/TermsConditions"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 60000,
      gcTime: 300000,
    },
    mutations: {
      retry: 0,
    },
  },
});

const AnimatedRoutes = () => {
  const location = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const fbq = (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq;
    fbq?.("track", "PageView");
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/website-development" element={<WebsiteDevelopment />} />
        <Route path="/services/social-media-marketing" element={<SocialMediaMarketing />} />
        <Route path="/services/seo" element={<Seo />} />
        <Route path="/services/video-editing" element={<VideoEditing />} />
        <Route path="/services/lead-generation-paid-advertising" element={<LeadGeneration />} />
        <Route path="/services/ai-automation-solutions" element={<AIAutomation />} />
        <Route path="/services/brand-identity-development" element={<BrandIdentityDevelopment />} />
        <Route path="/services/:serviceSlug/projects/:projectSlug" element={<CaseStudy />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/industries/:industrySlug" element={<IndustryPage />} />
        <Route path="/locations/:locationSlug" element={<LocationPage />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/our-team/:slug" element={<TeamProfile />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/pricing" element={<Navigate to="/our-team" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner position="top-center" />
          <BrowserRouter>
            <div className="flex flex-col min-h-screen">
              <DisableInspect />
              <OrganizationSchema />
              <TopBanner />

              <main className="flex-1">
                <Suspense fallback={<div className="min-h-screen" aria-hidden="true" />}>
                  <AnimatedRoutes />
                </Suspense>
              </main>

              <CookieConsent />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;