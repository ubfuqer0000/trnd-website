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
    className="group relative overflow-hidden rounded-[2rem] aspect-[3/4] bg-white/5 border border-white/10"
  >
    {/* Image Layer */}
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <img
        src={member.image}
        alt={member.name}
        loading="lazy"
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out"
      />
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/20 to-transparent opacity-90" />
    </div>

    {/* Content */}
    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
      <h3 className="text-white font-bold text-xl tracking-tight leading-tight">
        {member.name}
      </h3>
      <p className="text-trnd text-sm font-medium mt-1 opacity-90 group-hover:opacity-100 transition-opacity">
        {member.title}
      </p>
    </div>

    {/* Subtle Inner Glow on Hover */}
    <div className="absolute inset-0 border-[0px] group-hover:border-[1px] border-trnd/30 rounded-[2rem] transition-all duration-500" />
  </motion.div>
));

export default function TeamSection() {
  const [showAll, setShowAll] = useState(false);
  
  // نعرض أول 5 أعضاء فقط في البداية
  const visibleMembers = useMemo(() => 
    showAll ? TEAM_MEMBERS : TEAM_MEMBERS.slice(0, 4), 
  [showAll]);

  return (
    <section className="py-24 bg-midnight relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-trnd/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-trnd font-bold tracking-[0.2em] uppercase text-xs"
          >
            Meet the talent
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            Our Creative <span className="text-trnd">Collective</span>
          </h2>
        </div>

        {/* Members Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
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
            className="group flex items-center gap-3 px-10 py-4 bg-white/5 hover:bg-trnd border border-white/10 hover:border-trnd text-white rounded-full transition-all duration-500 backdrop-blur-sm"
          >
            <span className="font-bold tracking-wider uppercase text-sm">
              {showAll ? 'Show Less' : 'View Full Team'}
            </span>
            {showAll ? (
              <ChevronUp className="group-hover:-translate-y-1 transition-transform" size={18} />
            ) : (
              <ChevronDown className="group-hover:translate-y-1 transition-transform" size={18} />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}