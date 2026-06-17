
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Text Reveal Animation
      const text = textRef.current;
      if (text) {
        gsap.fromTo(text, 
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: text,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      id="sobre-nosotros" 
      className="relative bg-stone-100 py-20 md:py-40 overflow-hidden flex items-start"
    >
      <div className="container mx-auto px-8 md:px-12 relative z-10">
        <div className="flex flex-col w-full">
          
          {/* Label aligned to the left */}
          <div className="mb-12 md:mb-24">
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-sand-400">
              NOSOTROS
            </span>
          </div>

          {/* Manifesto Text - Unificado con estilo de Story (font-light, text-justify, leading-relaxed) */}
          <div className="w-full max-w-4xl mx-auto">
            <h2 
              ref={textRef}
              className="text-base md:text-xl lg:text-2xl font-light text-navy-900 leading-relaxed text-justify tracking-wide"
            >
              Lahuerta Real Estate (LRE) es una firma formada por arquitectos y consultores inmobiliarios expertos en ofrecer soluciones creativas y estratégicas para maximizar y potenciar el valor que reciben nuestros clientes en cualquier actuación inmobiliaria.
            </h2>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
