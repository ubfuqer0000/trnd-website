import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  variant = 'primary', 
  className,
  to,
  href,
  onClick,
  type = "button",
  ...props 
}) => {
  const baseClasses = "inline-flex items-center justify-center font-semibold tracking-wide transition-all duration-300 relative overflow-hidden group rounded-lg";
  
  const variants = {
    primary: "bg-brand-blue text-white hover:bg-blue-600 px-8 py-4 text-base",
    outline: "border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-8 py-4 text-base",
    ghost: "text-white/70 hover:text-brand-blue bg-transparent px-4 py-2",
  };

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    className: cn(baseClasses, variants[variant], className),
    ...props
  };

  if (to) {
    const MotionLink = motion(Link);
    return (
      <MotionLink to={to} {...motionProps}>
        <span className="relative z-10 flex items-center justify-center">
          {children}
        </span>
      </MotionLink>
    );
  }

  const Component = motion[href ? 'a' : 'button'];
  const linkProps = href ? { href } : { type, onClick };

  return (
    <Component {...linkProps} {...motionProps}>
      <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>
    </Component>
  );
};

export default React.memo(Button);
