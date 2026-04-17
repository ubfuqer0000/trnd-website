import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/sections/ContactForm';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-brand-dark pt-32"
    >
      <ContactForm />
    </motion.div>
  );
};

export default Contact;
