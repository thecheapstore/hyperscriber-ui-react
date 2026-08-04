import { Trees, Hammer, TreeDeciduous, HardHat, HeartPulse, Building2, Store, Briefcase, ShoppingCart } from 'lucide-react';
import React from 'react';

export interface Industry {
  label: string;
  icon: React.ReactNode;
}

export const industries: Industry[] = [
  { label: 'Landscaping', icon: React.createElement(Trees, { className: 'h-6 w-6' }) },
  { label: 'Roofing', icon: React.createElement(Hammer, { className: 'h-6 w-6' }) },
  { label: 'Tree Services', icon: React.createElement(TreeDeciduous, { className: 'h-6 w-6' }) },
  { label: 'Construction', icon: React.createElement(HardHat, { className: 'h-6 w-6' }) },
  { label: 'Healthcare', icon: React.createElement(HeartPulse, { className: 'h-6 w-6' }) },
  { label: 'Real Estate', icon: React.createElement(Building2, { className: 'h-6 w-6' }) },
  { label: 'Local Businesses', icon: React.createElement(Store, { className: 'h-6 w-6' }) },
  { label: 'Professional Services', icon: React.createElement(Briefcase, { className: 'h-6 w-6' }) },
  { label: 'E-commerce', icon: React.createElement(ShoppingCart, { className: 'h-6 w-6' }) },
];
