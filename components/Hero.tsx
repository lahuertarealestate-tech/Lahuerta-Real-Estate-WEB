
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleLinesRef = useRef<(HTMLSpanElement | null)[]>([]);
  const textRef = useRef<HTMLDivElement>(null);
  const topTextRef = useRef<HTMLDivElement>(null);
  const VIDEO_SRC = "/videos/fondocasanovarealestate.mp4"; 
  const VIDEO_POSTER = "/images/fondocasanovarealestate.jpg";

  useEffect(() => {
    // Video Autoplay safety
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) playPromise.catch(() => {});
    }

    // GSAP Animation
    const ctx = gsap.context(() => {
      // 0. Top Text Reveal
      gsap.fromTo(topTextRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.2 }
      );

      // 1. Text Reveal (Staggered Lines)
      gsap.to(titleLinesRef.current, {
        y: 0,
        opacity: 1,
        duration: 1.5,
        stagger: 0.2,
        ease: "power4.out",
        delay: 0.5 
      });

      // 2. Body Text Reveal
      gsap.fromTo(textRef.current, 
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          ease: "power2.out", 
          delay: 1.2 
        }
      );

      // 4. Parallax Effect on Video
      gsap.to(videoRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el: HTMLSpanElement | null) => {
    if (el && !titleLinesRef.current.includes(el)) {
      titleLinesRef.current.push(el);
    }
  };

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-navy-900">
      {/* Background Video with Parallax Wrapper */}
      <div className="absolute inset-0 z-0 h-[120%] -top-[10%]">
        <video 
          ref={videoRef}
          key={VIDEO_SRC}
          className="w-full h-full object-cover opacity-80"
          autoPlay loop muted playsInline preload="auto"
          poster={VIDEO_POSTER}
        >
          <source src={VIDEO_SRC} type="video/mp4" />
        </video>
        {/* Overlay Dark Blue/Black gradient */}
        <div className="absolute inset-0 bg-navy-900/20 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent opacity-80" />
      </div>

      {/* Content Layout */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 h-full flex flex-col">
        
        {/* CENTERED: Title & Location */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center z-20 pointer-events-none">
            <div ref={topTextRef} className="mb-6 md:mb-10 px-4">
                <span className="text-white/70 text-[10px] md:text-xl font-bold tracking-[0.35em] uppercase block">
                    M A D R I D · E S P A Ñ A
                </span>
            </div>

            <div className="max-w-7xl mx-auto px-4">
              <h1 className="text-4xl md:text-6xl lg:text-8xl font-sans font-light text-white leading-none tracking-tight flex flex-wrap justify-center gap-x-3 md:gap-x-6">
                <span className="reveal-text-container inline-block">
                   <span ref={addToRefs} className="reveal-text-item">Consultora</span>
                </span>
                <span className="reveal-text-container inline-block">
                   <span ref={addToRefs} className="reveal-text-item">Inmobiliaria</span>
                </span>
              </h1>
            </div>
        </div>

        {/* BOTTOM CENTERED: Unified Block with specific line requirements */}
        <div className="mt-auto pb-20 md:pb-24 z-20 flex flex-col items-center w-full">
            <div ref={textRef} className="text-white text-center px-6 md:px-12 flex flex-col items-center w-full">
              <div className="text-base md:text-xl lg:text-2xl font-light tracking-wide leading-relaxed">
                {/* Primera parte en negrita */}
                <span className="font-bold block mb-4">
                  Expertos en la compra y venta de propiedades inmobiliarias.
                </span>
                
                {/* Segunda parte dividida exactamente en dos líneas largas */}
                <span className="opacity-90 block max-w-[1200px] mx-auto whitespace-normal md:whitespace-pre-line">
                  Somos la Consultora Inmobiliaria dirigida por arquitectos a la que consultas, antes de tomar {"\n"}
                  una decisión, cuando tu objetivo es garantizar tu tranquilidad y obtener el máximo valor.
                </span>
              </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
