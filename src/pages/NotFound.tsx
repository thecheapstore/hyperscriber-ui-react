import { useLocation } from 'react-router-dom';
import { Link } from '@/lib/routerLink';
import { useEffect } from "react";
import { motion } from "framer-motion";
import Seo from '@/components/seo/Seo';
import { pageTransition } from "@/lib/motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <motion.div {...pageTransition} className="min-h-screen flex items-center justify-center bg-canvas px-6">
      <Seo
        title="Page Not Found | Calibre Associates"
        description="This page could not be found. Visit the Calibre Associates homepage to explore our digital marketing, website development, SEO and AI automation services."
        path="/404"
        noindex
      />
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center max-w-xl"
      >
        <p className="text-4xl font-bold mb-4 text-ink">404</p>
        <h1 className="text-3xl md:text-4xl mb-4 text-ink">Page Not Found</h1>
        <p className="text-lg text-ink/70 mb-6">
          The page you are looking for may have moved. Try our{' '}
          <Link to="/services" className="text-ink underline underline-offset-4 hover:opacity-70">
            digital marketing services
          </Link>
          , the{' '}
          <Link to="/portfolio" className="text-ink underline underline-offset-4 hover:opacity-70">
            portfolio
          </Link>{' '}
          or the{' '}
          <Link to="/contact" className="text-ink underline underline-offset-4 hover:opacity-70">
            contact page
          </Link>
          .
        </p>
        <Link to="/" className="text-ink underline underline-offset-4 hover:opacity-70">
          Return to Home
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default NotFound;
