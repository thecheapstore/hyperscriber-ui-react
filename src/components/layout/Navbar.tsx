import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import ServicesDropdown from './ServicesDropdown';
import { servicesDropdownItems } from './servicesDropdownItems';
import logo from '@/assets/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  const isServicesActive = location.pathname.startsWith('/services');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  };

  const primaryLinks = [{ name: 'Home', path: '/' }, { name: 'Why Us', path: '/why-us' }];
  const secondaryLinks = [
    { name: 'Our Team', path: '/our-team' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed left-0 right-0 z-50 w-full transition-all duration-300 border-b',
        scrolled ? 'bg-canvas/95 backdrop-blur-md border-hairline' : 'bg-canvas border-transparent'
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
          {primaryLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'text-body-sm font-medium transition-colors hover:text-ink relative group',
                location.pathname === link.path
                  ? 'text-ink'
                  : 'text-ink/60'
              )}
              onClick={() => window.scrollTo(0, 0)}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-ink scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>
          ))}

          <ServicesDropdown />

          {secondaryLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'text-body-sm font-medium transition-colors hover:text-ink relative group',
                location.pathname === link.path
                  ? 'text-ink'
                  : 'text-ink/60'
              )}
              onClick={() => window.scrollTo(0, 0)}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-ink scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>
          ))}

          <a
            href="https://calendly.com/calibreassociates/meeting"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-primary text-primary-foreground font-medium text-[20px] tracking-[-0.10px] px-5 py-2.5 rounded-pill hover:opacity-90 hover:scale-[1.02] active:scale-[0.97] transition-all duration-200 id-calendly-booking">
              Book a Free Consultation
            </button>
          </a>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button className="text-ink p-1" aria-label="Toggle Menu">
                <Menu size={24} />
              </button>
            </SheetTrigger>

            <SheetContent side="right" className="w-full p-0 bg-canvas overflow-y-auto">
              <SheetTitle className="sr-only">Site navigation</SheetTitle>
              <div className="pt-14 pb-6 px-6">
                <div className="flex flex-col space-y-2">
                  {primaryLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={cn(
                        'py-3 px-2 text-base font-medium rounded-md transition-colors',
                        location.pathname === link.path
                          ? 'text-ink bg-surface-soft'
                          : 'text-ink/60 hover:bg-surface-soft'
                      )}
                      onClick={closeMobileMenu}
                    >
                      {link.name}
                    </Link>
                  ))}

                  <Accordion type="single" collapsible defaultValue={isServicesActive ? 'services' : undefined}>
                    <AccordionItem value="services" className="border-0">
                      <AccordionTrigger
                        className={cn(
                          'py-3 px-2 text-base font-medium rounded-md hover:no-underline hover:bg-surface-soft [&[data-state=open]]:bg-surface-soft',
                          isServicesActive ? 'text-ink' : 'text-ink/60'
                        )}
                      >
                        Services
                      </AccordionTrigger>
                      <AccordionContent className="pb-1">
                        <div className="flex flex-col space-y-1 pl-2">
                          {servicesDropdownItems.map((item) => (
                            <Link
                              key={item.slug}
                              to={item.path}
                              className={cn(
                                'flex items-center gap-3 py-2.5 px-2 text-sm rounded-md transition-colors',
                                location.pathname === item.path
                                  ? 'text-ink bg-surface-soft'
                                  : 'text-ink/60 hover:bg-surface-soft'
                              )}
                              onClick={closeMobileMenu}
                            >
                              <span className="w-7 h-7 flex items-center justify-center rounded-md bg-surface-soft text-ink flex-shrink-0 [&_svg]:h-3.5 [&_svg]:w-3.5">
                                {item.icon}
                              </span>
                              {item.label}
                            </Link>
                          ))}
                          <Link
                            to="/services"
                            className="flex items-center gap-1.5 py-2.5 px-2 text-sm font-medium text-ink rounded-md hover:bg-surface-soft transition-colors"
                            onClick={closeMobileMenu}
                          >
                            View All Services
                            <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  {secondaryLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={cn(
                        'py-3 px-2 text-base font-medium rounded-md transition-colors',
                        location.pathname === link.path
                          ? 'text-ink bg-surface-soft'
                          : 'text-ink/60 hover:bg-surface-soft'
                      )}
                      onClick={closeMobileMenu}
                    >
                      {link.name}
                    </Link>
                  ))}

                  <div className="pt-4 mt-4 border-t border-hairline">
                    <a
                      href="https://calendly.com/calibreassociates/meeting"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMobileMenu}
                    >
                      <Button className="w-full rounded-pill py-6 text-base id-calendly-booking">
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