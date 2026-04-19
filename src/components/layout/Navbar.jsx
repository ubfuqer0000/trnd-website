import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../../constants/data';

export default React.memo(function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // تحسين التمرير
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // منع السكرول عند فتح القائمة
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileOpen]);

  // إغلاق القائمة عند تغيير المسار
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header 
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
          scrolled ? 'backdrop-blur-xl bg-brand-dark/80 h-16 shadow-xl border-b border-white/5' : 'h-24'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16 flex items-center justify-between h-full">
          <Link to="/" className="relative z-[110]">
            <img
              src="/assets/logo/Artboard 2.svg"
              alt="TRND"
              className={`w-auto transition-all duration-500 mix-blend-screen ${scrolled ? 'h-16' : 'h-40'}`}
            />
          </Link>

          <nav className="flex items-center">
            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-10">
              {NAV_LINKS.map(item => (
                <Link key={item.name} to={item.path} className="group relative py-2">
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white/50 group-hover:text-brand-blue transition-colors">
                    {item.name}
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-brand-blue transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Mobile Toggle Button - تم إصلاحه ليعمل بـ Z-index أعلى */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden relative z-[110] w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <motion.span 
                animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="w-8 h-0.5 bg-white rounded-full block origin-center" 
              />
              <motion.span 
                animate={mobileOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                className="w-8 h-0.5 bg-white rounded-full block" 
              />
              <motion.span 
                animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="w-8 h-0.5 bg-white rounded-full block origin-center" 
              />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-brand-dark z-[90] md:hidden flex flex-col justify-center px-10"
          >
            {/* الخلفية المزخرفة (اختياري) */}
            <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-blue rounded-full blur-[120px]" />
            </div>

            <nav className="relative z-10 flex flex-col gap-6">
              {NAV_LINKS.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className="text-5xl font-black uppercase tracking-tighter text-white hover:text-brand-blue transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-20 pt-10 border-t border-white/10"
            >
              <p className="text-white/30 text-xs uppercase tracking-[0.3em] mb-4">Get in touch</p>
              <a href="mailto:info@thetrnd.com" className="text-xl font-bold text-white">info@thetrnd.com</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});

