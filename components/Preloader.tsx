
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: onComplete
    });

    // Estado inicial del logo
    gsap.set(logoRef.current, { 
      opacity: 0, 
      scale: 0.9,
      filter: 'blur(10px)'
    });

    // Secuencia de animación
    tl.to(logoRef.current, {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      duration: 1.2,
      ease: "power3.out",
      delay: 0.3
    })
    .to(logoRef.current, {
      opacity: 0,
      scale: 1.05,
      duration: 0.8,
      ease: "power2.inOut",
      delay: 0.8
    })
    .to(containerRef.current, {
      yPercent: -100,
      duration: 1.2,
      ease: "power4.inOut"
    }, "-=0.2");

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-navy-900 flex flex-col items-center justify-center pointer-events-none"
    >
      {/* Contenedor del Logotipo */}
      <div className="relative flex flex-col items-center">
        <img 
          ref={logoRef}
          src="/images/logo_blanco.png" 
          alt="Lahuerta Real Estate" 
          className="w-56 md:w-96 h-auto object-contain"
          onError={(e) => {
            // Fallback por si la imagen no existe aún
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
        
        {/* Indicador sutil de carga debajo del logo */}
        <div className="absolute -bottom-16 overflow-hidden w-40 h-[1px] bg-white/10">
           <div className="w-full h-full bg-white/40 animate-[loading_2s_infinite_linear]"></div>
        </div>
      </div>

      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default Preloader;
