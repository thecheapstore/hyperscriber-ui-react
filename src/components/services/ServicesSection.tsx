import React from 'react';
import { ArrowRight, MessageSquare, FileText, Laptop, Mail, Megaphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'LinkedIn Ghostwriting for Founders',
    description: 'Position yourself as a trusted authority and generate inbound leads with consistent, high-quality LinkedIn content.',
    icon: <MessageSquare className="h-8 w-8" />,
    features: ['Founder voice alignment', 'Audience growth', 'Engagement strategy', 'Performance tracking'],
    color: 'from-blue-500 to-indigo-600',
    bgLight: 'bg-blue-50'
  },
  {
    title: 'SEO Content & Blog Writing',
    description: 'Drive qualified organic traffic with search-optimized content built to rank and convert.',
    icon: <FileText className="h-8 w-8" />,
    features: ['Keyword research', 'SEO-ready articles', 'Internal linking', 'Topical authority'],
    color: 'from-purple-500 to-indigo-600',
    bgLight: 'bg-purple-50'
  },
  {
    title: 'Website & Conversion Copywriting',
    description: 'Clear, persuasive copy that communicates value and turns visitors into customers.',
    icon: <Laptop className="h-8 w-8" />,
    features: ['Landing pages', 'Website copy', 'Value proposition clarity', 'Conversion-focused messaging'],
    color: 'from-teal-500 to-blue-500',
    bgLight: 'bg-teal-50'
  },
  {
    title: 'Email Marketing & Automation',
    description: 'Nurture leads and retain customers with strategic email campaigns and automated workflows.',
    icon: <Mail className="h-8 w-8" />,
    features: ['Campaign strategy', 'Automation setup', 'Lead nurturing', 'Analytics & optimization'],
    color: 'from-blue-500 to-sky-400',
    bgLight: 'bg-sky-50'
  },
  {
    title: 'Social Media Marketing',
    description: 'Build brand visibility and engagement across platforms with consistent, goal-driven content.',
    icon: <Megaphone className="h-8 w-8" />,
    features: ['Content planning', 'Platform optimization', 'Audience engagement', 'Growth strategy'],
    color: 'from-pink-500 to-rose-500',
    bgLight: 'bg-rose-50'
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 mb-5 text-xs font-semibold tracking-wider rounded-full bg-blue-50 text-blue-600">
            WHAT WE DO
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Growth-Focused Digital Services
          </h2>
          <p className="text-muted-foreground text-lg">
            Strategy-led content, marketing, and automation services designed to attract, convert, and retain customers.
          </p>
        </div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="h-full border-0 bg-white shadow-md rounded-xl">
              <CardHeader>
                <div className={`w-14 h-14 flex items-center justify-center rounded-lg ${service.bgLight}`}>
                  {service.icon}
                </div>
                <CardTitle className="text-xl mt-4">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-sm text-muted-foreground">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link to={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;