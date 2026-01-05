
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Zap, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const TeamValues = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="bg-white p-2 rounded-full inline-flex mb-5 shadow-sm">
            <ShieldCheck size={24} className="text-blue-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Values and Work Culture
          </h2>
          <p className="text-lg text-muted-foreground">
            The principles that guide how our team works, collaborates, and delivers consistent results for our clients.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          <motion.div variants={itemVariants} className="bg-white rounded-xl p-8 shadow-sm">
            <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-6">
              <Award className="h-7 w-7 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Quality Driven Execution</h3>
            <p className="text-muted-foreground">
              We believe quality is not optional. Every website and web application we build goes through internal reviews to ensure clean code, strong performance, and long term reliability before it reaches our clients.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-white rounded-xl p-8 shadow-sm">
            <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-6">
              <Zap className="h-7 w-7 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Accountability and Ownership</h3>
            <p className="text-muted-foreground">
              Our team takes full ownership of every project from start to finish. We communicate clearly, fix issues proactively, and stand behind our work to deliver results that meet real business goals.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="bg-white rounded-xl p-8 shadow-sm">
            <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-6">
              <Clock className="h-7 w-7 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Reliable and On Time Delivery</h3>
            <p className="text-muted-foreground">
              We respect timelines and plan projects carefully to avoid delays. Our structured workflow ensures consistent progress and dependable delivery without compromising on quality.
            </p>
          </motion.div>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-white p-8 rounded-xl border border-blue-100 shadow-md"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 flex justify-center">
              <div className="w-28 h-28 bg-blue-50 rounded-full flex items-center justify-center">
                <ShieldCheck className="h-14 w-14 text-blue-600" />
              </div>
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Collaboration and Transparency</h3>
              <p className="text-muted-foreground mb-4">
                Great results come from strong collaboration. We work closely as a team and keep clients informed at every stage so expectations stay aligned and outcomes remain predictable.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamValues;
