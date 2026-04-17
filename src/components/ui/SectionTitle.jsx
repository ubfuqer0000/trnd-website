import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

const SectionTitle = ({
  tag,
  title,
  subtitle,
  align = 'center',
  className,
  tagDelay = 0,
  titleDelay = 0.1,
  lineDelay = 0.2,
  subtitleDelay = 0.3
}) => {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <div className={cn("max-w-4xl relative", alignClasses[align], className)}>
      {tag && (
        <motion.span
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ ...itemVariants, visible: { ...itemVariants.visible, transition: { ...itemVariants.visible.transition, delay: tagDelay } } }}
          className="section-tag"
        >
          {tag}
        </motion.span>
      )}

      {title && (
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ ...itemVariants, visible: { ...itemVariants.visible, transition: { ...itemVariants.visible.transition, delay: titleDelay } } }}
          className="section-title gradient-text mt-2"
        >
          {title}
        </motion.h2>
      )}

      {title && (
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: lineDelay, ease: "easeOut" }}
          className={cn("blue-line mt-4 origin-left", align === 'center' && "mx-auto origin-center")}
        />
      )}

      {subtitle && (
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ ...itemVariants, visible: { ...itemVariants.visible, transition: { ...itemVariants.visible.transition, delay: subtitleDelay } } }}
          className="mt-6 text-white/70 text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default React.memo(SectionTitle);
