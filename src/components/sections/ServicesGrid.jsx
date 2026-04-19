import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../../constants/data';
import SectionTitle from '../ui/SectionTitle';

const ServiceItem = ({ text, Icon }) => (
  <motion.div className="flex items-start gap-3 group/item py-2">
    <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
      {Icon && <Icon className="w-full h-full text-brand-blue fill-current filter drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]" />}
    </div>
    <div className="w-[1px] h-5 bg-brand-blue/20 mt-1.5" />
    <p className="text-white/80 text-sm font-medium leading-tight pt-1 group-hover/item:text-brand-blue transition-colors">
      {text}
    </p>
  </motion.div>
);

const ServiceCard = ({ service }) => {
  const titleMain = service.title.replace(' SERVICES', '');
  return (
    <motion.div 
      whileTap={{ scale: 0.98 }} // رد فعل عند اللمس للجوال
      className="flex-shrink-0 w-[85vw] md:w-auto snap-center p-8 md:p-14 rounded-[2rem] bg-[#0A1E3D] border border-white/5 relative overflow-hidden group flex flex-col h-full"
    >
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-blue/5 rounded-full blur-[80px]" />
      <div className="mb-8 relative z-10 text-center">
        <h3 className="text-2xl md:text-3xl font-black text-brand-blue uppercase leading-none tracking-tighter">
          {titleMain} <br />
          <span className="text-brand-blue/50 font-bold text-lg md:text-xl">SERVICES</span>
        </h3>
      </div>
      <div className="space-y-2 relative z-10 flex-grow">
        {service.items.map((item, idx) => (
          <ServiceItem key={idx} text={item.text} Icon={item.icon} />
        ))}
      </div>
    </motion.div>
  );
};

const ServicesGrid = () => {
  return (
    <section className="py-20 md:py-32 bg-[#05142B] relative overflow-hidden">
      <SectionTitle 
        title="Our Specialized Services" 
        subtitle="Comprehensive solutions tailored to amplify your brand's presence."
        align="center" 
        className="mb-12 md:mb-20 px-6" 
      />

      {/* حاوية السكرول الجانبي للجوال وشبكة للابتوب */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex md:grid md:grid-cols-2 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar pb-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
      
      {/* مؤشر سحب بسيط يظهر فقط في الجوال */}
      <div className="flex justify-center gap-2 md:hidden mt-4">
        <div className="w-12 h-1 bg-brand-blue/20 rounded-full overflow-hidden">
          <motion.div 
            animate={{ x: [-20, 20] }} 
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", repeatType: "mirror" }}
            className="w-4 h-full bg-brand-blue" 
          />
        </div>
      </div>
    </section>
  );
};

export default React.memo(ServicesGrid);
