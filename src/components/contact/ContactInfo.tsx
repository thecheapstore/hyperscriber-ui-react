
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Calendar, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ContactInfo = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="space-y-6 h-full flex flex-col"
    >
      <Card className="bg-block-navy border-0 rounded-block overflow-hidden">
        <CardContent className="p-8 text-inverse-ink">
          <h3 className="text-xl font-semibold mb-4 tracking-tight">Book a Consultation</h3>
          <p className="text-inverse-ink/80 mb-6">
            Ready to discuss your business needs? Schedule a free 30-minute consultation with our team.
          </p>
          <a href="https://calendly.com/calibreassociates/meeting" target="_blank" rel="noopener noreferrer">
            <Button
              variant="default"
              className="w-full rounded-pill py-6 bg-canvas hover:bg-surface-soft text-ink transition-colors id-calendly-booking"
            >
              Book a Call <Calendar className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </CardContent>
      </Card>

      <Card className="bg-surface-soft border border-hairline rounded-block">
        <CardContent className="p-6 text-ink">
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle className="h-5 w-5 text-ink flex-shrink-0" />
            <h4 className="font-medium">Fast Turnaround Times</h4>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <CheckCircle className="h-5 w-5 text-ink flex-shrink-0" />
            <h4 className="font-medium">Dedicated Account Manager</h4>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="h-5 w-5 text-ink flex-shrink-0" />
            <h4 className="font-medium">Results-Driven Approach</h4>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-surface-soft border border-hairline rounded-block mt-auto">
        <CardContent className="p-6 text-ink space-y-5">
          <div className="flex items-start gap-3">
            <Phone className="h-5 w-5 text-ink mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-ink">North America Office</p>
              <a href="tel:+17163551231" className="text-ink/70 hover:text-ink">
                +1 (716) 355-1231
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="h-5 w-5 text-ink mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-ink">India Office</p>
              <a href="tel:+919792848868" className="text-ink/70 hover:text-ink">
                +91 97928 48868
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Mail className="h-5 w-5 text-ink mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-ink">Email</p>
              <a href="mailto:info@calibreassociates.com" className="text-ink/70 hover:text-ink">
                info@calibreassociates.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-ink mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-ink">North America Operations</p>
              <p className="text-ink/70">Buffalo, New York, USA</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-ink mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-ink">Head Office</p>
              <p className="text-ink/70">Uttar Pradesh, India</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ContactInfo;
