
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CicloInversor from './CicloInversor';
import Reveal from './Reveal';
import { ViewState } from '../App';

gsap.registerPlugin(ScrollTrigger);

interface ServicesProps {
  onNavigate?: (view: ViewState) => void;
  onContactClick?: () => void;
}

const detailedCards = [
  {
    id: "1",
    label: "VENDER",
    view: 'sell' as ViewState,
    title: "El arte de VENDER tu propiedad",
    desc: "Gestión integral en la venta de inmuebles de lujo. Estrategias de valoración, comercialización y posicionamiento. Máxima visibilidad a través de nuestra red de compradores selectos.",
    image: "/images/foto4.jpg"
  },
  {
    id: "2",
    label: "COMPRAR",
    view: 'buy' as ViewState,
    title: "Saber qué, cuándo y cómo COMPRAR",
    desc: "Asesoramiento exclusivo en la compra de propiedades de lujo. Acceso a un catálogo premium y acompañamiento completo. Seguridad, discreción y eficiencia en cada adquisición.",
    image: "/images/foto5.jpg"
  },
  {
    id: "3",
    label: "ALQUILAR",
    view: 'rent' as ViewState,
    title: "ALQUILAR y gestionar tu patrimonio en rentabilidad",
    desc: "Alquilar una propiedad. Asesoramiento en inversiones estratégicas y rentables. Análisis de mercado y respaldo legal en cada transacción. Inversiones seguras y eficientes en el sector de lujo.",
    image: "/images/foto6.jpg"
  },
  {
    id: "4",
    label: "CREAR",
    view: 'create' as ViewState,
    title: "CREAR: nuestro valor diferencial",
    desc: "La fusión e integración de todos los departamentos internos de este grupo inmobiliario, en los que se desarrollan proyectos de arquitectura, construcción e inversión bajo nuestra gestión integral. “Lo que diferencia a Lahuerta Real Estate de una agencia inmobiliaria convencional”",
    image: "/images/foto7.jpg"
  }
];

const Services: React.FC<ServicesProps> = ({ onNavigate, onContactClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Individual Service Items Animation
      const items = gsap.utils.toArray('.service-item');
      items.forEach((item: any) => {
        const header = item.querySelector('.service-item-header');
        const img = item.querySelector('.service-img-wrapper');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });

        tl.from(header, {
          y: 30,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        })
        .from(img, {
          y: 40,
          opacity: 0,
          scale: 0.98,
          duration: 1.2,
          ease: "power2.out"
        }, "-=0.7");
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="servicios" className="bg-white overflow-hidden pb-16 md:pb-32" ref={containerRef}>
      
      {/* SECTION 1: Conceptual Cycle and Manifesto */}
      <div className="pt-20 md:pt-40 pb-16 md:pb-24 container mx-auto px-8 md:px-12">
        
        {/* Superior Label */}
        <div className="mb-16 md:mb-32 lg:pl-0 text-center lg:text-left flex items-center gap-6">
           <span className="text-[10px] md:text-sm font-bold uppercase tracking-[0.8em] text-stone-300 whitespace-nowrap">NUESTROS SERVICIOS</span>
           <div className="flex-grow h-[1px] bg-stone-50 hidden lg:block"></div>
        </div>

        {/* Triple Column Layout: NOW Double Column Layout - Manifesto Text | Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Column 1: Manifest Text Block (Previously Column 2) */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <Reveal staggerChildren={0.25} className="h-full">
              <div className="flex flex-col justify-between h-full space-y-8 lg:space-y-6">
                <h3 className="text-xl md:text-5xl font-medium text-navy-900 leading-tight tracking-tight">
                  El ciclo de una inversión inmobiliaria.
                </h3>
                
                <p className="text-base md:text-xl lg:text-2xl text-stone-500 font-light leading-relaxed">
                  Lahuerta Real Estate organiza y presta sus servicios entendiendo las fases del ciclo que recorre un inversor en una operación.
                </p>

                <div className="border-l-2 border-sand-200 pl-6 py-2">
                  <p className="text-lg md:text-2xl font-serif italic text-navy-900">
                    “Hacemos para nuestros clientes exactamente lo mismo que hacemos para nosotros en nuestras inversiones y decisiones personales”
                  </p>
                </div>

                <p className="text-base md:text-xl lg:text-2xl text-stone-500 font-light leading-relaxed">
                  Hablamos de este ciclo desde la experiencia. Los servicios que ofrecemos a nuestros clientes existen porque antes los hemos aplicado con nosotros mismos.
                </p>

                <div className="border-l-2 border-sand-200 pl-6 py-2">
                  <p className="text-lg md:text-2xl font-serif italic text-navy-900">
                    “Hemos comprado. Hemos diseñado y reformado. Hemos gestionado alquileres y optimizado rentabilidades. Y hemos vendido propiedades. Las nuestras y las de terceros."
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Column 2: Diagram Column (Previously Column 3) */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-center justify-center overflow-hidden">
            <CicloInversor />
            <div className="mt-8 text-center px-4">
               <p className="text-[10px] font-bold tracking-[0.4em] text-stone-300 uppercase leading-relaxed">
                 "Y volver a empezar cuando surge una nueva oportunidad."
               </p>
            </div>
          </div>

        </div>
      </div>

      {/* Visual Separator for Distinction */}
      <div className="container mx-auto px-8 md:px-12 mb-24 md:mb-32">
        <div className="w-full h-[1px] bg-stone-100"></div>
      </div>

      {/* SECTION 2: Detailed Services Cards List */}
      <div className="container mx-auto px-8 md:px-12">
        
        {/* Optional Subtitle for the detailed list */}
        <div className="mb-16">
           <span className="text-[10px] font-bold tracking-[0.4em] text-sand-400 uppercase">DETALLES POR ÁREA</span>
        </div>

        <div className="flex flex-col gap-20 md:gap-24">
          {detailedCards.map((step, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div key={step.id} className="service-item w-full flex flex-col md:flex-row gap-10 md:gap-16 items-center border-t border-stone-50 pt-16 first:border-t-0 first:pt-0">
                
                <div className={`service-item-header w-full md:w-8/12 flex flex-col order-2 ${isReversed ? 'md:order-2 md:items-end md:text-right md:ml-auto' : 'md:order-1 items-start text-left'}`}>
                  <h3 className="text-xl md:text-5xl font-medium text-navy-900 mb-6 tracking-tight leading-tight">
                      {step.title}
                  </h3>
                  <p className={`text-stone-400 font-light text-base md:text-xl lg:text-2xl leading-relaxed max-w-3xl mb-10 ${isReversed ? 'md:ml-auto' : ''}`}>
                      {step.desc}
                  </p>
                  <button 
                    onClick={() => onNavigate?.(step.view)}
                    className="flex items-center gap-6 group w-fit py-2"
                  >
                        {isReversed && <div className="hidden md:block w-8 h-[1px] bg-navy-900 group-hover:bg-sand-500 group-hover:w-16 transition-all duration-500"></div>}
                        <span className="text-xs font-bold tracking-[0.3em] uppercase text-navy-900 group-hover:text-sand-500 transition-colors">Solicitar Consultoría</span>
                        {!isReversed && <div className="hidden md:block w-8 h-[1px] bg-navy-900 group-hover:bg-sand-500 group-hover:w-16 transition-all duration-500"></div>}
                  </button>
                </div>

                <div className={`service-img-wrapper w-full md:w-3/12 order-1 ${isReversed ? 'md:order-1' : 'md:order-2'}`}>
                   <div className="w-full aspect-square overflow-hidden rounded-sm shadow-xl shadow-navy-900/[0.03] border border-stone-100">
                      <img 
                        src={step.image} 
                        alt={step.title} 
                        className="w-full h-full object-cover transition-all duration-1000 hover:scale-105"
                      />
                   </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
