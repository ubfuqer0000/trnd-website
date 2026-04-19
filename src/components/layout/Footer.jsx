import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Instagram, Linkedin, Facebook } from 'lucide-react';
import { NAV_LINKS } from '../../constants/data';

const Footer = () => {
  return (
    <footer className="pt-20 pb-10 px-6 md:px-16 bg-brand-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand & Social - التركيز على أيقونات كبيرة سهلة اللمس */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img src="/assets/logo/Artboard 2.svg" alt="TRND" className="h-12 w-auto mb-6 opacity-80 mix-blend-screen" />
            <div className="flex gap-6">
              {[
                { icon: <Instagram />, url: 'https://www.instagram.com/thetrndagency' },
                { icon: <Linkedin />, url: 'https://www.linkedin.com/company/thetrndagency/' },
                { icon: <Facebook />, url: 'https://www.facebook.com/share/1DLEMF8aER/' }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.url}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-white/5 rounded-full text-white/40 hover:text-brand-blue hover:bg-brand-blue/10 transition-all"
                >
                  {React.cloneElement(social.icon, { size: 22 })}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links - موزعة بشكل طولي مريح للجوال */}
          <div className="grid grid-cols-2 md:block gap-4 text-center md:text-left">
            <h4 className="col-span-2 text-xs font-black text-brand-blue uppercase tracking-[0.2em] mb-6">Explore</h4>
            {NAV_LINKS.map(link => (
              <Link key={link.name} to={link.path} className="block text-white/50 text-[15px] py-2 hover:text-brand-blue transition-colors">
                {link.name}
              </Link>
            ))}
          </div>

          {/* Contact Details */}
          <div className="text-center md:text-left">
            <h4 className="text-xs font-black text-brand-blue uppercase tracking-[0.2em] mb-6">Contact Us</h4>
            <div className="space-y-4">
              <a href="mailto:info@thetrnd.com" className="block text-white/70 font-medium text-lg">info@thetrnd.com</a>
              <div className="text-white/40 text-sm space-y-1">
                <p>+967 773 221 441</p>
                <p>+967 771 231 766</p>
              </div>
            </div>
          </div>

          {/* Newsletter - تحويله لعنصر تفاعلي قوي */}
          <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
            <h4 className="text-xs font-black text-white uppercase tracking-widest mb-3">Newsletter</h4>
            <p className="text-white/40 text-xs mb-5">Get the latest trends directly to your inbox.</p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-brand-dark/50 border border-white/10 text-white text-sm px-4 py-3.5 rounded-xl outline-none focus:border-brand-blue transition-all"
              />
              <button className="absolute right-1.5 top-1.5 bg-brand-blue text-white p-2 rounded-lg hover:bg-blue-600 transition-all" type="submit" aria-label="Submit newsletter">
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-white/20 text-[10px] uppercase tracking-widest">© {new Date().getFullYear()} TRND. Beyond Creativity.</p>
          <div className="flex gap-4 text-[10px] text-white/10 uppercase tracking-tighter">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
