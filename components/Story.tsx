
import React from 'react';
import { Layout, TrendingUp, Hammer, Briefcase } from 'lucide-react';
import Reveal from './Reveal';

const Story: React.FC = () => {
  const disciplines = [
    {
      icon: <Briefcase size={24} strokeWidth={1} />,
      title: "Consultoría",
      desc: "Vender, comprar, alquilar y negociar cada oportunidad con criterio."
    },
    {
      icon: <Layout size={24} strokeWidth={1} />,
      title: "Arquitectura",
      desc: "Diseñar, proyectar y optimizar el verdadero potencial de cada propiedad."
    },
    {
      icon: <Hammer size={24} strokeWidth={1} />,
      title: "Construcción",
      desc: "Construir y reformar con criterio y firmeza el sueño de nuestro cliente."
    },
    {
      icon: <TrendingUp size={24} strokeWidth={1} />,
      title: "Inversión",
      desc: "Asesoramiento y gestión integral de Proyectos maximizando rentabilidad."
    }
  ];

  return (
    <section id="enfoque" className="py-24 md:py-56 bg-white border-t border-stone-100">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Cabecera Centrada */}
        <div className="text-center mb-24 md:mb-32">
          <Reveal className="mx-auto">
            <h2 className="text-xs md:text-sm font-bold tracking-[0.6em] text-stone-300 uppercase mb-12 md:mb-16">
              Nuestro Enfoque
            </h2>
          </Reveal>
          
          <Reveal staggerChildren={0.2} className="mx-auto">
            <div className="max-w-4xl mx-auto text-stone-700 font-light text-base md:text-xl lg:text-2xl leading-relaxed space-y-8 text-justify">
              <p>
                Lahuerta Real Estate nace de una idea muy sencilla: el Arquitecto y el Consultor Inmobiliario no deberían trabajar por separado.
              </p>
              <p>
                Somos arquitectos en búsqueda de la belleza espacial, formados en diseño y pensamiento crítico. De forma complementaria, tenemos una visión empresarial del sector inmobiliario, con el foco puesto en obtener rentabilidad y protección de nuestro patrimonio personal.
              </p>
              <p>
                No entendemos la arquitectura únicamente como un fin estético, sino como una herramienta estratégica para crear más valor en la sociedad.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Cuadrícula de Disciplinas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
          {disciplines.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.1} y={30} className="w-full">
              <div className="group flex flex-col items-center text-center">
                {/* Línea superior fina */}
                <div className="w-full h-[1px] bg-stone-200 mb-8 md:mb-12 transition-colors duration-700 group-hover:bg-navy-900"></div>
                
                {/* Icono */}
                <div className="text-stone-400 mb-6 md:mb-8 group-hover:text-navy-900 transition-all duration-500 transform group-hover:scale-110">
                  {item.icon}
                </div>
                
                {/* Título en Mayúsculas con Tracking */}
                <h3 className="text-[11px] font-bold tracking-[0.3em] text-navy-900 uppercase mb-4 md:mb-6">
                  {item.title}
                </h3>
                
                {/* Descripción Centrada */}
                <p className="text-stone-400 font-light text-[15px] leading-relaxed max-w-[280px]">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Story;
