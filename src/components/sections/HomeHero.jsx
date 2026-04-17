import { useRef, memo, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default memo(function HomeHero() {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // روابط Cloudinary مع وسوم التحسين الذكي
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

  const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  // خفض التكبير الأقصى لتقليل الجهد على المعالج
  const rawScale = useTransform(scrollYProgress, [0, 0.6], [1, 20]);
  const layerScale = useSpring(rawScale, { stiffness: 100, damping: 30, mass: 0.1 });

  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [1, 0.5, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // إخفاء النص بمجرد اختفائه بصرياً لتوفير موارد الجهاز
  const textVisibility = useTransform(scrollYProgress, p => p > 0.45 ? "hidden" : "visible");

  return (
    <section ref={sectionRef} className="relative h-[300vh] bg-brand-dark">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

        {/* طبقة الفيديو الذكية */}
        <motion.div style={{ y: videoY }} className="absolute inset-0 w-full h-full">
          <video
            key={isMobile ? 'mobile-video' : 'desktop-video'} // الـ key ضروري لإجبار المتصفح على تبديل الفيديو عند تغيير حجم الشاشة
            src={isMobile ? VIDEO_MOBILE : VIDEO_DESKTOP}
            poster="/assets/hero-poster.jpg"
            preload="auto"
            className="w-full h-full object-cover scale-110"
            playsInline 
            muted 
            loop 
            autoPlay
          />
        </motion.div>

        {/* طبقة التعتيم الخلفية (Background Overlay) */}
        <motion.div
          className="absolute inset-0 z-10 bg-brand-dark pointer-events-none"
          style={{ opacity: overlayOpacity }}
        />

        {/* حاوية النص والحركات */}
        <motion.div
          className="relative z-20 flex flex-col items-center justify-center pointer-events-none will-change-transform transform-gpu"
          style={{
            scale: layerScale,
            opacity: textOpacity,
            visibility: textVisibility,
            transformOrigin: "center center"
          }}
        >
          <h1
            className="text-white text-center font-black tracking-tighter"
            style={{ fontSize: 'clamp(3rem, 12vw, 13rem)', filter: 'blur(0px)' }}
          >
            Shape it <span className="text-brand-blue">ALL!</span>
          </h1>
          <p className="mt-8 text-white/60 text-lg md:text-2xl text-center max-w-3xl font-medium leading-relaxed px-4">
            In 2017, the TRND made its debut in the industry. <br className="hidden md:block" />
            In 2024, a new leadership acquisition marked a pivotal moment.
          </p>
        </motion.div>

        {/* التأثيرات الجمالية (Glow effects) */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-brand-dark/30 pointer-events-none" />
        <div className="absolute top-[20%] right-[10%] w-40 h-40 bg-brand-blue/30 rounded-full blur-[100px] pointer-events-none mix-blend-screen animate-[pulse_3s_ease-in-out_infinite]" />
        <div className="absolute bottom-[20%] left-[10%] w-72 h-72 bg-brand-blue/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-[pulse_5s_ease-in-out_infinite]" />

      </div>
    </section>
  );
});
