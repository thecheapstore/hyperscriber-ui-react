import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
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
    <motion.div {...pageTransition} className="min-h-screen flex items-center justify-center bg-canvas">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-4 text-ink">404</h1>
        <p className="text-xl text-ink/70 mb-4">Oops! Page not found</p>
        <a href="/" className="text-ink underline underline-offset-4 hover:opacity-70">
          Return to Home
        </a>
      </motion.div>
    </motion.div>
  );
};

export default NotFound;
