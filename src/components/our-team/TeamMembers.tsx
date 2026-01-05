import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    name: "Abhijeet Jain",
    role: "Full Stack Web Developer & Workflow Specialists",
    link: "https://www.linkedin.com/in/abhijeetjain231/",
  },
  {
    name: "Pawan Sharma",
    role: "Marketing & Automation Specialists",
    link: "#",
  },
  {
    name: "Sargam Rastogi",
    role: "Software Developer & CRM Specialists",
    link: "https://www.linkedin.com/in/sargam-rastogi15/",
  },
  {
    name: "Pawan Kumar",
    role: "Full Stack Web Developer & DevOps Engineer",
    link: "https://www.linkedin.com/in/pawan-kumar-devops/",
  },
  {
    name: "Nirosh Hewabahithage",
    role: "Software Engineer & UI/UX Designer",
    link: "https://www.linkedin.com/in/niro-randimal/",
  },
  {
    name: "Jitpaul Baishya",
    role: "UI/UX Designer & Graphic Designer",
    link: "https://www.linkedin.com/in/jitpaul-baishya-a05241381/",
  },
  {
    name: "Abhishek",
    role: "Wordpress & Shopify Developer",
    link: "#",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const TeamMembers = () => {
  return (
    <section id="team-members" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block py-1.5 px-4 mb-5 text-xs font-semibold tracking-wider rounded-full bg-blue-50 text-blue-600 border border-blue-100 shadow-sm">
            THE CALIBRE TEAM
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built by People Who Care About the Craft
          </h2>
          <p className="text-lg text-muted-foreground">
            A collaborative team combining engineering discipline, design thinking, and automation expertise.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-0 shadow-md rounded-xl flex flex-col justify-between hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-muted-foreground mb-6">
                    {member.role}
                  </p>
                </CardContent>

                <CardFooter className="px-8 pb-8">
                  <a
                    href={member.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button
                      variant="outline"
                      className="w-full rounded-lg group border-2"
                    >
                      <span>View Profile</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamMembers;