import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TEAM_MEMBERS } from '../../constants/data';
import SectionTitle from '../ui/SectionTitle';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// --- المكونات المشتركة لـ Variants (لتحسين الأداء) ---
const containerVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: { zIndex: 1, x: 0, opacity: 1 },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 100 : -100,
    opacity: 0,
  }),
};

// ==========================================
// الخيار الأول: نظام "عرض الكل" (Show More)
// ==========================================
const TeamCardV1 = React.memo(({ member, index }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    className="group relative overflow-hidden rounded-2xl aspect-[3/4] bg-white/5 backdrop-blur-md border border-white/10"
  >
    {/* Base Grayscale Image (Static) */}
    <img
      src={member.image}
      alt={`${member.name} - Grayscale`}
      loading="lazy"
      decoding="async"
      className="absolute inset-0 w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110 will-change-transform transform-gpu"
    />
    {/* Colored Image (Animates Opacity) */}
    <img
      src={member.image}
      alt={member.name}
      loading="lazy"
      decoding="async"
      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110 will-change-transform transform-gpu"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#05142B] via-transparent to-transparent opacity-80 z-0" />
    <div className="absolute bottom-0 left-0 right-0 p-5 text-left z-10">
      <h3 className="text-white font-bold text-lg">{member.name}</h3>
      <p className="text-[#3B6AFF] text-sm font-semibold">{member.title}</p>
    </div>
  </motion.div>
));

const TeamSectionV1 = React.memo(() => {
  const [showAll, setShowAll] = useState(false);
  const visibleMembers = showAll ? TEAM_MEMBERS : TEAM_MEMBERS.slice(0, 5);

  return (
    <div className="py-10">
      <div className="bg-blue-600/10 py-2 mb-10 text-blue-400 text-xs font-bold uppercase tracking-widest rounded-full w-fit mx-auto px-4">
        Option 1: Static Grid with "Show All"
      </div>
      <SectionTitle title="Meet Our Team" align="center" className="mb-12" />
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-6">
        <AnimatePresence mode="popLayout">
          {visibleMembers.map((member, i) => (
            <TeamCardV1 key={member.id} member={member} index={i} />
          ))}
        </AnimatePresence>
      </div>
      <div className="mt-12 flex justify-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-8 py-3 border border-[#3B6AFF] text-white rounded-full hover:bg-[#3B6AFF] transition-all"
        >
          {showAll ? 'Show Less' : 'View All Team'}
        </button>
      </div>
    </div>
  );
});

// ==========================================
// الخيار الثاني: نظام "السلايدر" (Slider / Carousel)
// ==========================================
const TeamCardV2 = React.memo(({ member }) => (
  <div className="group relative overflow-hidden rounded-2xl aspect-[3/4] bg-[#1A263D] border border-white/5">
    {/* Base Grayscale Image (Static) */}
    <img
      src={member.image}
      alt={`${member.name} - Grayscale`}
      loading="lazy"
      decoding="async"
      className="absolute inset-0 w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-105 will-change-transform transform-gpu"
    />
    {/* Colored Image (Animates Opacity) */}
    <img
      src={member.image}
      alt={member.name}
      loading="lazy"
      decoding="async"
      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105 will-change-transform transform-gpu"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#05142B] via-transparent to-transparent opacity-90 z-0" />
    <div className="absolute bottom-0 left-0 right-0 p-5 text-left z-10">
      <h3 className="text-white font-bold text-lg">{member.name}</h3>
      <p className="text-[#3B6AFF] text-sm font-semibold">{member.title}</p>
    </div>
  </div>
));

const TeamSectionV2 = React.memo(() => {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(TEAM_MEMBERS.length / itemsPerPage);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentPage((prev) => (prev + newDirection + totalPages) % totalPages);
  };

  const visibleMembers = TEAM_MEMBERS.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <div className="py-10 border-t border-white/10 mt-20">
      <div className="bg-purple-600/10 py-2 mb-10 text-purple-400 text-xs font-bold uppercase tracking-widest rounded-full w-fit mx-auto px-4">
        Option 2: Dynamic Slider (High Performance)
      </div>
      <div className="max-w-7xl mx-auto flex justify-between items-center mb-10 px-6">
        <SectionTitle title="Our Experts" align="left" className="mb-0" />
        <div className="flex gap-3">
          <button onClick={() => paginate(-1)} className="p-3 border border-white/10 rounded-full hover:bg-[#3B6AFF] text-white transition-all"><ChevronLeft size={20} /></button>
          <button onClick={() => paginate(1)} className="p-3 border border-white/10 rounded-full hover:bg-[#3B6AFF] text-white transition-all"><ChevronRight size={20} /></button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 relative min-h-[400px]">
        <AnimatePresence mode="popLayout" custom={direction} initial={false}>
          <motion.div
            key={currentPage}
            custom={direction}
            variants={containerVariants}
            initial="enter" animate="center" exit="exit"
            transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            {visibleMembers.map((member) => <TeamCardV2 key={member.id} member={member} />)}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
});

// ==========================================
// المكون الرئيسي الذي سيتم عرضه
// ==========================================
const TeamComparisonPage = React.memo(() => {
  return (
    <div className="bg-[#05142B] min-h-screen text-white">
      {/* هيدر بسيط للتوضيح */}
      <header className="py-10 text-center border-b border-white/5">
        <h1 className="text-3xl font-bold">Team Section Prototypes</h1>
        <p className="text-white/50 mt-2">Please review both versions for performance and UX.</p>
      </header>

      <TeamSectionV1 />
      <TeamSectionV2 />

      <footer className="py-20 text-center opacity-20">
        End of Preview
      </footer>
    </div>
  );
});

export default TeamComparisonPage;