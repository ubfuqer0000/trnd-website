import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { NAV_LINKS } from '../../constants/data'

export default React.memo(function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  // Use requestAnimationFrame for optimized scroll listening
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
  }, [])

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-brand-dark/80 h-16 shadow-xl shadow-black/20 border-b border-brand-blue/10' : 'h-24'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 flex items-center justify-between h-full">
          <div className="flex items-center gap-3">
            <Link to="/">
              <img
                src="/assets/logo/Artboard 2.svg"
                alt="TRND logo"
                decoding="async"
                className={`w-auto transition-all duration-300 origin-center mix-blend-screen ${scrolled ? 'h-16' : 'h-32'}`}
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
                  className="relative group focus:outline-none py-1"
                >
                  <span className="group-hover:text-brand-blue transition-colors text-sm uppercase tracking-widest font-semibold">
                    {item.name}
                  </span>
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-brand-blue transition-all duration-300 ease-out group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Mobile Navigation Toggle */}
            <button
              className="md:hidden text-white focus:outline-none transition-colors hover:text-brand-blue"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brand-dark/95 backdrop-blur-xl z-50 flex flex-col items-center justify-center shadow-2xl"
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-brand-blue transition-colors"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <nav className="space-y-8 text-center flex flex-col">
              {NAV_LINKS.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className="text-4xl font-bold uppercase tracking-widest text-white hover:text-brand-blue transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
});
