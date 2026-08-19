import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Shield, X } from 'lucide-react';

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
    <div className="fixed inset-x-4 bottom-4 z-[1000] sm:inset-x-auto sm:left-4 sm:max-w-sm">
      <div className="bg-canvas rounded-block shadow-modal p-5 flex flex-col gap-4 animate-fade-in border border-hairline relative">
        <button
          type="button"
          aria-label="Dismiss, essential cookies only"
          onClick={acceptEssential}
          className="absolute top-3 right-3 text-ink/40 hover:text-ink transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-3 pr-6">
          <div className="bg-surface-soft p-2 rounded-full flex-shrink-0">
            <Shield className="h-4 w-4 text-ink" />
          </div>
          <h3 className="text-sm font-semibold text-ink">
            {showPreferences ? 'Cookie Preferences' : 'Privacy & Cookies'}
          </h3>
        </div>

        {!showPreferences ? (
          <>
            <p className="text-sm text-ink/70">
              We use cookies to enhance your browsing experience and analyze site traffic.
              You can choose which cookies to allow.
            </p>

            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                size="sm"
                className="font-medium rounded-pill text-xs"
                onClick={() => setShowPreferences(true)}
              >
                Preferences
              </Button>

              <Button
                variant="outline"
                size="sm"
                className="font-medium rounded-pill text-xs"
                onClick={acceptEssential}
              >
                Essential Only
              </Button>

              <Button
                size="sm"
                className="font-semibold rounded-pill text-xs"
                onClick={acceptAll}
              >
                Accept All
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className="w-full space-y-3">
              <div className="flex items-center justify-between border border-hairline p-3 rounded-md bg-surface-soft">
                <div>
                  <h4 className="text-sm font-semibold">Essential Cookies</h4>
                  <p className="text-xs text-ink/60">Required for the website to function.</p>
                </div>
                <div className="bg-canvas border border-hairline text-ink text-[10px] font-semibold px-2 py-0.5 rounded flex-shrink-0">
                  Required
                </div>
              </div>

              <div className="flex items-center justify-between border border-hairline p-3 rounded-md">
                <div>
                  <h4 className="text-sm font-semibold">Analytics Cookies</h4>
                  <p className="text-xs text-ink/60">Helps us improve the site with anonymous data.</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={e => setPreferences({...preferences, analytics: e.target.checked})}
                  className="h-5 w-5 rounded border-hairline text-ink focus:ring-ring flex-shrink-0"
                />
              </div>

              <div className="flex items-center justify-between border border-hairline p-3 rounded-md">
                <div>
                  <h4 className="text-sm font-semibold">Marketing Cookies</h4>
                  <p className="text-xs text-ink/60">Used to show relevant advertisements.</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={e => setPreferences({...preferences, marketing: e.target.checked})}
                  className="h-5 w-5 rounded border-hairline text-ink focus:ring-ring flex-shrink-0"
                />
              </div>
            </div>

            <div className="flex gap-2 w-full justify-end">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowPreferences(false)}
                className="rounded-pill text-xs"
              >
                Back
              </Button>
              <Button
                size="sm"
                onClick={() => savePreferences(preferences)}
                className="rounded-pill text-xs"
              >
                Save Preferences
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CookieConsent;
