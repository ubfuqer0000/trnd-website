import React from 'react';
import { motion } from 'framer-motion';
import ServicesGrid from '../components/sections/ServicesGrid';
import { ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-brand-dark pt-32"
    >
      <ServicesGrid />

      {/* CTA Banner */}
      <section className="py-24 px-6 md:px-16 relative overflow-hidden bg-brand-surface text-center">
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/10 to-transparent pointer-events-none" />
        <div className="blue-separator absolute top-0 left-0 right-0"></div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Ready to Shape Something Great?
          </h2>
          <p className="text-white/60 mb-10 text-xl font-medium">
            Let's collaborate and create work that truly stands out.
          </p>
          <Button to="/contact" className="gap-2">
            Get In Touch <ArrowRight size={20} />
          </Button>
        </motion.div>
        <div className="blue-separator absolute bottom-0 left-0 right-0"></div>
      </section>
    </motion.div>
  );
};

export default Services;
