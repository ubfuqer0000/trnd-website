import React, { useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  // استخدمنا السبرينج للحركة السلسة فقط
  const mouseX = useSpring(0, { stiffness: 500, damping: 28, mass: 0.5 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 28, mass: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      // الكلاسات الأساسية: حجم ثابت (w-5 h-5) ولون البراند
      className="fixed top-0 left-0 w-5 h-5 bg-[#3B6AFF] rounded-full pointer-events-none z-[9999] hidden md:block"
      style={{
        x: mouseX,
        y: mouseY,
        translateX: '-50%',
        translateY: '-50%',
        // حجم ثابت 1 لا يتغير أبداً
        scale: 1,
        opacity: 1,
      }}
    />
  );
};

export default CustomCursor;