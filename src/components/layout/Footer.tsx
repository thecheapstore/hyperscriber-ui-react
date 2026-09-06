import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Linkedin, Instagram, ExternalLink } from 'lucide-react';
import logo from '@/assets/logo.png';
import TrustBox from './TrustBox';

const Footer = () => {
  return (
    <footer className="bg-canvas border-t border-hairline">
      <div className="max-w-7xl mx-auto pt-20 pb-12 px-6">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">

          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="mb-4 flex items-start">
              <img
                src={logo}
                alt="Calibre Associates Logo"
                className="w-24 h-auto object-contain"
                loading="lazy"
              />
            </div>

            <p className="text-ink/70 font-light mb-6 max-w-sm">
              Calibre Associates is a digital marketing agency that designs and builds scalable digital systems, including high performance websites, AI automation workflows, and CRM integrations, that help businesses in India and the United States operate efficiently and grow sustainably.
            </p>

            <div className="flex items-center space-x-4">
              <a
                href="https://www.linkedin.com/company/112087503/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-surface-soft rounded-full text-ink hover:bg-hairline-soft transition-all duration-200 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="https://www.instagram.com/calibreassociates/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-surface-soft rounded-full text-ink hover:bg-hairline-soft transition-all duration-200 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-mono uppercase text-caption tracking-[0.60px] mb-6 text-ink">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'Why Us', path: '/why-us' },
                { name: 'Our Team', path: '/our-team' },
                { name: 'FAQ', path: '/faq' },
                { name: 'Contact', path: '/contact' },
                { name: 'Terms & Conditions', path: '/terms-conditions' },
                { name: 'Privacy Policy', path: '/privacy-policy' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-ink/70 hover:text-ink transition-colors flex items-center group"
                  >
                    <span className="inline-block w-1.5 h-1.5 bg-ink rounded-full mr-3 opacity-0 group-hover:opacity-100 transform -translate-x-3 group-hover:translate-x-0 transition-all duration-200"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-mono uppercase text-caption tracking-[0.60px] mb-6 text-ink">
              Our Services
            </h3>
            <ul className="space-y-4">
              {[
                { name: 'Website Development', path: '/services/website-development' },
                { name: 'SEO', path: '/services/seo' },
                { name: 'Social Media Marketing', path: '/services/social-media-marketing' },
                { name: 'Video Editing', path: '/services/video-editing' },
                { name: 'Lead Generation & Paid Advertising', path: '/services/lead-generation-paid-advertising' },
                { name: 'AI Automation & Solutions', path: '/services/ai-automation-solutions' },
                { name: 'Brand Identity Development', path: '/services/brand-identity-development' },
                { name: 'Application & Software Development', path: '/services/application-software-development' },
              ].map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-ink/70 hover:text-ink transition-colors flex items-center group"
                  >
                    <span className="inline-block w-1.5 h-1.5 bg-ink rounded-full mr-3 opacity-0 group-hover:opacity-100 transform -translate-x-3 group-hover:translate-x-0 transition-all duration-200"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {service.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-mono uppercase text-caption tracking-[0.60px] mb-6 text-ink">
              Contact
            </h3>

            <ul className="space-y-5">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-ink mr-3 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-ink">North America Office</p>
                  <a href="tel:+17163551231" className="text-ink/70 hover:text-ink">
                    +1 (716) 355-1231
                  </a>
                </div>
              </li>

              <li className="flex items-start">
                <Phone className="h-5 w-5 text-ink mr-3 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-ink">India Office</p>
                  <a href="tel:+919792848868" className="text-ink/70 hover:text-ink">
                    +91 97928 48868
                  </a>
                </div>
              </li>

              <li className="flex items-start">
                <Mail className="h-5 w-5 text-ink mr-3 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-ink">Email</p>
                  <a
                    href="mailto:info@calibreassociates.com"
                    className="text-ink/70 hover:text-ink"
                  >
                    info@calibreassociates.com
                  </a>
                </div>
              </li>

              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-ink mr-3 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-ink">North America Operations</p>
                  <p className="text-ink/70">Buffalo, New York, USA</p>
                </div>
              </li>

              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-ink mr-3 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-ink">Head Office</p>
                  <p className="text-ink/70">Uttar Pradesh, India</p>
                </div>
              </li>
            </ul>
          </div>

        </div> {/* ✅ GRID CLOSED HERE */}

        {/* Separator */}
        <div className="mt-14 mb-8">
          <div className="h-px w-full bg-hairline" />
        </div>

        <div className="mb-8">
          <TrustBox />
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-ink/70">
          <p>© {new Date().getFullYear()} Calibre Associates. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Designed with ❤️ by{' '}
            <a
              href="https://calibreassociates.com/our-team/abhijeet-jain"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink inline-flex items-center gap-1"
            >
              AJ <ExternalLink className="h-3 w-3" />
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;