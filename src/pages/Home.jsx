import React from 'react';
import { motion } from 'framer-motion';
import HomeHero from '../components/sections/HomeHero';
import TeamSection from '../components/sections/TeamSection';
import PartnerMarquee from '../components/sections/PartnerMarquee';
import SectionTitle from '../components/ui/SectionTitle';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-brand-dark min-h-screen"
    >
      <HomeHero />

      {/* Our Story Brief */}
      <section className="py-28 px-6 md:px-16 relative w-full overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-blue/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="blue-separator absolute top-0 left-0 right-0"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <SectionTitle
            align="center"
          />
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-white/90 tracking-tight"
          >
            In 2017, the TRND made its debut in the industry.<br className="hidden md:block" />
            <span className="text-white/40 font-medium">In 2024, a new leadership acquisition marked a pivotal moment in its evolution.</span>
          </motion.p>
        </div>
      </section>

      <PartnerMarquee />
      <TeamSection />
    </motion.div>
  );
};

export default Home;
