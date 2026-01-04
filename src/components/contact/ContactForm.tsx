"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

const ContactForm = () => {
  useEffect(() => {
    // Load GoHighLevel embed script once
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="bg-white shadow-lg border border-gray-100 h-full flex flex-col px-8 py-8 sm:p-8 md:p-10 rounded-xl"
    >
      <h2 className="text-2xl font-semibold mb-6 tracking-tight">
        Book a Consultation
      </h2>

      <div className="w-full flex-grow">
        <iframe
          src="https://api.leadconnectorhq.com/widget/form/Czb3FWDhPiNoTx1naNbW"
          style={{
            width: "100%",
            height: "100%",
            minHeight: "735px",
            border: "none",
            borderRadius: "12px",
          }}
          id="inline-Czb3FWDhPiNoTx1naNbW"
          data-layout='{"id":"INLINE"}'
          data-trigger-type="alwaysShow"
          data-activation-type="alwaysActivated"
          data-deactivation-type="neverDeactivate"
          data-form-id="Czb3FWDhPiNoTx1naNbW"
          title="Calibre Associates Contact Form"
        />
      </div>
    </motion.div>
  );
};

export default ContactForm;