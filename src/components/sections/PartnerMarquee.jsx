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
          className="flex flex-nowrap gap-12 md:gap-24 pr-12 md:pr-24"
          animate={{
            x: ["0%", "-50%"], // التحرك لنصف المصفوفة لضمان الحلقة اللانهائية
          }}
          transition={{
            duration: 25, // سرعة الحركة (زد الرقم لتقليل السرعة)
            ease: "linear",
            repeat: Infinity,
          }}
          style={{ display: "flex" }} // لضمان بقاء العناصر على خط واحد
        >
          {doublePartners.map((partner, idx) => (
            <div key={idx} className="flex-shrink-0 flex items-center justify-center">
              <img
                src={`/assets/partners/${partner}`}
                alt="Partner"
                loading="lazy"
                // حجم متوازن للجوال واللابتوب مع تأثيرات الـ Hover
                className="h-20 md:h-40 w-auto object-contain brightness-0 invert opacity-40 hover:opacity-100 transition-all duration-300 transform-gpu hover:scale-110"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(PartnerMarquee);