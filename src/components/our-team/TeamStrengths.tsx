import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const strengths = [
  {
    title: "Experienced Engineering Team",
    description:
      "Our engineering team brings hands-on experience across modern web technologies, building secure, scalable, and maintainable applications that support real business growth.",
  },
  {
    title: "Design-Led Thinking",
    description:
      "We approach every project with design clarity first, focusing on intuitive user experiences, clean interfaces, and thoughtful flows that make products easy to use and hard to forget.",
  },
  {
    title: "Automation & Integrations",
    description:
      "Our team specializes in building smart automation and system integrations, helping businesses streamline operations, connect tools, and reduce manual effort through well-architected workflows.",
  },
  {
    title: "Performance & Scalability",
    description:
      "From code structure to infrastructure decisions, our team builds with performance and scalability in mind, ensuring long-term stability, speed, and technical reliability.",
  },
  {
    title: "Clear Communication",
    description:
      "We believe great results come from clear communication. Clients work directly with our execution team, with transparent timelines, regular updates, and collaborative decision-making.",
  },
  {
    title: "Long-Term Partnership",
    description:
      "We view every engagement as a long-term partnership, acting as an extension of your internal team rather than a short-term service provider.",
  },
];

const TeamStrengths = () => {
  return (
    <section className="py-20 bg-canvas">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="eyebrow inline-block py-1.5 px-4 mb-5 rounded-pill bg-surface-soft">
            WHY OUR TEAM WORKS
          </span>
          <h2 className="mb-4">
            What Sets Calibre Associates Apart
          </h2>
          <p className="text-lg text-ink/70">
            A combination of technical depth, design precision, and execution
            discipline.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {strengths.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -6 }}
            >
              <Card className="h-full border border-hairline shadow-none rounded-lg transition-shadow duration-300 hover:shadow-card">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-ink/70">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamStrengths;
