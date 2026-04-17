import { useRef, memo, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default memo(function HomeHero() {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

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

  // 1. خفضنا التكبير الأقصى لـ 20 (كافية جداً لتجاوز الشاشة بدون حرق كرت الشاشة)
  const rawScale = useTransform(scrollYProgress, [0, 0.6], [1, 20]);
  const layerScale = useSpring(rawScale, { stiffness: 100, damping: 30, mass: 0.1 });

  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [1, 0.5, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // 2. خدعة العباقرة: إخفاء النص كلياً من محرك المتصفح بمجرد أن يختفي بصرياً
  // هذا يفرغ ذاكرة كرت الشاشة فوراً ويمنع الكراش عند الصعود
  const textVisibility = useTransform(scrollYProgress, p => p > 0.45 ? "hidden" : "visible");

  return (
    <section ref={sectionRef} className="relative h-[300vh] bg-brand-dark">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

        {/* Video */}
        <motion.div style={{ y: videoY }} className="absolute inset-0 w-full h-full">
          <video
            key={isMobile ? 'mobile-video' : 'desktop-video'}
            src={isMobile ? '/assets/Showreel.t.mp4' : '/assets/Showreel.c.mp4'}
            poster="/assets/hero-poster.jpg"
            preload="auto"
            className="w-full h-full object-cover scale-110"
            playsInline muted loop autoPlay
          />
        </motion.div>

        {/* 3. التعديل الأهم: فصل طبقة الخلفية الداكنة! 
            هذه الطبقة تختفي تدريجياً فقط ولا يحصل لها Scale أبداً */}
        <motion.div
          className="absolute inset-0 z-10 bg-brand-dark pointer-events-none"
          style={{ opacity: overlayOpacity }}
        />

        {/* 4. حاوية النص: لا تحتوي على inset-0، حجمها على قد النص فقط */}
        <motion.div
          className="relative z-20 flex flex-col items-center justify-center pointer-events-none will-change-transform transform-gpu"
          style={{
            scale: layerScale,
            opacity: textOpacity,
            visibility: textVisibility, // تطبيق خدعة التفريغ هنا
            transformOrigin: "center center"
          }}
        >
          <h1
            className="text-white text-center font-black tracking-tighter"
            style={{ fontSize: 'clamp(4rem, 15vw, 13rem)', filter: 'blur(0px)' }}
          >
            Shape it <span className="text-brand-blue">ALL!</span>
          </h1>
          <p className="mt-8 text-white/60 text-lg md:text-2xl text-center max-w-3xl font-medium leading-relaxed">
            In 2017, the TRND made its debut in the industry. <br />
            In 2024, a new leadership acquisition marked a pivotal moment.
          </p>
        </motion.div>

        {/* الجماليات (Accent glows) */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-brand-dark/30 pointer-events-none" />
        <div className="absolute top-[20%] right-[10%] w-40 h-40 bg-brand-blue/30 rounded-full blur-[100px] pointer-events-none mix-blend-screen animate-[pulse_3s_ease-in-out_infinite]" />
        <div className="absolute bottom-[20%] left-[10%] w-72 h-72 bg-brand-blue/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-[pulse_5s_ease-in-out_infinite]" />

      </div>
    </section>
  );
});
