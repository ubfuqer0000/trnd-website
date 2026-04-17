import React from 'react';
import SectionTitle from '../ui/SectionTitle';

const MOCK_PARTNERS = [
  "Artboard 1.svg.svg", "Artboard 2.svg", "Artboard 3.svg",
  "Artboard 4.svg", "Artboard 5.svg", "Artboard 6.svg",
  "Artboard 7.svg", "Artboard 8.svg", "Artboard 9.svg",
  "Artboard 10.svg", "Artboard 12.svg"
];

const PartnerMarquee = () => {
  return (
    <section className="py-16 bg-brand-dark relative overflow-hidden">
      <SectionTitle title="Our Partners" align="center" className="mb-12" />

      <div className="relative w-full flex overflow-x-hidden group border-y border-white/5 py-10">
        {/* نستخدم طبقتين فقط مع تحسين الأداء عبر hardware acceleration */}
        <div className="flex animate-marquee items-center gap-12 px-6 will-change-transform">
          {[...MOCK_PARTNERS, ...MOCK_PARTNERS].map((partner, idx) => (
            <img
              key={idx}
              src={`/assets/partners/${partner}`}
              alt="Partner"
              // تحسين التحميل: الصور خارج الشاشة لا تحمل فوراً
              loading="lazy" 
              className="h-40 md:h-40 w-auto object-contain brightness-0 invert opacity-40 hover:opacity-100 transition-all duration-500 hover:scale-110"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(PartnerMarquee);
