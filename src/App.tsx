import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import TopBanner from "@/components/layout/TopBanner";
import CookieConsent from "@/components/layout/CookieConsent";
import ChatBot from "@/components/layout/ChatBot";

// Pages
import Index from "@/pages/Index";
import Services from "@/pages/Services";
import OurTeam from "@/pages/OurTeam";
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
      queryFn: async ({ queryKey, signal }) => {
        const response = await fetch(
          Array.isArray(queryKey) ? queryKey[0] : queryKey.toString(),
          {
            signal,
            credentials: "same-origin",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Network error: ${response.status}`);
        }

        return response.json();
      },
    },
    mutations: {
      retry: 0,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner position="top-center" />
        <BrowserRouter>
          <SecurityHeaders />
          <div className="flex flex-col min-h-screen">
            <TopBanner />

            <main className="flex-1">
              <Routes>
                {/* ✅ Home */}
                <Route path="/" element={<Index />} />

                {/* ✅ Core pages */}
                <Route path="/services" element={<Services />} />
                <Route path="/our-team" element={<OurTeam />} />
                <Route path="/why-us" element={<WhyUs />} />
                <Route path="/contact" element={<Contact />} />

                {/* ✅ Legal */}
                <Route path="/terms-conditions" element={<TermsConditions />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />

                {/* 🔁 Backward compatibility */}
                <Route path="/pricing" element={<Navigate to="/our-team" replace />} />

                {/* ❌ 404 */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>

            <CookieConsent />
            <ChatBot />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;