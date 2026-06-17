
import React from 'react';
import { ArrowRight, Layers, Ruler, TrendingUp } from 'lucide-react';
import Reveal from './Reveal';

interface CreateSectionProps {
  onContactClick?: () => void;
}

const CreateSection: React.FC<CreateSectionProps> = ({ onContactClick }) => {
  return (
    <section className="bg-white min-h-screen pt-28 md:pt-32 pb-24 selection:bg-navy-900 selection:text-white">
      
      {/* 1. HERO SECTION */}
      <div className="container mx-auto px-6 md:px-12 mb-24 md:mb-40">
        <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden rounded-sm shadow-sm bg-navy-900">
           {/* Imagen de fondo oscura/arquitectónica */}
           <img 
              src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1920&auto=format&fit=crop" 
              alt="Arquitectura y Planos" 
              className="absolute inset-0 w-full h-full object-cover opacity-60"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent"></div>
           
           <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full">
              <Reveal>
                <h1 className="text-5xl md:text-9xl font-serif text-white tracking-tight mb-4 md:mb-6">
                  CREAR
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="w-24 h-[1px] bg-white mb-6 md:mb-8"></div>
                <h2 className="text-white/90 text-sm md:text-xl font-light tracking-[0.2em] uppercase max-w-xl leading-relaxed">
                  Arquitectura, Reformas e Inversiones
                </h2>
              </Reveal>
           </div>
        </div>
      </div>

      {/* 2. INTRODUCCIÓN - Texto Destacado */}
      <div className="container mx-auto px-6 md:px-12 mb-32 md:mb-48">
        <Reveal>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl md:text-4xl font-light text-navy-900 leading-[1.4] md:leading-[1.4] font-serif italic">
              "Diseñamos, desarrollamos y gestionamos proyectos inmobiliarios de principio a fin. Centralizamos todo el proceso bajo una única operativa para que el cliente no tenga que coordinar agentes, técnicos, constructores ni proveedores."
            </p>
          </div>
        </Reveal>
      </div>

      {/* 3. EL PROCESO - Layout 2 columnas */}
      <div className="bg-stone-50 py-24 md:py-40 mb-24 md:mb-40">
        <div className="container mx-auto px-6 md:px-12">
           <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start">
              <div className="md:w-1/3">
                 <Reveal>
                    <span className="text-[10px] font-bold tracking-[0.4em] text-sand-400 uppercase block mb-6">
                      EL PROCESO
                    </span>
                    <h3 className="text-3xl md:text-5xl font-light text-navy-900 leading-tight">
                      Gestión Integral <br/> del Activo
                    </h3>
                 </Reveal>
              </div>
              <div className="md:w-2/3">
                 <Reveal delay={0.2}>
                    <p className="text-stone-500 font-light text-lg md:text-2xl leading-relaxed border-l border-navy-900 pl-8 md:pl-12">
                      Partimos de la identificación de oportunidades —compra para vivir o invertir— y continuamos con el análisis del activo, el diseño arquitectónico, la reforma o construcción, y la puesta en valor final, ya sea mediante venta o rentabilidad en alquiler.
                    </p>
                 </Reveal>
                 
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 md:mt-24">
                    <Reveal delay={0.3} y={30}>
                       <div className="group">
                          <TrendingUp className="text-navy-900 mb-6" size={32} strokeWidth={1} />
                          <h4 className="text-sm font-bold uppercase tracking-widest text-navy-900 mb-3">01. Identificación</h4>
                          <p className="text-sm text-stone-500 font-light">Análisis de mercado y compra estratégica.</p>
                       </div>
                    </Reveal>
                    <Reveal delay={0.4} y={30}>
                       <div className="group">
                          <Ruler className="text-navy-900 mb-6" size={32} strokeWidth={1} />
                          <h4 className="text-sm font-bold uppercase tracking-widest text-navy-900 mb-3">02. Transformación</h4>
                          <p className="text-sm text-stone-500 font-light">Diseño arquitectónico y ejecución de obra.</p>
                       </div>
                    </Reveal>
                    <Reveal delay={0.5} y={30}>
                       <div className="group">
                          <Layers className="text-navy-900 mb-6" size={32} strokeWidth={1} />
                          <h4 className="text-sm font-bold uppercase tracking-widest text-navy-900 mb-3">03. Puesta en Valor</h4>
                          <p className="text-sm text-stone-500 font-light">Venta final o gestión de rentabilidad.</p>
                       </div>
                    </Reveal>
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* 4. NUESTRO VALOR - Sección Oscura */}
      <div className="bg-navy-900 py-24 md:py-40 text-white mb-24 md:mb-40">
         <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-5xl mx-auto text-center">
               <Reveal>
                  <span className="text-[10px] font-bold tracking-[0.4em] text-white/50 uppercase block mb-8">
                    NUESTRO VALOR
                  </span>
                  <h3 className="text-4xl md:text-7xl font-serif mb-12">Visión Unificada</h3>
                  <div className="w-full h-[1px] bg-white/20 mb-12"></div>
                  <p className="text-white/80 font-light text-lg md:text-2xl leading-relaxed max-w-3xl mx-auto">
                    Nuestro valor está en unir visión inmobiliaria, arquitectura y ejecución en un solo equipo. Esto se traduce en mejores decisiones, menos errores, ahorro de tiempo y costes, y un resultado coherente, cuidado y rentable.
                  </p>
               </Reveal>
            </div>
         </div>
      </div>

      {/* 5. METODOLOGÍA Y CIERRE */}
      <div className="container mx-auto px-6 md:px-12 mb-24 md:mb-32">
         <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
               <Reveal width="100%">
                  <div className="aspect-[4/5] bg-stone-100 overflow-hidden">
                     <img 
                        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop" 
                        alt="Detalle Arquitectura" 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                     />
                  </div>
               </Reveal>
            </div>
            <div className="md:w-1/2 md:pl-12">
               <Reveal staggerChildren={0.2}>
                  <h4 className="text-[10px] font-bold tracking-[0.4em] text-stone-300 uppercase mb-8">
                     METODOLOGÍA
                  </h4>
                  <p className="text-navy-900 font-light text-lg md:text-xl leading-relaxed mb-12">
                     No gestionamos partes sueltas: orquestamos todo el proyecto, con un único interlocutor, una estrategia clara y un objetivo definido desde el primer día.
                  </p>
                  
                  <div className="py-8 border-t border-b border-stone-100 mb-12">
                     <p className="text-2xl md:text-4xl font-serif text-navy-900 italic">
                       "Creamos propiedades con sentido, valor y futuro."
                     </p>
                  </div>

                  <button 
                     onClick={onContactClick}
                     className="group flex items-center gap-4 bg-navy-900 text-white px-8 py-4 md:px-10 md:py-5 hover:bg-navy-800 transition-all"
                  >
                     <span className="text-[11px] font-bold tracking-[0.3em] uppercase">Comenzar un Proyecto</span>
                     <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
               </Reveal>
            </div>
         </div>
      </div>

    </section>
  );
};

export default CreateSection;
