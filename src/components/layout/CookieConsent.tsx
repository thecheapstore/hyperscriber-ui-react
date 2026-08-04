import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Shield, AlertTriangle } from 'lucide-react';

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true, // Essential cookies cannot be disabled
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    // Check if cookie preferences are already set
    const hasConsent = localStorage.getItem('cookieConsent');
    if (!hasConsent) {
      setShowBanner(true);
    } else {
      try {
        // Load saved preferences
        const savedPreferences = JSON.parse(localStorage.getItem('cookiePreferences') || '{}');
        setPreferences({
          essential: true, // Always true
          analytics: savedPreferences.analytics || false,
          marketing: savedPreferences.marketing || false
        });
      } catch (error) {
        console.error('Error parsing cookie preferences:', error);
      }
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    // Save preferences with an expiration date (13 months maximum as per GDPR)
    const expirationDate = new Date();
    expirationDate.setMonth(expirationDate.getMonth() + 13);
    
    localStorage.setItem('cookieConsent', 'true');
    localStorage.setItem('cookiePreferences', JSON.stringify(prefs));
    localStorage.setItem('cookieExpiresAt', expirationDate.toISOString());
    
    setPreferences(prefs);
    setShowBanner(false);
    setShowPreferences(false);
    
    // Apply cookie preferences
    applyPreferences(prefs);
  };

  const acceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      marketing: true
    };
    savePreferences(allAccepted);
  };

  const acceptEssential = () => {
    const essentialOnly = {
      essential: true,
      analytics: false,
      marketing: false
    };
    savePreferences(essentialOnly);
  };

  const applyPreferences = (prefs: CookiePreferences) => {
    // Implementation would connect to your actual cookie/tracking services
    
    // Example: Analytics cookies
    if (prefs.analytics) {
      // Enable analytics (Google Analytics, etc.)
      console.log('Analytics cookies enabled');
    } else {
      // Disable analytics
      console.log('Analytics cookies disabled');
      
      // Remove any analytics cookies if they exist
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith('_ga') || cookie.startsWith('_gid')) {
          const name = cookie.split('=')[0];
          document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.${window.location.hostname}`;
        }
      }
    }
    
    // Example: Marketing cookies
    if (prefs.marketing) {
      // Enable marketing cookies
      console.log('Marketing cookies enabled');
    } else {
      // Disable marketing cookies
      console.log('Marketing cookies disabled');
      // Similar cookie removal logic would go here
    }
  };

  if (!showBanner) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50 backdrop-blur-[2px]">
      <div className="bg-canvas rounded-block shadow-modal max-w-md w-[92vw] md:w-full px-8 py-8 flex flex-col items-center gap-6 animate-fade-in border border-hairline">
        <div className="bg-surface-soft p-3 rounded-full">
          <Shield className="h-7 w-7 text-ink" />
        </div>

        <h3 className="text-ink mb-2 text-center">
          {showPreferences ? 'Cookie Preferences' : 'Privacy & Cookies'}
        </h3>

        {!showPreferences ? (
          <>
            <p className="text-base md:text-lg text-center text-ink/70">
              We use cookies to enhance your browsing experience, analyze site traffic, and personalize content.
              You can choose which cookies you want to allow.
            </p>

            <div className="border-t border-hairline w-full my-2"></div>

            <div className="flex gap-4 w-full mt-2 justify-center flex-col sm:flex-row space-y-2 sm:space-y-0">
              <Button
                variant="outline"
                size="sm"
                className="w-full sm:w-auto font-medium py-2 px-4 rounded-pill text-base"
                onClick={() => setShowPreferences(true)}
              >
                Preferences
              </Button>

              <Button
                variant="outline"
                size="sm"
                className="w-full sm:w-auto font-medium py-2 px-4 rounded-pill text-base"
                onClick={acceptEssential}
              >
                Essential Only
              </Button>

              <Button
                size="sm"
                className="w-full sm:w-auto font-semibold px-4 py-3 rounded-pill text-md"
                onClick={acceptAll}
              >
                Accept All
              </Button>
            </div>

            <p className="text-xs text-center text-ink/60 mt-2">
              By clicking "Accept All", you agree to the storing of cookies on your device to enhance
              site navigation, analyze site usage, and assist in our marketing efforts.
            </p>
          </>
        ) : (
          <>
            <div className="w-full space-y-4">
              <div className="flex items-center justify-between border border-hairline p-4 rounded-md bg-surface-soft">
                <div>
                  <h4 className="font-semibold">Essential Cookies</h4>
                  <p className="text-sm text-ink/60">Required for the website to function properly.</p>
                </div>
                <div className="bg-canvas border border-hairline text-ink text-xs font-semibold px-2.5 py-0.5 rounded">
                  Required
                </div>
              </div>

              <div className="flex items-center justify-between border border-hairline p-4 rounded-md">
                <div>
                  <h4 className="font-semibold">Analytics Cookies</h4>
                  <p className="text-sm text-ink/60">Help us improve our website by collecting anonymous information.</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={e => setPreferences({...preferences, analytics: e.target.checked})}
                  className="h-5 w-5 rounded border-hairline text-ink focus:ring-ring"
                />
              </div>

              <div className="flex items-center justify-between border border-hairline p-4 rounded-md">
                <div>
                  <h4 className="font-semibold">Marketing Cookies</h4>
                  <p className="text-sm text-ink/60">Used to track visitors across websites to display relevant advertisements.</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={e => setPreferences({...preferences, marketing: e.target.checked})}
                  className="h-5 w-5 rounded border-hairline text-ink focus:ring-ring"
                />
              </div>
            </div>

            <div className="border-t border-hairline w-full my-2"></div>

            <div className="flex gap-4 w-full justify-end">
              <Button
                variant="outline"
                onClick={() => setShowPreferences(false)}
                className="rounded-pill"
              >
                Back
              </Button>
              <Button
                onClick={() => savePreferences(preferences)}
                className="rounded-pill"
              >
                Save Preferences
              </Button>
            </div>
          </>
        )}

        <div className="flex items-center text-ink/60 text-xs gap-1 mt-1">
          <AlertTriangle className="h-3 w-3" />
          <span>You must accept or decline before continuing.</span>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
