
import React, { useState } from 'react';
import { Check, ArrowRight, ShieldCheck, ChevronDown, Loader2 } from 'lucide-react';

const steps = [
  {
    num: "01",
    title: "Valoración & Análisis",
    desc: "No usamos algoritmos genéricos. Visitamos tu propiedad y combinamos Big Data con nuestro profundo conocimiento del mercado local para fijar el precio óptimo."
  },
  {
    num: "02",
    title: "Puesta en Escena",
    desc: "Preparamos tu casa para seducir. Implementamos estrategias de Home Staging y generamos renders hiperrealistas con IA para mostrar el potencial oculto."
  },
  {
    num: "03",
    title: "Difusión Global",
    desc: "Fotografía editorial de arquitectura y acceso preferente a nuestra base de datos privada de inversores internacionales y Family Offices de primer nivel."
  },
  {
    num: "04",
    title: "Cierre & Gestión",
    desc: "Defensa técnica de tus intereses en la mesa de negociación. Acompañamiento jurídico y fiscal integral hasta la firma definitiva en notaría."
  }
];

const testimonials = [
  {
    text: "La gestión de la venta fue impecable. Lograron un precio récord en el edificio gracias a su estrategia de Home Staging y marketing internacional.",
    author: "Carlos Mendoza"
  },
  {
    text: "Buscaba discreción absoluta y lahuerta cumplió con creces. Todo el proceso se gestionó off-market con clientes finales muy cualificados.",
    author: "Elena R. de la Fuente"
  },
  {
    text: "Su equipo de arquitectos vio un potencial en mi vivienda que otros no supieron identificar. La visión técnica multiplicó el valor final.",
    author: "Javier S."
  }
];

const SellSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    formData.append("Fuente", "Formulario Vender");

    try {
      await fetch('https://script.google.com/macros/s/AKfycbyBDCHurU9T7l_M6lBsf1zG4lUEAQRD8UphLNvKOxZhYx03wvqBjS6C5w6OVcTKrawr/exec', {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      });

      setIsSuccess(true);
      form.reset();
    } catch (error) {
      console.error("Error al enviar el formulario", error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSuccess(false), 8000);
    }
  };

  return (
    <section className="bg-white min-h-screen pt-28 md:pt-32 pb-24 selection:bg-navy-900 selection:text-white">
      
      {/* 1. HERO SECTION - Ajustado para que la imagen sea rectangular y reduzca el espacio en blanco */}
      <div className="container mx-auto px-6 md:px-12 mb-24 md:mb-40">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-between">
          
          {/* COLUMNA IZQUIERDA: Texto */}
          <div className="lg:w-5/12">
            <h1 className="text-5xl md:text-6xl font-light text-navy-900 leading-[1.1] tracking-tight mb-8">
              Vendemos tu propiedad <br className="hidden md:block" /> 
              <span className="italic font-serif">como si fuera nuestra.</span>
            </h1>
            <p className="text-stone-500 font-light text-lg md:text-xl leading-relaxed max-w-lg mb-12">
              Excelencia técnica, visión arquitectónica y una cartera de clientes exclusiva para maximizar el valor de su activo en Madrid.
            </p>
            
            <button 
              onClick={() => document.getElementById('valoracion-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center gap-6 text-[11px] font-bold tracking-[0.3em] uppercase text-navy-900 hover:text-sand-400 transition-colors py-2 border-b border-navy-900 hover:border-sand-400 w-fit"
            >
              Solicitar Valoración <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          {/* COLUMNA DERECHA: Imagen rectangular expandida hacia la izquierda */}
          <div className="lg:w-7/12 w-full flex justify-end">
            <div className="relative aspect-[16/10] md:aspect-[16/9] w-full overflow-hidden bg-stone-50 shadow-sm rounded-sm">
              <img 
                src="/images/foto3.jpg" 
                alt="Propiedad de lujo Lahuerta Real Estate" 
                className="w-full h-full object-cover transition-all duration-[15s] hover:scale-110"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-navy-900/5 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. EL MÉTODO LAHUERTA - Timeline Arquitectónico */}
      <div className="container mx-auto px-6 md:px-12 mb-24 md:mb-40">
        <div className="flex flex-col md:flex-row gap-8 md:gap-32 mb-16 md:mb-20">
          <div className="md:w-1/3">
             <h2 className="text-xs md:text-sm font-bold tracking-[0.6em] text-stone-300 uppercase">
               El Método Lahuerta
             </h2>
          </div>
          <div className="md:w-2/3">
             <p className="text-2xl md:text-4xl font-serif text-navy-900 leading-tight">
               Excelencia técnica aplicada <br className="hidden md:block"/> en cada fase del proceso.
             </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 border-t border-stone-100">
          {steps.map((step, idx) => (
            <div key={idx} className="group pt-8 pb-12 md:pb-16 md:pr-12 border-b md:border-b-0 border-stone-100 transition-all duration-700 hover:bg-stone-50/50">
              <span className="text-[10px] font-bold text-navy-900 mb-4 md:mb-6 block tracking-widest">{step.num}</span>
              <h3 className="text-lg font-medium text-navy-900 mb-4 md:mb-6 uppercase tracking-wide">{step.title}</h3>
              <p className="text-stone-500 font-light text-sm leading-relaxed max-w-sm">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. FORMULARIO DE VALORACIÓN - Estilo Editorial */}
      <div id="valoracion-form" className="container mx-auto px-6 md:px-12 mb-24 md:mb-40">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6 md:gap-8">
            <div>
              <span className="text-[10px] font-bold tracking-[0.4em] text-sand-400 uppercase block mb-4">Servicio de Tasación</span>
              <h2 className="text-3xl md:text-5xl font-serif text-navy-900">¿Cuánto vale tu casa?</h2>
            </div>
            <p className="text-stone-400 text-sm font-light max-w-xs italic">
              Complete el siguiente documento para recibir un informe preliminar de mercado.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 md:gap-y-12">
              <div className="relative group">
                <label className="text-[10px] font-bold uppercase tracking-widest text-stone-300 group-focus-within:text-navy-900 transition-colors">Tipo de Inmueble</label>
                <div className="relative mt-2">
                  <select name="Tipo_Inmueble" className="w-full bg-transparent border-b border-stone-200 py-3 text-base text-navy-900 appearance-none focus:outline-none focus:border-navy-900 transition-colors cursor-pointer rounded-none">
                    <option value="Piso / Ático">Piso / Ático</option>
                    <option value="Chalet Independiente">Chalet Independiente</option>
                    <option value="Oficina / Local">Oficina / Local</option>
                    <option value="Suelo / Inversión">Suelo / Inversión</option>
                  </select>
                  <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 text-stone-300 pointer-events-none" />
                </div>
              </div>
              
              <div className="relative group">
                <label className="text-[10px] font-bold uppercase tracking-widest text-stone-300 group-focus-within:text-navy-900 transition-colors">Ubicación (C.P. o Zona)</label>
                <input 
                  type="text" 
                  name="Ubicacion"
                  placeholder="Ej: El Viso, 28006"
                  className="w-full bg-transparent border-b border-stone-200 py-3 mt-2 text-base text-navy-900 placeholder:text-stone-100 focus:outline-none focus:border-navy-900 transition-colors rounded-none"
                />
              </div>

              <div className="relative group">
                <label className="text-[10px] font-bold uppercase tracking-widest text-stone-300 group-focus-within:text-navy-900 transition-colors">Nombre</label>
                <input 
                  type="text" 
                  name="Nombre"
                  className="w-full bg-transparent border-b border-stone-200 py-3 mt-2 text-base text-navy-900 focus:outline-none focus:border-navy-900 transition-colors rounded-none"
                  required
                />
              </div>

              <div className="relative group">
                <label className="text-[10px] font-bold uppercase tracking-widest text-stone-300 group-focus-within:text-navy-900 transition-colors">Teléfono de Contacto</label>
                <input 
                  type="tel" 
                  name="Telefono"
                  className="w-full bg-transparent border-b border-stone-200 py-3 mt-2 text-base text-navy-900 focus:outline-none focus:border-navy-900 transition-colors rounded-none"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-stone-50">
              <div className="flex items-center gap-3 text-stone-400 text-xs">
                <ShieldCheck size={16} className="shrink-0" /> 
                <span className="font-light text-center md:text-left">Tratamiento de datos bajo estricta confidencialidad.</span>
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto bg-navy-900 text-white px-12 py-5 text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-navy-800 transition-all active:scale-[0.98] shadow-lg md:shadow-none flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                    <>
                        ENVIANDO... <Loader2 className="animate-spin" size={14} />
                    </>
                ) : 'ENVIAR SOLICITUD'}
              </button>
            </div>

            {isSuccess && (
                <div className="mt-4 p-4 bg-stone-50 text-navy-900 border-l-4 border-navy-900 rounded-r-lg animate-fade-in">
                    <p className="font-medium text-center">Gracias. Hemos recibido su solicitud de valoración.</p>
                </div>
            )}
          </form>
        </div>
      </div>

      {/* 4. TESTIMONIOS - Diseño de Citas */}
      <div className="container mx-auto px-6 md:px-12 border-t border-stone-100 pt-24 md:pt-32">
        <h3 className="text-[10px] font-bold tracking-[0.4em] text-stone-300 uppercase text-center mb-16 md:mb-24">Experiencias Reales</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
          {testimonials.map((t, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <p className="text-xl md:text-2xl font-serif italic text-stone-600 leading-relaxed mb-6 md:mb-8">
                "{t.text}"
              </p>
              <div className="w-8 h-[1px] bg-sand-400 mb-6"></div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-navy-900">{t.author}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default SellSection;
