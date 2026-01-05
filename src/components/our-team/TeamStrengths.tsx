import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const strengths = [
  {
    title: "Experienced Engineering Team",
    description:
      "Our developers build fast, secure, and scalable web applications using modern frameworks and best practices.",
  },
  {
    title: "Design-Led Thinking",
    description:
      "Every project starts with UX clarity — clean interfaces, intuitive flows, and conversion-focused layouts.",
  },
  {
    title: "Automation & Integrations",
    description:
      "We design CRM workflows, API integrations, and automation systems that eliminate repetitive manual work.",
  },
  {
    title: "Performance & Scalability",
    description:
      "From code structure to infrastructure, everything is optimized for speed, SEO readiness, and long-term growth.",
  },
  {
    title: "Clear Communication",
    description:
      "You work directly with the execution team — transparent timelines, regular updates, and no guesswork.",
  },
  {
    title: "Long-Term Partnership",
    description:
      "We act as a digital extension of your business, not a one-off service provider.",
  },
];

const TeamStrengths = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1.5 px-4 mb-5 text-xs font-semibold rounded-full bg-blue-50 text-blue-600">
            WHY OUR TEAM
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Sets Calibre Associates Apart
          </h2>
          <p className="text-lg text-muted-foreground">
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
            >
              <Card className="h-full border-0 shadow-md rounded-xl">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
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