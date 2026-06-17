
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface RevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  duration?: number;
  y?: number;
  staggerChildren?: number;
  className?: string;
  fullHeight?: boolean;
}

const Reveal: React.FC<RevealProps> = ({ 
  children, 
  width = "fit-content", 
  delay = 0, 
  duration = 0.8,
  y = 20,
  staggerChildren,
  className = "",
  fullHeight = false
}) => {
  
  if (staggerChildren !== undefined) {
    return (
      <motion.div
        className={className}
        style={{ width, height: fullHeight ? "100%" : "auto" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px" }}
        variants={{
          visible: {
            transition: {
              staggerChildren: staggerChildren,
              delayChildren: delay
            }
          }
        }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={className} style={{ position: "relative", width, overflow: "visible", height: fullHeight ? "100%" : "auto" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: y },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ 
            duration: duration, 
            delay: delay, 
            ease: [0.16, 1, 0.3, 1] 
        }}
        style={{ height: fullHeight ? "100%" : "auto" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
