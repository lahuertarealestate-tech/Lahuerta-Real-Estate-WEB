
import React from 'react';
import Reveal from './Reveal';

const TeamSection: React.FC = () => {
  return (
    <section className="bg-white min-h-screen pt-28 md:pt-48 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header de la sección de Equipo - Increased Label Size */}
        <div className="mb-24 md:mb-32">
           <span className="text-xs md:text-sm font-bold tracking-[0.6em] text-sand-400 uppercase block mb-6">NUESTRO EQUIPO</span>
           <h1 className="text-3xl md:text-6xl font-serif text-navy-900 leading-tight">
             La unión de la arquitectura <br className="hidden md:block"/> y la consultoría estratégica.
           </h1>
        </div>

        {/* 1. IGNACIO LAHUERTA */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-stretch mb-24 md:mb-40 border-b border-stone-100 pb-24 md:pb-32">
            <div className="w-full md:w-5/12">
                 <Reveal width="100%" fullHeight>
                   <div className="h-full aspect-[3/4] bg-stone-100 relative overflow-hidden shadow-2xl shadow-stone-200">
                       <img 
                          src="/images/ignacio2.jpg" 
                          alt="Ignacio Lahuerta" 
                          className="w-full h-full object-cover opacity-90"
                          onError={(e) => {
                              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop";
                          }}
                       />
                   </div>
                 </Reveal>
            </div>
            <div className="w-full md:w-7/12 flex flex-col py-2">
                 <Reveal staggerChildren={0.2} className="h-full flex flex-col" fullHeight>
                   <div className="mb-12 lg:mb-20">
                     <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-stone-900 mb-4 leading-tight tracking-tight whitespace-nowrap">
                       Ignacio Lahuerta Vázquez-Reina
                     </h2>
                     <p className="text-base md:text-lg font-bold tracking-[0.4em] text-sand-400 uppercase">
                       Arquitecto Director & Socio Fundador
                     </p>
                   </div>
                   
                   <div className="border-l border-stone-300 pl-8 md:pl-12 flex-grow flex flex-col justify-between">
                      <div className="text-stone-700 font-light leading-relaxed text-lg md:text-xl lg:text-2xl space-y-10 lg:space-y-16 text-justify">
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

        {/* 2. EQUIPO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-16 lg:gap-32 mb-24 md:mb-32">
            
            {/* Alejandro Guasch */}
            <div className="flex flex-col">
                 <Reveal staggerChildren={0.15}>
                   <h3 className="text-2xl font-serif text-stone-900 mb-8">Alejandro Guasch</h3>
                   
                   <div className="border-l border-stone-300 pl-6 space-y-6">
                      <div className="text-stone-600 font-light leading-relaxed text-sm space-y-4">
                          <p>
                              Como Director de Operaciones, Alejandro aporta la estructura operativa y la visión tecnológica necesaria para escalar el modelo de Lahuerta Real Estate. Su formación en Business & Technology, sumada a su experiencia directa tanto en ejecución de obra como en consultoría de inversiones, le permite optimizar cada fase del ciclo inmobiliario. Desde esta posición, orquesta la gestión interna de los proyectos, asegurando que la creatividad arquitectónica se traduzca en activos rentables mediante procesos ágiles y un análisis de datos riguroso.
                          </p>
                      </div>
                   </div>
                 </Reveal>
            </div>

            {/* Blanca Rodríguez */}
            <div className="flex flex-col">
                 <Reveal staggerChildren={0.15}>
                   <h3 className="text-2xl font-serif text-stone-900 mb-8">Blanca Rodríguez</h3>
                   
                   <div className="border-l border-stone-300 pl-6 space-y-6">
                      <div className="text-stone-600 font-light leading-relaxed text-sm space-y-4">
                          <p>
                              Como Arquitecta por la ETSAM, Blanca lidera el desarrollo de diseño y la ejecución de obras y reformas dentro del departamento de arquitectura. Su sólida formación técnica, sumada a su visión creativa, le permite supervisar cada detalle del proceso constructivo. Desde esta posición, asegura que cada proyecto se materialice con los más altos estándares de calidad, integrando la excelencia arquitectónica con la precisión en la ejecución.
                          </p>
                      </div>
                   </div>
                 </Reveal>
            </div>

            {/* Yasir Valdivieso */}
            <div className="flex flex-col">
                 <Reveal staggerChildren={0.15}>
                   <h3 className="text-2xl font-serif text-stone-900 mb-8">Yasir Valdivieso</h3>
                   
                   <div className="border-l border-stone-300 pl-6 space-y-6">
                      <div className="text-stone-600 font-light leading-relaxed text-sm space-y-4">
                          <p>
                              Ingeniero por ICAI, Director y Fundador de Aura. Colabora como socio con la expansión tecnológica y la rama de inversión de la firma, centrando su actividad en el desarrollo de operaciones de inversión inmobiliaria dentro de nuestro modelo boutique.
                          </p>
                      </div>
                   </div>
                 </Reveal>
            </div>

            {/* Jon Aragones */}
            <div className="flex flex-col">
                 <Reveal staggerChildren={0.15}>
                   <h3 className="text-2xl font-serif text-stone-900 mb-8">Jon Aragones</h3>
                   
                   <div className="border-l border-stone-300 pl-6 space-y-6">
                      <div className="text-stone-600 font-light leading-relaxed text-sm space-y-4">
                          <p>
                              Jon Aragones representa el pilar estratégico y financiero de la firma. Actuando como asesor estratégico, su visión analítica complementa la perspectiva técnica arquitectónica, asegurando que cada operación inmobiliaria sea viable, segura y rentable. Especializado en la gestión patrimonial y la estructuración de inversiones, lidera la expansión de la consultora con un enfoque centrado en resultados y excelencia operativa.
                          </p>
                      </div>
                   </div>
                 </Reveal>
            </div>

            {/* Iker Alonso */}
            <div className="flex flex-col">
                 <Reveal staggerChildren={0.15}>
                   <h3 className="text-2xl font-serif text-stone-900 mb-8">Iker Alonso</h3>
                   
                   <div className="border-l border-stone-300 pl-6 space-y-6">
                      <div className="text-stone-600 font-light leading-relaxed text-sm space-y-4">
                          <p>
                              Con formación en Economía por la Universidad de Surrey y experiencia previa en la gestión del sector hotelero boutique, Iker se incorpora como Consultor Inmobiliario aportando una visión analítica orientada a resultados. En Lahuerta Real Estate, equilibra la rigurosidad financiera con la creación de valor y relaciones sólidas, garantizando un servicio de excelencia a nuestros clientes.
                          </p>
                      </div>
                   </div>
                 </Reveal>
            </div>

            {/* Santiago Lahuerta */}
            <div className="flex flex-col">
                 <Reveal staggerChildren={0.15}>
                   <h3 className="text-2xl font-serif text-stone-900 mb-8">Santiago Lahuerta</h3>
                   
                   <div className="border-l border-stone-300 pl-6 space-y-6">
                      <div className="text-stone-600 font-light leading-relaxed text-sm space-y-4">
                          <p>
                              Como Arquitecto y Director Comercial, Santiago combina su especialización en tecnología BIM y su experiencia en desarrollos residenciales complejos con la visión estratégica del negocio. En Lahuerta Real Estate, lidera la expansión de la firma, el establecimiento de alianzas estratégicas y la gestión de colaboraciones profesionales de alto nivel.
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

export default TeamSection;
