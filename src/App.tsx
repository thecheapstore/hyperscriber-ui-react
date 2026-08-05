import React from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import TopBanner from "@/components/layout/TopBanner";
import CookieConsent from "@/components/layout/CookieConsent";
import DisableInspect from "@/components/layout/DisableInspect";

// Pages
import Index from "@/pages/Index";
import Services from "@/pages/Services";
import ServiceDetail from "@/pages/ServiceDetail";
import WebsiteDevelopment from "@/pages/WebsiteDevelopment";
import SocialMediaMarketing from "@/pages/SocialMediaMarketing";
import Seo from "@/pages/Seo";
import VideoEditing from "@/pages/VideoEditing";
import LeadGeneration from "@/pages/LeadGeneration";
import AIAutomation from "@/pages/AIAutomation";
import CaseStudy from "@/pages/CaseStudy";
import OurTeam from "@/pages/OurTeam";
import TeamProfile from "@/pages/TeamProfile";
import WhyUs from "@/pages/WhyUs";
import Contact from "@/pages/Contact";
import TermsConditions from "@/pages/TermsConditions";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import NotFound from "@/pages/NotFound";

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
        <Route path="/services/:serviceSlug/projects/:projectSlug" element={<CaseStudy />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/our-team/:slug" element={<TeamProfile />} />
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
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner position="top-center" />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <DisableInspect />
            <TopBanner />

            <main className="flex-1">
              <AnimatedRoutes />
            </main>

            <CookieConsent />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;