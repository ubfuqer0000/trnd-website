import { useRef, memo, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default memo(function HomeHero() {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const VIDEO_DESKTOP = "https://res.cloudinary.com/dzzrrq9mo/video/upload/f_auto,q_auto/v1776429538/Showreel.c_mx2cnd.mp4";
  const VIDEO_MOBILE = "https://res.cloudinary.com/dzzrrq9mo/video/upload/f_auto,q_auto/v1776429650/Showreel.t_tnporz.mp4";

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end']
  });

  const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']); 

  const rawScale = useTransform(scrollYProgress, [0, 0.6], [1, 20]);
  const layerScale = useSpring(rawScale, { stiffness: 100, damping: 30, mass: 0.1 });

  const textOpacity = useTransform(scrollYProgress, [0, 0.15, 0.35], [1, 0.5, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  const textVisibility = useTransform(scrollYProgress, p => p > 0.4 ? "hidden" : "visible");

  return (
    <section 
      id="home" 
      ref={sectionRef} 
      className="relative h-[250vh] md:h-[300vh] bg-brand-dark"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

        <motion.div style={{ y: videoY }} className="absolute inset-0 w-full h-full">
          <video
            key={isMobile ? 'mobile-video' : 'desktop-video'}
            src={isMobile ? VIDEO_MOBILE : VIDEO_DESKTOP}
            poster="/assets/hero-poster.jpg"
            preload="auto"
            className="w-full h-full object-cover md:scale-110 scale-105"
            playsInline 
            muted 
            loop 
            autoPlay
          />
        </motion.div>

        <motion.div
          className="absolute inset-0 z-10 bg-brand-dark/90 md:bg-brand-dark pointer-events-none"
          style={{ opacity: overlayOpacity }}
        />

        <motion.div
          className="relative z-20 flex flex-col items-center justify-center pointer-events-none will-change-transform transform-gpu px-6"
          style={{
            scale: layerScale,
            opacity: textOpacity,
            visibility: textVisibility,
            transformOrigin: "center center"
          }}
        >
          <h1
            className="text-white text-center font-black tracking-tighter leading-[0.9]"
            style={{ fontSize: 'clamp(3.5rem, 10vw, 13rem)' }}
          >
            Shape it <span className="text-brand-blue block md:inline">ALL!</span>
          </h1>
        </motion.div>

        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-brand-dark/50 md:to-brand-dark/30 pointer-events-none" />
        
        {/* Decorative Blur Orbs */}
        <div className="absolute top-[10%] right-[5%] md:top-[20%] md:right-[10%] w-32 md:w-40 h-32 md:h-40 bg-brand-blue/30 rounded-full blur-[80px] md:blur-[100px] pointer-events-none mix-blend-screen animate-[pulse_3s_ease-in-out_infinite]" />
        <div className="absolute bottom-[10%] left-[5%] md:bottom-[20%] md:left-[10%] w-48 md:w-72 h-48 md:h-72 bg-brand-blue/20 rounded-full blur-[90px] md:blur-[120px] pointer-events-none mix-blend-screen animate-[pulse_5s_ease-in-out_infinite]" />

      </div>
    </section>
  );
});