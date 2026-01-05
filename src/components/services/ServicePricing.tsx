
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for early-stage startups looking to establish their content foundation.',
    monthlyPrice: '$1,500',
    yearlyPrice: '$1,200',
    features: [
      '2 LinkedIn posts per week',
      '2 Blog articles per month',
      'Basic SEO optimization',
      'Monthly performance report',
      'Email support'
    ],
    highlighted: false
  },
  {
    name: 'Growth',
    description: 'Ideal for scaling startups ready to accelerate their content marketing efforts.',
    monthlyPrice: '$3,500',
    yearlyPrice: '$2,800',
    features: [
      'Daily LinkedIn posts',
      '4 Blog articles per month',
      'Advanced SEO optimization',
      'Biweekly strategy calls',
      '1 Case study per month',
      'Priority support'
    ],
    highlighted: true
  },
  {
    name: 'Enterprise',
    description: 'Comprehensive solution for established SaaS companies with advanced content needs.',
    monthlyPrice: '$6,000',
    yearlyPrice: '$4,800',
    features: [
      'Multichannel content strategy',
      '8 Blog articles per month',
      'Premium SEO optimization',
      'Weekly strategy calls',
      '2 Case studies per month',
      'Dedicated content manager'
    ],
    highlighted: false
  }
];

const ServicePricing = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-6">Simple, Transparent Pricing</h2>
        <p className="text-muted-foreground mb-10">
          Flexible engagement models designed around your business needs, not rigid packages.
        </p>

        <div className="bg-slate-50 p-8 rounded-xl">
          <p className="text-lg">
            Pricing depends on scope, timelines, and service mix. Book a free consultation to receive a tailored quote.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicePricing;