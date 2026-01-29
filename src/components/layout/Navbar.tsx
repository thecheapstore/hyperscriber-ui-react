import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import logo from '@/assets/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Why Us', path: '/why-us' },
    { name: 'Services', path: '/services' },
    { name: 'Our Team', path: '/our-team' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed left-0 right-0 z-50 w-full transition-all duration-300 border-b border-gray-200',
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
      style={{ top: 'var(--banner-height, 0px)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center z-30"
          onClick={() => window.scrollTo(0, 0)}
        >
          <img
            src={logo}
            alt="Calibre Associates Logo"
            className="w-28 h-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'text-base font-medium transition-colors hover:text-primary relative group',
                location.pathname === link.path
                  ? 'text-primary'
                  : 'text-muted-foreground'
              )}
              onClick={() => window.scrollTo(0, 0)}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-blue-700 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>
          ))}

          <a
            href="https://calendly.com/calibreassociates/meeting"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold px-5 py-3 rounded-full hover:opacity-90 hover:scale-105 transition-all duration-200 id-calendly-booking">
              Book a Free Consultation
            </button>
          </a>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="text-primary p-1" aria-label="Toggle Menu">
                <Menu size={24} />
              </button>
            </SheetTrigger>

            <SheetContent side="right" className="w-full p-0">
              <div className="pt-14 pb-6 px-6">
                <div className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={cn(
                        'py-3 px-2 text-base font-medium rounded-md transition-colors',
                        location.pathname === link.path
                          ? 'text-blue-700 bg-blue-50'
                          : 'text-muted-foreground hover:bg-blue-50/50'
                      )}
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      {link.name}
                    </Link>
                  ))}

                  <div className="pt-4 mt-4 border-t">
                    <a
                      href="https://calendly.com/calibreassociates/meeting"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full rounded-full py-6 text-base bg-gradient-to-r from-blue-600 to-blue-700 id-calendly-booking">
                        Book a Free Consultation
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;