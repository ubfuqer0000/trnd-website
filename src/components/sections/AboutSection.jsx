import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    // أضفنا id="about" هنا لربطه بشريط التنقل
    <section id="about" className="py-28 px-6 md:px-16 relative w-full overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#3B6AFF]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="blue-separator absolute top-0 left-0 right-0"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* عنوان About Us - تصميم أبيض بالكامل ومرن */}
        <div className="flex justify-center w-full mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-5 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white"
          >
            <span className="whitespace-nowrap">About</span>
            <span className="whitespace-nowrap">Us</span>
          </motion.h2>
        </div>

        {/* النص الفرعي */}
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
  );
};

export default React.memo(AboutSection);