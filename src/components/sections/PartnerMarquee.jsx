import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';

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
      <SectionTitle title="Our Partners" align="center" className="mb-8 md:mb-16" />

      {/* Container مع تدرج لوني (Mask) على الأطراف يعطي فخامة ويخفي دخول الصور */}
      <div className="relative flex overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-brand-dark before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-brand-dark after:to-transparent">
        
        <motion.div 
          className="flex items-center gap-8 md:gap-20 py-6"
          animate={{
            x: ["0%", "-50%"], // نتحرك لنصف المصفوفة المضاعفة فقط لضمان الحلقة اللانهائية
          }}
          transition={{
            duration: 20, // سرعة الحركة (كلما قل الرقم زادت السرعة)
            ease: "linear",
            repeat: Infinity,
          }}
          whileHover={{ animationPlayState: 'paused' }} // يتوقف عند مرور الماوس (لابتوب)
          whileTap={{ scale: 0.98 }} // ينكمش قليلاً عند اللمس (جوال)
        >
          {doublePartners.map((partner, idx) => (
            <div key={idx} className="flex-shrink-0">
              <img
                src={`/assets/partners/${partner}`}
                alt="Partner"
                loading="lazy"
                // التغيير الجوهري هنا: حجم أصغر للجوال (h-12) وأكبر قليلاً للابتوب (h-20)
                className="h-12 md:h-20 w-auto object-contain brightness-0 invert opacity-40 hover:opacity-100 transition-all duration-300 transform-gpu"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(PartnerMarquee);
