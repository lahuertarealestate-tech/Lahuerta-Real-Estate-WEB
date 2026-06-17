
import React from 'react';
import Reveal from './Reveal';

const Founders: React.FC = () => {
  return (
    <section id="socio-fundador" className="py-20 md:py-48 bg-stone-100">
      <div className="container mx-auto px-8 md:px-12">
        
        {/* Founder 1 - Ignacio Lahuerta (Main Highlight) */}
        {/* Cambiado a lg:flex-row para mantener apilado en tablets y evitar solapamientos */}
        {/* Cambiado items-stretch a items-start para que la altura del texto no deforme la imagen */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            
            {/* Columna Imagen - Ajustada a 5/12 en LG */}
            <div className="w-full lg:w-5/12 order-1 lg:order-1">
                 <Reveal y={50} duration={1.5} width="100%">
                   {/* Cambiado h-full por w-full para que el aspect ratio dependa del ancho */}
                   <div className="w-full aspect-[3/4] bg-stone-200 relative overflow-hidden shadow-2xl shadow-stone-300">
                       <img 
                          src="/images/ignacio.jpg" 
                          alt="Ignacio Lahuerta" 
                          className="w-full h-full object-cover opacity-90"
                          onError={(e) => {
                              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop";
                          }}
                       />
                   </div>
                 </Reveal>
            </div>

            {/* Columna Texto - Ajustada a 7/12 en LG */}
            <div className="w-full lg:w-7/12 order-2 lg:order-2 flex flex-col py-2">
                 <Reveal staggerChildren={0.2} className="flex flex-col">
                   <div className="mb-8 lg:mb-20">
                     <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-stone-900 mb-4 leading-tight tracking-tight">
                       Ignacio Lahuerta Vázquez-Reina
                     </h3>
                     <p className="text-xs md:text-base font-bold tracking-[0.4em] text-sand-400 uppercase">
                       Arquitecto Director & Socio Fundador
                     </p>
                   </div>
                   
                   <div className="border-l border-stone-300 pl-6 md:pl-12 flex-grow flex flex-col justify-between">
                      <div className="text-stone-700 font-light leading-relaxed text-base md:text-xl lg:text-2xl space-y-6 md:space-y-10 lg:space-y-16 text-justify">
                          <p>
                              Ignacio Lahuerta Vázquez-Reina es arquitecto por la Escuela Técnica Superior de Arquitectura de Madrid (ETSAM – UPM), experto en ventas de activos de alto valor, inversor y director del grupo inmobiliario Lahuerta Real Estate.
                          </p>
                          <p>
                              Inició su trayectoria profesional como arquitecto en el estudio LVArquitectura, donde consolidó una sólida formación en diseño, construcción y promoción inmobiliaria. En paralelo, se especializó y posicionó como experto en ventas de propiedades de alto valor entre Madrid, Islas Baleares y Costa del Sol.
                          </p>
                          <p>
                             De la fusión entre su pasión por la arquitectura y la inversión en el sector inmobiliario nace Lahuerta Real Estate: una firma boutique orientada a la gestión integral de proyectos de inversión inmobiliaria, donde cada operación se ejecuta con un único objetivo: maximizar el valor y el retorno del patrimonio de sus clientes.
                          </p>
                      </div>
                   </div>
                 </Reveal>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Founders;
