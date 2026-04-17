import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

// ─── EmailJS credentials – fill these in before going live ───────────────────
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';  // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';   // e.g. 'ABCdEfGhIjKlMnOp'
// ─────────────────────────────────────────────────────────────────────────────

const ContactForm = () => {
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [formData, setFormData] = useState({ fullName: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.message) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    setStatus('loading');

    try {
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          fullName: formData.fullName,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'info@thetrnd.com',
        },
        EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setStatus('success');
        setFormData({ fullName: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section className="py-24 px-6 md:px-16 bg-brand-dark min-h-screen">
      <SectionTitle
        title="Let's Talk"
        subtitle="Have a project in mind? We'd love to hear from you." subtitle2="Send us a message and we'll get back to you as soon as possible."
        align="center"
        className="mb-16"
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* Left Column: Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          {/* Info Card 1 */}
          <div className="flex items-start gap-4 p-5 rounded-2xl bg-brand-surface border border-brand-blue/15 shadow-lg shadow-black/20">
            <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center flex-shrink-0 text-brand-blue">
              <Mail size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Email</p>
              <a href="mailto:info@thetrnd.com" className="text-white font-semibold hover:text-brand-blue transition-colors">info@thetrnd.com</a>
            </div>
          </div>

          {/* Info Card 2 */}
          <div className="flex items-start gap-4 p-5 rounded-2xl bg-brand-surface border border-brand-blue/15 shadow-lg shadow-black/20">
            <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center flex-shrink-0 text-brand-blue">
              <Phone size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Phone</p>
              <a href="tel:+967773221441" className="text-white font-semibold hover:text-brand-blue transition-colors">+967 773 221 441</a>
              <br />
              <a href="tel:+967771231766" className="text-white font-semibold hover:text-brand-blue transition-colors">+967 771 231 766</a>
            </div>
          </div>

          {/* Info Card 3 */}
          <div className="flex items-start gap-4 p-5 rounded-2xl bg-brand-surface border border-brand-blue/15 shadow-lg shadow-black/20">
            <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center flex-shrink-0 text-brand-blue">
              <MapPin size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Address</p>
              <p className="text-white font-medium leading-relaxed">
                Yemen, Sana'a, Haddah St.<br />
              </p>
              <p className="text-white font-medium leading-relaxed">
                Yemen, Aden, Enma,a St.<br />
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-8 rounded-2xl bg-brand-surface/80 border border-brand-blue/15 backdrop-blur-sm shadow-xl shadow-black/20"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} noValidate>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="fullName" className="block text-xs font-bold text-white/50 uppercase tracking-widest mb-2">Full Name</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full bg-brand-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-white/50 uppercase tracking-widest mb-2">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full bg-brand-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="subject" className="block text-xs font-bold text-white/50 uppercase tracking-widest mb-2">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What is this regarding?"
                className="w-full bg-brand-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-xs font-bold text-white/50 uppercase tracking-widest mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                className="w-full bg-brand-dark/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all resize-none"
              />
            </div>

            <Button
              type="submit"
              className="w-full flex items-center justify-center gap-2"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="animate-spin" size={20} /> Sending...
                </>
              ) : status === 'success' ? (
                <>
                  <CheckCircle size={20} /> Message Sent
                </>
              ) : (
                <>
                  Send Message <Send size={18} />
                </>
              )}
            </Button>

            <AnimatePresence>
              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-red-400 text-sm mt-4 text-center font-semibold"
                >
                  Please fill in all required fields.
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default React.memo(ContactForm);
