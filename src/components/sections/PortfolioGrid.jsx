import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_ITEMS } from '../../constants/data';
import SectionTitle from '../ui/SectionTitle';

const FILTERS = [
  { id: 'all', label: 'All Work' },
  { id: 'production', label: 'Production' },
  { id: 'branding', label: 'Branding' },
  { id: 'digital', label: 'Digital' },
  { id: 'animation', label: 'Animation' },
];

// مكون فرعي صغير لتقليل الرندر
const PortfolioCard = React.memo(({ item, setSelectedItem }) => (
  <motion.div
    layout // تحريك الانسياب فقط عند الضرورة
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    onClick={() => setSelectedItem(item)}
    className="group relative aspect-square rounded-2xl overflow-hidden bg-[#0A1E3D] cursor-pointer border border-white/5 hover:border-brand-blue/30 transition-all duration-500"
  >
    {item.type === 'video' ? (
      <video
        src={item.src}
        muted loop playsInline
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        onMouseEnter={e => e.target.play()}
        onMouseLeave={e => { e.target.pause(); e.target.currentTime = 0; }}
      />
    ) : (
      <img src={item.src} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
    )}
    {/* Overlay logic remains same but optimized colors */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#05142B] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
      <span className="text-brand-blue text-[10px] font-bold tracking-widest uppercase mb-2 block">{item.category}</span>
      <h3 className="text-white font-black text-xl mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{item.title}</h3>
    </div>
  </motion.div>
));

const PortfolioGrid = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);

  // إغلاق النافذة عند الضغط على زر Escape
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setSelectedItem(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const filteredItems = PORTFOLIO_ITEMS.filter(item =>
    activeFilter === 'all' ? true : item.category === activeFilter
  );

  return (
    <section className="py-24 px-6 md:px-16 bg-[#05142B] min-h-screen relative">
      <SectionTitle
        title="Our Work"
        subtitle="A curated showcase of our creative output campaigns, productions, and digital experiences."
        align="center"
        className="mb-12"
      />

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3 mb-12">
        {FILTERS.map(filter => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`
              text-[10px] tracking-[0.2em] font-bold uppercase px-8 py-3 rounded-full border transition-all duration-500
              ${activeFilter === filter.id
                ? 'bg-brand-blue text-white border-brand-blue shadow-[0_0_20px_rgba(59,130,246,0.4)]'
                : 'text-white/40 border-white/10 hover:border-brand-blue/40 hover:text-white bg-transparent'
              }
            `}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <motion.div layout className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode='popLayout'>
          {filteredItems.map(item => (
            <PortfolioCard key={item.id} item={item} setSelectedItem={setSelectedItem} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal - الجزء الاحترافي الجديد */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-[#05142B]/95 backdrop-blur-xl"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative max-w-6xl w-full bg-[#0A1E3D] rounded-3xl overflow-hidden shadow-full border border-white/10"
              onClick={e => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-brand-blue text-white transition-colors flex items-center justify-center"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>

              <div className="flex flex-col lg:flex-row">
                {/* Media Container */}
                <div className="lg:w-2/3 bg-black aspect-video flex items-center justify-center">
                  {selectedItem.type === 'video' ? (
                    <video
                      src={selectedItem.src}
                      controls
                      autoPlay
                      className="w-full h-full"
                    />
                  ) : (
                    <img src={selectedItem.src} alt={selectedItem.title} className="w-full h-full object-contain" />
                  )}
                </div>

                {/* Content Container */}
                <div className="lg:w-1/3 p-8 md:p-12 flex flex-col justify-center">
                  <span className="text-brand-blue text-xs font-bold tracking-[0.3em] uppercase mb-4">{selectedItem.category}</span>
                  <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight uppercase italic-subtle">{selectedItem.title}</h2>
                  <p className="text-white/60 text-lg leading-relaxed">{selectedItem.caption}</p>

                  <div className="mt-10 pt-10 border-t border-white/5">
                    <button className="text-white text-xs font-bold tracking-widest uppercase flex items-center gap-3 group">
                      Share Project
                      <div className="w-8 h-[1px] bg-brand-blue group-hover:w-12 transition-all"></div>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default React.memo(PortfolioGrid);
