
import React, { useState } from 'react';
import { ArrowRight, ChevronDown, CheckCircle2, Loader2 } from 'lucide-react';

const BuySection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("Fuente", "Formulario Comprar");

    try {
      await fetch('https://script.google.com/macros/s/AKfycbyBDCHurU9T7l_M6lBsf1zG4lUEAQRD8UphLNvKOxZhYx03wvqBjS6C5w6OVcTKrawr/exec', {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      });
      setIsSuccess(true);
      form.reset();
    } catch (error) {
      console.error("Error al enviar", error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSuccess(false), 8000);
    }
  };

  return (
    <section className="bg-white min-h-screen pt-28 md:pt-32 pb-24 selection:bg-navy-900 selection:text-white">
      
      {/* 1. HERO SECTION & FORM - Layout Unificado 2 Columnas */}
      <div className="container mx-auto px-6 md:px-12 mb-24 md:mb-40">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* COLUMNA IZQUIERDA: Texto y Formulario */}
          <div className="lg:w-1/2">
            
            {/* Cabecera - Ajustada para coincidir con Vender/Alquilar */}
            <div className="mb-16">
              <h1 className="text-5xl md:text-6xl font-light text-navy-900 leading-[1.1] tracking-tight mb-8">
                Saber qué y cuándo <br className="hidden md:block" />
                <span className="font-serif italic">Comprar.</span>
              </h1>
              <p className="text-stone-500 font-light text-lg md:text-xl leading-relaxed max-w-xl mb-12">
                Asesoramiento exclusivo en la compra de activos. Acceso a un catálogo premium off-market en las mejores zonas de Madrid.
              </p>
            </div>

            {/* Formulario Estilo Editorial (Inputs border-b) */}
            <div>
              <div className="mb-10">
                 <h3 className="text-xl font-serif text-navy-900 mb-2">Búsqueda Privada</h3>
                 <p className="text-stone-400 text-sm font-light italic">Defina sus criterios y reciba oportunidades filtradas.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-10">
                  
                  {/* Datos Personales */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="group relative">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-stone-300 group-focus-within:text-navy-900 transition-colors block mb-2">
                        Nombre Completo
                      </label>
                      <input 
                        type="text" 
                        name="Nombre"
                        required
                        className="w-full bg-transparent border-b border-stone-200 py-2 text-base text-navy-900 placeholder-transparent focus:outline-none focus:border-navy-900 transition-colors rounded-none"
                      />
                    </div>
                    
                    <div className="group relative">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-stone-300 group-focus-within:text-navy-900 transition-colors block mb-2">
                        Email
                      </label>
                      <input 
                        type="email" 
                        name="Email"
                        required
                        className="w-full bg-transparent border-b border-stone-200 py-2 text-base text-navy-900 placeholder-transparent focus:outline-none focus:border-navy-900 transition-colors rounded-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="group relative">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-stone-300 group-focus-within:text-navy-900 transition-colors block mb-2">
                            Teléfono
                        </label>
                        <input 
                        type="tel" 
                        name="Telefono"
                        required
                        className="w-full bg-transparent border-b border-stone-200 py-2 text-base text-navy-900 placeholder-transparent focus:outline-none focus:border-navy-900 transition-colors rounded-none"
                        />
                    </div>

                    <div className="relative group">
                       <label className="text-[10px] font-bold uppercase tracking-widest text-stone-300 group-focus-within:text-navy-900 transition-colors block mb-2">Presupuesto</label>
                       <div className="relative">
                         <select name="Presupuesto" className="w-full bg-transparent border-b border-stone-200 py-2 text-base text-navy-900 appearance-none focus:outline-none focus:border-navy-900 transition-colors cursor-pointer rounded-none">
                           <option value="Menos de 1M €">Menos de 1M €</option>
                           <option value="1M € - 3M €">1M € - 3M €</option>
                           <option value="3M € - 6M €">3M € - 6M €</option>
                           <option value="6M € - 10M €">6M € - 10M €</option>
                           <option value="Más de 10M €">Más de 10M €</option>
                         </select>
                         <ChevronDown size={14} className="absolute right-0 top-1/2 -translate-y-1/2 text-stone-300 pointer-events-none"/>
                       </div>
                    </div>
                  </div>

                  <div className="group relative">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-stone-300 group-focus-within:text-navy-900 transition-colors block mb-2">
                        Zonas de Interés
                    </label>
                    <input 
                        type="text"
                        name="Ubicacion"
                        className="w-full bg-transparent border-b border-stone-200 py-2 text-base text-navy-900 focus:outline-none focus:border-navy-900 transition-colors rounded-none"
                        placeholder="Ej: Barrio de Salamanca, Chamberí..."
                    />
                  </div>

                  <div className="group relative">
                     <label className="text-[10px] font-bold uppercase tracking-widest text-stone-300 group-focus-within:text-navy-900 transition-colors block mb-2">
                        Detalles de la Búsqueda
                     </label>
                     <textarea 
                        name="Mensaje"
                        rows={3}
                        className="w-full bg-transparent border-b border-stone-200 py-2 text-base text-navy-900 focus:outline-none focus:border-navy-900 transition-colors rounded-none resize-none"
                        placeholder="Nº Habitaciones, terraza, reforma..."
                     ></textarea>
                  </div>

                  <div className="pt-8">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-navy-900 text-white px-12 py-5 text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-navy-800 transition-all active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-xl shadow-navy-900/10"
                    >
                        {isSubmitting ? (
                            <>
                                ENVIANDO... <Loader2 className="animate-spin" size={14} />
                            </>
                        ) : 'SOLICITAR BÚSQUEDA'}
                    </button>
                    <p className="text-[10px] text-stone-400 mt-4 text-center leading-relaxed font-light">
                      Sus datos serán tratados con absoluta confidencialidad.
                    </p>
                  </div>

                  {isSuccess && (
                    <div className="mt-4 p-4 bg-stone-50 text-navy-900 border-l-4 border-navy-900 rounded-r-sm animate-fade-in flex items-center justify-center gap-4">
                       <CheckCircle2 size={20} strokeWidth={1.5} />
                       <span className="font-medium text-sm">Solicitud recibida correctamente.</span>
                    </div>
                  )}
              </form>
            </div>
          </div>

          {/* COLUMNA DERECHA: Imagen Editorial Sticky */}
          <div className="lg:w-1/2 hidden lg:block">
            <div className="sticky top-32 h-[85vh] w-full bg-stone-100 overflow-hidden">
              <img 
                src="/images/foto.jpg" 
                alt="Madrid Luxury Real Estate" 
                className="w-full h-full object-cover transition-transform duration-[20s] hover:scale-110"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop";
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BuySection;
