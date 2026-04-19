import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HomeHero from '../components/sections/HomeHero';
import AboutSection from '../components/sections/AboutSection'; // استدعاء الملف الجديد
import TeamSection from '../components/sections/TeamSection';
import PartnerMarquee from '../components/sections/PartnerMarquee';

const FEATURED_WORKS = [
  { id: 1, title: "Brand Evolution", category: "Brand Identity", image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=800&auto=format&fit=crop" },
  { id: 2, title: "Digital Campaign", category: "Social Media", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop" },
  { id: 3, title: "Web Experience", category: "Web Development", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" },
  { id: 4, title: "Visual Storytelling", category: "Production", image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=800&auto=format&fit=crop" },
];

const ArrowIcon = () => (
  <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#05142B] min-h-screen"
    >
      <HomeHero />

      {/* 1. About Us Section (تم استدعاؤه كملف منفصل) */}
      <AboutSection />

      {/* 2. Featured Portfolio Section */}
      <section className="py-20 px-6 md:px-16 relative w-full bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                Selected <span className="text-[#3B6AFF]">Works</span>
              </h2>
            </div>
            
            <Link 
              to="/portfolio" 
              className="hidden md:flex items-center text-white/60 hover:text-[#3B6AFF] transition-colors group font-bold tracking-widest uppercase text-sm pb-4"
            >
              View All Works
              <ArrowIcon />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FEATURED_WORKS.map((work, index) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                // استخدمنا حواف ناعمة جداً للحفاظ على الهوية
                className="group relative overflow-hidden rounded-[2rem] aspect-video cursor-pointer bg-black/50 border border-white/5"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100"
                  style={{ backgroundImage: `url(${work.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05142B]/90 via-[#05142B]/20 to-transparent" />

                <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-[#3B6AFF] font-bold tracking-widest uppercase text-xs mb-2">
                    {work.category}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
                    {work.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex justify-center md:hidden">
            <Link 
              to="/portfolio" 
              className="flex items-center justify-center w-full bg-[#3B6AFF]/10 border border-[#3B6AFF]/20 text-[#3B6AFF] py-4 rounded-full hover:bg-[#3B6AFF] hover:text-white transition-all font-bold tracking-widest uppercase text-sm group"
            >
              View All Works
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Partners Marquee */}
      <PartnerMarquee />

      {/* 4. Team Section */}
      <TeamSection />
      
    </motion.div>
  );
};

export default Home;