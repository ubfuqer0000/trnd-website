import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TEAM_MEMBERS } from '../../constants/data';
import { ChevronDown, ChevronUp } from 'lucide-react';

const TeamCard = React.memo(({ member, index }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    className="group relative overflow-hidden rounded-[2.5rem] aspect-[3/4] bg-white/5 border border-white/10"
  >
    {/* Image Layer */}
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <img
        src={member.image}
        alt={member.name}
        loading="lazy"
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#05142B] via-transparent to-transparent opacity-90" />
    </div>

    {/* Content */}
    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-10">
      <h3 className="text-white font-bold text-base sm:text-xl tracking-tight leading-tight">
        {member.name}
      </h3>
      <p className="text-[#3B6AFF] text-xs sm:text-sm font-medium mt-1 opacity-90">
        {member.title}
      </p>
    </div>
  </motion.div>
));

export default function TeamSection() {
  const [showAll, setShowAll] = useState(false);
  
  // غيرنا الرقم لـ 4 ليتناسب مع توزيع الشاشات الكبيرة (صف واحد كامل)
  const visibleMembers = useMemo(() => 
    showAll ? TEAM_MEMBERS : TEAM_MEMBERS.slice(0, 4), 
  [showAll]);

  return (
    <section className="py-20 bg-[#05142B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Our Creative <span className="text-[#3B6AFF]">Team</span>
          </h2>
        </div>

        {/* Responsive Grid System */}
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {visibleMembers.map((member, i) => (
              <TeamCard key={member.id} member={member} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Toggle Button */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group flex items-center gap-3 px-8 py-3 bg-white/5 hover:bg-[#3B6AFF] border border-white/10 hover:border-[#3B6AFF] text-white rounded-full transition-all duration-500"
          >
            <span className="font-bold tracking-wider uppercase text-xs sm:text-sm">
              {showAll ? 'Show Less' : 'View Full Team'}
            </span>
            {showAll ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
        </div>
      </div>
    </section>
  );
}