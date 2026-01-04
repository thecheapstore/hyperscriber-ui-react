import { motion } from "framer-motion";

const OurTeam = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block mb-4 text-sm font-semibold text-blue-600">
            OUR TEAM
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet the People Behind the Work
          </h2>
          <p className="text-muted-foreground text-lg">
            A focused team of developers, designers, and strategists building
            high performance digital products.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OurTeam;