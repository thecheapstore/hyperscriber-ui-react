"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const ContactForm = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="bg-canvas border border-hairline flex flex-col px-8 py-8 sm:p-8 md:p-10 rounded-block"
    >
      {/* Heading */}
      <h2 className="text-2xl font-semibold mb-6 tracking-tight">
        Get in Touch
      </h2>

      <p className="text-muted-foreground mb-8 leading-relaxed">
        Have a project in mind or looking to streamline your marketing, development,
        or automation systems? Reach out to us directly and our team will get back to you.
      </p>

      {/* Contact Details */}
      <div className="space-y-6">
        {/* Phone 1 */}
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-surface-soft flex items-center justify-center">
            <Phone className="h-5 w-5 text-ink" />
          </div>
          <div>
            <p className="font-medium">North America Office</p>
            <a href="tel:+17163551231" className="text-muted-foreground hover:text-ink">
              +1 (716) 355-1231
            </a>
          </div>
        </div>

        {/* Phone 2 */}
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-surface-soft flex items-center justify-center">
            <Phone className="h-5 w-5 text-ink" />
          </div>
          <div>
            <p className="font-medium">India Office</p>
            <a href="tel:+919792848868" className="text-muted-foreground hover:text-ink">
              +91 97928 48868
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-surface-soft flex items-center justify-center">
            <Mail className="h-5 w-5 text-ink" />
          </div>
          <div>
            <p className="font-medium">Email</p>
            <p className="text-muted-foreground">
              info@calibreassociates.com
            </p>
          </div>
        </div>

        {/* Location 1 */}
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-surface-soft flex items-center justify-center">
            <MapPin className="h-5 w-5 text-ink" />
          </div>
          <div>
            <p className="font-medium">North America Operations</p>
            <p className="text-muted-foreground">
              Buffalo, New York, USA
            </p>
          </div>
        </div>

        {/* Location 2 */}
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-surface-soft flex items-center justify-center">
            <MapPin className="h-5 w-5 text-ink" />
          </div>
          <div>
            <p className="font-medium">Head Office</p>
            <p className="text-muted-foreground">
              Uttar Pradesh, India
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactForm;