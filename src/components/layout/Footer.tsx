import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, MapPin, Phone, Instagram, Linkedin, Twitter, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-slate-50 border-t">
      <div className="max-w-7xl mx-auto pt-20 pb-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Company Info with improved typography and spacing */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="mb-6">
               <div className="w-24 h-24">
              <div className="flex items-center gap-3">
                <img src="https://i.ibb.co/4ZVn3yZs/a8cb39ee-8dbf-47b5-b9fa-010b3a870e14-removebg-preview.png" alt="Logo" className="h-10 w-10 object-contain" />
              </div>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
              We design and build scalable digital systems including high performance websites, automation workflows, and CRM integrations that help businesses operate efficiently and grow sustainably.
            </p>
            <div className="flex items-center space-x-4 mb-6">
              <a 
                href="https://www.linkedin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 bg-blue-50 rounded-full text-blue-600 hover:bg-blue-100 transition-colors duration-200 hover:scale-110 transform"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://x.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 bg-blue-50 rounded-full text-blue-600 hover:bg-blue-100 transition-colors duration-200 hover:scale-110 transform"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links with improved hover states */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-6 text-blue-700">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'Why Us', path: '/why-us' },
                { name: 'Our Team', path: '/our-team' },
                { name: 'Contact', path: '/contact' },
                { name: 'Terms & Conditions', path: '/terms-conditions' },
                { name: 'Privacy Policy', path: '/privacy-policy' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-muted-foreground hover:text-blue-600 transition-colors flex items-center group"
                  >
                    <span className="inline-block w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transform -translate-x-3 group-hover:translate-x-0 transition-all duration-200"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* All Services with improved visual style */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-6 text-blue-700">Our Services</h3>
            <ul className="space-y-4">
              {[
                'Website Design & Development',
                'UI UX & Product Design',
                'Performance & SEO Optimization',
                'Social Media Marketing'
              ].map((service) => (
                <li key={service}>
                  <Link 
                    to="/services" 
                    className="text-muted-foreground hover:text-blue-600 transition-colors flex items-center group"
                  >
                    <span className="inline-block w-1.5 h-1.5 bg-blue-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transform -translate-x-3 group-hover:translate-x-0 transition-all duration-200"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{service}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact with improved visual hierarchy and colors */}
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wider mb-6 text-blue-700">Contact</h3>
            <ul className="space-y-5">
              <li className="flex items-start group">
                <Mail className="h-5 w-5 text-blue-600 mr-3 mt-0.5 group-hover:scale-110 transition-transform" />
                <a 
                  href="mailto:info@hyperscriber.com" 
                  className="text-muted-foreground hover:text-blue-600 transition-colors"
                >
                info@calibreassociates.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Separator with gradient */}
        <div className="mt-14 mb-8">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        </div>

        {/* Copyright with improved styling */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Calibre Associates. All rights reserved.</p> 
          <p className="mt-2 md:mt-0">
            Website by Abhijeet Jain <a href="https://abhijeetjain.netlify.app/" className="hover:text-blue-600 transition-colors inline-flex items-center gap-1" target="_blank" rel="noopener noreferrer">
              (AJ) <ExternalLink className="h-3 w-3" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
