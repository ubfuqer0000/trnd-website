import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../../constants/data';
import SectionTitle from '../ui/SectionTitle';

// مكون العنصر الفردي داخل القائمة
const ServiceItem = ({ text, Icon }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, x: -15 },
      visible: { opacity: 1, x: 0 }
    }}
    className="flex items-start gap-4 group/item py-2.5"
  >
    {/* حاوية الأيقونة مع توهج عند الـ Hover */}
    <div className="w-9 h-9 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover/item:scale-110">
      {Icon && (
        <Icon className="w-full h-full text-brand-blue fill-current filter drop-shadow-[0_0_8px_rgba(59,130,246,0.3)] group-hover/item:drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]" />
      )}
    </div>

    {/* الخط الفاصل العمودي - ميزة التصميم الأساسية */}
    <div className="w-[1.5px] h-7 bg-brand-blue/20 group-hover/item:bg-brand-blue group-hover/item:shadow-[0_0_10px_#3b82f6] transition-all duration-300 self-start mt-1" />

    {/* نص الخدمة */}
    <p className="text-white text-sm md:text-[15px] font-medium leading-tight group-hover/item:text-brand-blue transition-colors pt-1.5">
      {text}
    </p>
  </motion.div>
);

// مكون البطاقة (المربع الكبير)
const ServiceCard = ({ service }) => {
  const titleMain = service.title.replace(' SERVICES', '');

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.12 } }
      }}
      className="p-10 md:p-14 rounded-[2.5rem] bg-[#0A1E3D] border border-white/5 hover:border-brand-blue/40 transition-all duration-700 shadow-2xl relative overflow-hidden group h-full flex flex-col"
    >
      {/* تأثيرات التوهج الخلفي (Glow) */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-blue/5 rounded-full blur-[100px] group-hover:bg-brand-blue/20 transition-all duration-1000" />
      <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-blue-500/5 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-all duration-1000" />

      {/* قسم العنوان */}
      <div className="mb-12 relative z-10">
        <h3 className="text-[26px] md:text-[32px] font-black text-brand-blue text-center tracking-tight uppercase leading-none">
          {titleMain} <br />
          <span className="text-brand-blue/70 font-bold text-[22px] md:text-[26px]">SERVICES</span>
        </h3>
        <div className="w-16 h-1 bg-brand-blue/20 mx-auto mt-4 rounded-full group-hover:w-24 group-hover:bg-brand-blue transition-all duration-500" />
      </div>

      {/* قائمة الخدمات الفرعية */}
      <div className="space-y-3 relative z-10 flex-grow">
        {service.items.map((item, idx) => (
          <ServiceItem key={idx} text={item.text} Icon={item.icon} />
        ))}
      </div>
    </motion.div>
  );
};

// المكون الرئيسي للشبكة
const ServicesGrid = () => {
  return (
    <section className="py-28 px-6 md:px-16 bg-[#05142B] relative overflow-hidden">
      {/* لمسة فنية: توهج خفيف في زاوية القسم */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[150px]" />
      </div>

      <SectionTitle
        title="Our Specialized Services"
        subtitle="Comprehensive solutions tailored to amplify your brand's presence."
        align="center"
        className="mb-20"
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10"
      >
        {SERVICES.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </motion.div>
    </section>
  );
};

export default React.memo(ServicesGrid);
