import { useScroll, useTransform } from 'framer-motion';

/**
 * Custom Hook: useMaskReveal
 * Enhances Code Architecture by abstracting messy scroll animation logic from UI components.
 * Standard practice in Staff-level React projects.
 *
 * @param {object} containerRef - React ref attached to the tall scrolling container
 */
export const useMaskReveal = (containerRef) => {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Massive text scaling for the cutout mask effect (Hardware accelerated)
  const maskScale = useTransform(scrollYProgress, [0, 0.4], [1, 50]);
  
  // Fade out text rapidly as it expands to open up the viewport
  const maskOpacity = useTransform(scrollYProgress, [0.1, 0.4], [1, 0]);
  
  // Fade out the solid dark overlay to reveal the video behind it seamlessly
  const overlayOpacity = useTransform(scrollYProgress, [0.2, 0.5], [1, 0]);

  // Advanced feature: Subtle Parallax effect for the background video (-20% upward movement)
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return { maskScale, maskOpacity, overlayOpacity, videoY };
};
