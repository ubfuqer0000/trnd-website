import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useSpring(0, { stiffness: 500, damping: 28, mass: 0.5 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 28, mass: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleHover = () => setIsHovered(true);
    const handleUnhover = () => setIsHovered(false);

    window.addEventListener('mousemove', handleMouseMove);
    
    // نحدد جميع العناصر التفاعلية
    const interactiveElements = document.querySelectorAll('a, button, .interactive, p, h1, h2, h3, span');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleUnhover);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      // تم حذف mix-blend-difference وأضفنا opacity خفيفة لكي لا يغطي النص تماماً
      className="fixed top-0 left-0 w-6 h-6 bg-brand-blue rounded-full pointer-events-none z-[9999] hidden md:block"
      style={{
        x: mouseX,
        y: mouseY,
        translateX: '-50%',
        translateY: '-50%',
        scale: isHovered ? 2.5 : 1,
        // أضفنا شفافية بسيطة عند الهوفر ليعطي تأثيراً جمالياً خلف النص
        opacity: isHovered ? 0.6 : 1,
      }}
    />
  );
};

export default CustomCursor;