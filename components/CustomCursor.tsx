import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Only run on non-touch devices
    if (matchMedia('(pointer:coarse)').matches) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0,
        ease: "none"
      });
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3, // "Butter" lag
        ease: "power2.out"
      });
    };

    const onHoverStart = () => {
      setIsHovering(true);
      // Using #A1A1AA (Zinc 400) to match the new 'sand' palette
      gsap.to(follower, { scale: 3, opacity: 0.2, backgroundColor: '#A1A1AA', duration: 0.3 });
      gsap.to(cursor, { scale: 0.5, opacity: 0, duration: 0.3 });
    };

    const onHoverEnd = () => {
      setIsHovering(false);
      gsap.to(follower, { scale: 1, opacity: 1, backgroundColor: 'transparent', duration: 0.3 });
      gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3 });
    };

    document.addEventListener('mousemove', onMouseMove);

    // Add listeners to all interactive elements
    const hoverables = document.querySelectorAll('a, button, input, textarea, select, .hover-trigger');
    hoverables.forEach(el => {
      el.addEventListener('mouseenter', onHoverStart);
      el.addEventListener('mouseleave', onHoverEnd);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      hoverables.forEach(el => {
        el.removeEventListener('mouseenter', onHoverStart);
        el.removeEventListener('mouseleave', onHoverEnd);
      });
    };
  }, []);

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-[10000] mix-blend-difference">
      {/* Main dot */}
      <div 
        ref={cursorRef} 
        className="absolute top-0 left-0 w-2 h-2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"
      />
      {/* Follower circle */}
      <div 
        ref={followerRef}
        className="absolute top-0 left-0 w-8 h-8 border border-white rounded-full -translate-x-1/2 -translate-y-1/2 transition-colors"
      />
    </div>
  );
};

export default CustomCursor;