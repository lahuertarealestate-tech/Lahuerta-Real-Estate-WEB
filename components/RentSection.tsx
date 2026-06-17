
import React, { useState } from 'react';
import { Check, ChevronDown, ShieldCheck, ArrowRight, Loader2 } from 'lucide-react';

const RentSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("Fuente", "Formulario Alquilar");

    try {
      await fetch('https://script.google.com/macros/s/AKfycbyBDCHurU9T7l_M6lBsf1zG4lUEAQRD8UphLNvKOxZhYx03wvqBjS6C5w6OVcTKrawr/exec', {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      });
      setIsSuccess(true);
      form.reset();
    } catch (error) {
      console.error("Error", error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSuccess(false), 8000);
    }
  };

  return (
    <div className="relative bg-white min-h-screen selection:bg-navy-900 selection:text-white">
      
      {/* 1. HERO SECTION - Ajustado para equilibrio visual con imagen foto2.jpg */}
      <section className="relative pt-28 md:pt-36 pb-12 md:pb-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center justify-start mb-16 md:mb-24">
            
            {/* Left Content Column */}
            <div className="lg:w-5/12">
                <h1 className="text-4xl md:text-6xl font-light text-navy-900 leading-[1.1] tracking-tight mb-8">
                  Rentabilidad <br className="hidden md:block" />
                  <span className="font-serif italic">Segura.</span>
                </h1>
                <p className="text-stone-500 font-light text-lg md:text-xl leading-relaxed max-w-lg mb-10">
                  Transformamos activos inmobiliarios en productos financieros de alto rendimiento. Optimizamos tu patrimonio con rigor técnico y legal.
                </p>
                <button 
                    onClick={() => document.getElementById('rent-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group flex items-center gap-6 text-[11px] font-bold tracking-[0.3em] uppercase text-navy-900 hover:text-sand-400 transition-colors py-2 border-b border-navy-900 hover:border-sand-400 w-fit"
                >
                    Solicitar Estudio <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </button>
            </div>

            {/* Right Visual Column - Usando foto2.jpg en formato rectangular */}
            <div className="lg:w-7/12 w-full">
               <div className="relative aspect-[16/10] md:aspect-[16/9] w-full bg-stone-50 overflow-hidden rounded-sm shadow-sm">
                  <img 
                    src="/images/foto2.jpg" 
                    alt="Gestión Patrimonial Lahuerta" 
                    className="w-full h-full object-cover transition-all duration-[15s] hover:scale-110"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=1200&auto=format&fit=crop";
                    }}
                  />
                  <div className="absolute inset-0 bg-navy-900/10 pointer-events-none"></div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SERVICIOS (Grid Minimalista) */}
      <section className="py-16 md:py-24 bg-stone-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
             <div className="group">
                <span className="text-6xl font-serif text-stone-200 group-hover:text-navy-900 transition-colors duration-500 block mb-6">01</span>
                <h3 className="text-lg font-medium text-navy-900 mb-4 uppercase tracking-widest">Viabilidad</h3>
                <p className="text-stone-500 font-light text-sm leading-relaxed mb-6">
                  Estudio de mercado real para fijar el precio óptimo que maximice la rentabilidad sin sacrificar liquidez.
                </p>
             </div>

             <div className="group">
                <span className="text-6xl font-serif text-stone-200 group-hover:text-navy-900 transition-colors duration-500 block mb-6">02</span>
                <h3 className="text-lg font-medium text-navy-900 mb-4 uppercase tracking-widest">Solvencia</h3>
                <p className="text-stone-500 font-light text-sm leading-relaxed mb-6">
                  Filtro riguroso de inquilinos. Buscamos perfiles solventes que cuiden el activo como si fuera suyo.
                </p>
             </div>

             <div className="group">
                <span className="text-6xl font-serif text-stone-200 group-hover:text-navy-900 transition-colors duration-500 block mb-6">03</span>
                <h3 className="text-lg font-medium text-navy-900 mb-4 uppercase tracking-widest">Gestión</h3>
                <p className="text-stone-500 font-light text-sm leading-relaxed mb-6">
                  Redacción de contratos blindados, seguros y mantenimiento. Resolvemos incidencias antes de que sean problemas.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* 3. FORMULARIO EDITORIAL */}
      <section id="rent-form" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
           <div className="max-w-4xl mx-auto">
              
              <div className="mb-16 text-center md:text-left">
                <span className="text-[10px] font-bold tracking-[0.4em] text-sand-400 uppercase block mb-4">CONTACTO</span>
                <h2 className="text-3xl md:text-5xl font-serif text-navy-900 mb-4">Estudio de Gestión</h2>
                <p className="text-stone-400 font-light italic">Propuesta personalizada para su activo.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                  
                  <div className="relative group">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-stone-300 group-focus-within:text-navy-900 transition-colors block mb-2">Tipo de Propiedad</label>
                    <div className="relative">
                      <select name="Tipo_Inmueble" className="w-full bg-transparent border-b border-stone-200 py-2 text-base text-navy-900 appearance-none focus:outline-none focus:border-navy-900 transition-colors cursor-pointer rounded-none">
                        <option value="Piso / Apartamento">Piso / Apartamento</option>
                        <option value="Edificio Completo">Edificio Completo</option>
                        <option value="Local Comercial">Local Comercial</option>
                      </select>
                      <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 text-stone-300 pointer-events-none" />
                    </div>
                  </div>
                  
                  <div className="relative group">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-stone-300 group-focus-within:text-navy-900 transition-colors block mb-2">Ubicación</label>
                    <input 
                      type="text" 
                      name="Ubicacion"
                      placeholder="Ej: Calle Velázquez"
                      className="w-full bg-transparent border-b border-stone-200 py-2 text-base text-navy-900 placeholder:text-stone-100 focus:outline-none focus:border-navy-900 transition-colors rounded-none"
                    />
                  </div>

                  <div className="relative group">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-stone-300 group-focus-within:text-navy-900 transition-colors block mb-2">Nombre</label>
                    <input 
                      type="text" 
                      name="Nombre"
                      className="w-full bg-transparent border-b border-stone-200 py-2 text-base text-navy-900 focus:outline-none focus:border-navy-900 transition-colors rounded-none"
                      required
                    />
                  </div>

                  <div className="relative group">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-stone-300 group-focus-within:text-navy-900 transition-colors block mb-2">Teléfono</label>
                    <input 
                      type="tel" 
                      name="Telefono"
                      className="w-full bg-transparent border-b border-stone-200 py-2 text-base text-navy-900 focus:outline-none focus:border-navy-900 transition-colors rounded-none"
                      required
                    />
                  </div>
                  
                  <div className="relative group md:col-span-2">
                     <label className="text-[10px] font-bold uppercase tracking-widest text-stone-300 group-focus-within:text-navy-900 transition-colors block mb-2">Notas Adicionales</label>
                     <textarea 
                        name="Mensaje"
                        rows={2}
                        placeholder="Estado actual, disponibilidad..."
                        className="w-full bg-transparent border-b border-stone-200 py-2 text-base text-navy-900 placeholder:text-stone-100 focus:outline-none focus:border-navy-900 transition-colors rounded-none resize-none"
                     ></textarea>
                  </div>

                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8">
                  <div className="flex items-center gap-3 text-stone-400 text-xs">
                    <ShieldCheck size={16} className="shrink-0" /> 
                    <span className="font-light">Datos confidenciales.</span>
                  </div>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto bg-navy-900 text-white px-12 py-5 text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-navy-800 transition-all active:scale-[0.98] shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                        <>
                            ENVIANDO... <Loader2 className="animate-spin" size={14} />
                        </>
                    ) : 'ENVIAR SOLICITUD'}
                  </button>
                </div>

                {isSuccess && (
                  <div className="mt-4 p-4 text-navy-900 bg-stone-50 border-l-4 border-navy-900 text-center animate-fade-in">
                    <p className="font-medium text-sm">Solicitud recibida correctamente.</p>
                  </div>
                )}
              </form>
           </div>
        </div>
      </section>

    </div>
  );
};

export default RentSection;
