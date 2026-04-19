import React from 'react';
import { motion } from 'framer-motion';

const MOCK_PARTNERS = [
  "Artboard 1.svg.svg", "Artboard 2.svg", "Artboard 3.svg",
  "Artboard 4.svg", "Artboard 5.svg", "Artboard 6.svg",
  "Artboard 7.svg", "Artboard 8.svg", "Artboard 9.svg",
  "Artboard 10.svg", "Artboard 12.svg"
];

const PartnerMarquee = () => {
  // مضاعفة المصفوفة لضمان استمرارية الحركة دون فراغات
  const doublePartners = [...MOCK_PARTNERS, ...MOCK_PARTNERS, ...MOCK_PARTNERS];

  return (
    <section className="py-12 md:py-24 bg-brand-dark relative overflow-hidden">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
          Our <span className="text-[#3B6AFF]">Partners</span>
        </h2>
      </div>

      {/* Marquee Container */}
      <div className="flex overflow-hidden select-none">
        <motion.div
          className="flex flex-nowrap gap-6 md:gap-10 pr-6 md:pr-10" // تقليل المسافات هنا
          animate={{
            x: ["0%", "-50%"], 
          }}
          transition={{
            duration: 30, // زدنا المدة قليلاً لأن الصور أكبر لكي لا تبدو الحركة سريعة جداً ومزعجة
            ease: "linear",
            repeat: Infinity,
          }}
          style={{ display: "flex" }}
        >
          {doublePartners.map((partner, idx) => (
            <div key={idx} className="flex-shrink-0 flex items-center justify-center">
              <img
                src={`/assets/partners/${partner}`}
                alt="Partner"
                loading="lazy"
                // زيادة الحجم هنا: h-40 للجوال و h-64 للابتوب
                className="h-40 md:h-64 w-auto object-contain brightness-0 invert opacity-40 hover:opacity-100 transition-all duration-300 transform-gpu hover:scale-105"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(PartnerMarquee);