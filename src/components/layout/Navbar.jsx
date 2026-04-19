import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../../constants/data';

export default React.memo(function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // إغلاق القائمة عند التمرير في الجوال (حركة تشبه التطبيقات)
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // منع السكرول في الخلفية عندما تكون القائمة مفتوحة
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = previousOverflow || 'unset';
    }

    return () => {
      document.body.style.overflow = previousOverflow || 'unset';
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  useEffect(() => {
    if (mobileOpen) {
      setMobileOpen(false);
    }
  }, [location.pathname, mobileOpen]);

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-xl bg-brand-dark/80 h-16 sm:h-20 shadow-xl shadow-black/20 border-b border-brand-blue/10' : 'h-20 sm:h-28'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 flex items-center justify-between h-full">
          <div className="flex items-center gap-3">
            <Link to="/" className="relative z-[60]">
              <img
                src="/assets/logo/Artboard 2.svg"
                alt="TRND logo"
                decoding="async"
                // تصغير الشعار في الجوال لكي لا يأخذ مساحة ضخمة
                className={`w-auto transition-all duration-300 origin-left mix-blend-screen ${scrolled ? 'h-10 sm:h-14' : 'h-14 sm:h-24'}`}
              />
            </Link>
          </div>

          <nav>
            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8 text-white/50 font-medium">
              {NAV_LINKS.map(item => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="relative group focus:outline-none py-2"
                >
                  <span className="group-hover:text-brand-blue transition-colors text-sm uppercase tracking-widest font-semibold">
                    {item.name}
                  </span>
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-brand-blue transition-all duration-300 ease-out group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Mobile Navigation Toggle (زر أكبر وأسهل للضغط) */}
            <button
              className="md:hidden relative z-[60] p-2 -mr-2 text-white focus:outline-none transition-colors active:scale-95"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay - تصميم يشبه التطبيقات (App-like) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-brand-dark/95 z-50 flex flex-col justify-end pb-24 px-6 shadow-2xl md:hidden"
          >
            <nav className="flex flex-col gap-2 w-full">
              {NAV_LINKS.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, type: "spring", stiffness: 300, damping: 24 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className="block w-full py-5 border-b border-white/5 text-3xl font-black uppercase tracking-wider text-white hover:text-brand-blue active:bg-white/5 transition-all rounded-xl px-4"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* معلومات إضافية في أسفل القائمة للجوال */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-12 px-4"
            >
              <p className="text-white/40 text-sm font-medium uppercase tracking-widest mb-2">Say Hello</p>
              <a href="mailto:info@thetrnd.com" className="text-brand-blue text-lg font-semibold">info@thetrnd.com</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});
