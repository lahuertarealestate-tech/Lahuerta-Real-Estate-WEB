import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

export default function CaptacionLanding() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Identificador de fuente para el Excel
    formData.append("Fuente", "Landing Captacion");

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
      alert("Hubo un error al enviar el mensaje. Por favor, inténtelo de nuevo.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSuccess(false), 8000);
    }
  };

  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-navy-900">
      {/* HEADER CERRADO */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/images/logo_blanco.png" 
              alt="Lahuerta Real Estate" 
              className="h-16 sm:h-20 w-auto object-contain cursor-pointer invert" 
              onClick={() => window.location.href = '/?page=captacion'} 
            />
          </div>
          <button 
            onClick={scrollToContact}
            className="hover-trigger bg-navy-900 text-white px-5 py-2.5 sm:px-6 sm:py-3 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] hover:opacity-80 transition-opacity outline-none"
          >
            Asesoría gratuita
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden min-h-[90vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/foto6.jpg" 
            alt="Interior de lujo en Madrid" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-light text-white leading-tight mb-8"
          >
            Ayudamos a propietarios en Madrid a cerrar la venta de su casa <span className="font-medium italic">antes y con mayor rentabilidad.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto font-light"
          >
            Somos un equipo de arquitectos que prepara, posiciona y vende tu propiedad para que obtengas el mayor beneficio posible, sin complicaciones.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button 
              onClick={scrollToContact}
              className="hover-trigger bg-white text-navy-900 px-8 py-4 sm:px-10 sm:py-5 text-[11px] sm:text-xs font-bold uppercase tracking-[0.3em] hover:bg-stone-100 transition-all outline-none"
            >
              Asesoría gratuita
            </button>
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN DEL PROCESO */}
      <section className="py-20 lg:py-32 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-16">
            <h2 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-sand-400 mb-6">A quién va dirigido</h2>
            <p className="text-xl lg:text-3xl font-light text-navy-900 leading-relaxed">
              Propietarios que quieren vender su vivienda en los barrios prime del centro de Madrid: <span className="font-normal border-b pb-1 border-navy-900/30">Salamanca, Almagro, Jerónimos, Justicia y Chamberí.</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-sand-400 mb-8">Qué incluye nuestro proceso</h2>
              <ul className="space-y-6 text-base lg:text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-navy-900 mr-4 text-xl font-medium">1.</span>
                  <span className="font-light">Visitamos y valoramos tu vivienda con precisión real.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-navy-900 mr-4 text-xl font-medium">2.</span>
                  <span className="font-light">Preparamos y mejoramos la casa visualmente para que destaque.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-navy-900 mr-4 text-xl font-medium">3.</span>
                  <span className="font-light">Realizamos fotos profesionales y planos atractivos.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-navy-900 mr-4 text-xl font-medium">4.</span>
                  <span className="font-light">Filtramos a los curiosos y enseñamos la casa solo a compradores reales.</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-sand-400 mb-8">Qué resultados esperar</h2>
              <p className="text-base lg:text-lg text-gray-700 mb-6 leading-relaxed font-light">
                Vendemos antes de la media del mercado y negociamos para que obtengas el precio máximo posible.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <button 
              onClick={scrollToContact}
              className="hover-trigger border border-navy-900 text-navy-900 px-8 py-4 text-[11px] sm:text-xs font-bold uppercase tracking-[0.3em] hover:bg-navy-900 hover:text-white transition-colors"
            >
              Asesoría gratuita
            </button>
          </div>
        </div>
      </section>

      {/* RESULTADOS / TESTIMONIOS */}
      <section className="py-20 lg:py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl text-center font-light text-navy-900 mb-16">Resultados en Madrid Prime</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-stone-50 border border-gray-100">
              <div className="flex items-center space-x-1 mb-4">
                {[1,2,3,4,5].map(star => <span key={star} className="text-navy-900 text-lg">★</span>)}
              </div>
              <p className="text-gray-700 italic font-light leading-relaxed mb-6">
                "Barrio de Salamanca — Vendimos en 3 semanas a un precio superior al inicial gracias a nuestra presentación arquitectónica."
              </p>
              <p className="font-semibold text-navy-900">- M.G.</p>
            </div>

            <div className="p-8 bg-stone-50 border border-gray-100">
              <div className="flex items-center space-x-1 mb-4">
                {[1,2,3,4,5].map(star => <span key={star} className="text-navy-900 text-lg">★</span>)}
              </div>
              <p className="text-gray-700 italic font-light leading-relaxed mb-6">
                "Chamberí — Al aportar un anteproyecto de reforma a los compradores, conseguimos cerrar la venta de un piso a reformar mucho más rápido."
              </p>
              <p className="font-semibold text-navy-900">- J.L.T.</p>
            </div>

            <div className="p-8 bg-stone-50 border border-gray-100">
              <div className="flex items-center space-x-1 mb-4">
                {[1,2,3,4,5].map(star => <span key={star} className="text-navy-900 text-lg">★</span>)}
              </div>
              <p className="text-gray-700 italic font-light leading-relaxed mb-6">
                "Almagro — Venta totalmente off-market, discreta y solo con clientes solventes."
              </p>
              <p className="font-semibold text-navy-900">- V.R.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN SOBRE IGNACIO */}
      <section className="py-20 lg:py-32 bg-stone-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-stretch gap-12 lg:gap-20">
          <div className="w-full md:w-5/12 relative min-h-[400px] md:min-h-0">
            <img 
              src="/images/ignacio.jpg" 
              alt="Ignacio Lahuerta" 
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="w-full md:w-7/12 flex flex-col justify-center py-6">
            <h2 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-sand-400 mb-6">Ignacio Lahuerta</h2>
            <h3 className="text-3xl lg:text-4xl font-light text-navy-900 mb-8">Por qué un arquitecto para vender tu casa.</h3>
            <p className="text-base lg:text-lg text-gray-700 font-light leading-relaxed mb-6">
              Soy Ignacio Lahuerta, arquitecto. Dirijo este equipo porque comprobé que las inmobiliarias tradicionales hacen perder dinero a los propietarios por no saber presentar bien el potencial de las casas.
            </p>
            <p className="text-base lg:text-lg text-gray-700 font-light leading-relaxed mb-8">
              Nosotros no somos comerciales convencionales; aplicamos nuestra visión técnica para que tu casa valga más a los ojos del comprador. Esa es la única manera de conseguir un cierre rápido y rentable.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACTO / FORMULARIO */}
      <section id="contacto" className="py-24 lg:py-32 bg-white scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-light text-navy-900 mb-6">Hablemos de tu propiedad</h2>
            <p className="text-lg text-gray-600 font-light">Complete el formulario y le contactaremos personalmente para realizar una evaluación confidencial y sin compromiso.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-[11px] font-bold uppercase tracking-widest text-sand-500 mb-2">Nombre completo</label>
                <input 
                  type="text" 
                  id="name" 
                  name="Nombre"
                  required
                  className="w-full px-4 py-3 bg-stone-50 border border-gray-200 outline-none focus:border-navy-900 transition-colors font-light"
                  placeholder="Ej. María García"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-[11px] font-bold uppercase tracking-widest text-sand-500 mb-2">Teléfono</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="Telefono"
                  required
                  className="w-full px-4 py-3 bg-stone-50 border border-gray-200 outline-none focus:border-navy-900 transition-colors font-light"
                  placeholder="Su número de contacto"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-[11px] font-bold uppercase tracking-widest text-sand-500 mb-2">Háblenos de su propiedad</label>
              <textarea 
                id="message" 
                name="Mensaje"
                required
                rows={5}
                className="w-full px-4 py-3 bg-stone-50 border border-gray-200 outline-none focus:border-navy-900 transition-colors resize-none font-light"
                placeholder="Barrio, tamaño, estado..."
              ></textarea>
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="hover-trigger w-full bg-navy-900 text-white py-5 text-[11px] sm:text-xs font-bold uppercase tracking-[0.3em] hover:opacity-80 transition-opacity outline-none mt-4 disabled:opacity-70 flex justify-center items-center gap-2"
            >
              {isSubmitting ? (
                 <>ENVIANDO... <Loader2 className="animate-spin" size={14} /></>
              ) : (
                 'ASESORÍA GRATUITA'
              )}
            </button>
            {isSuccess && (
               <div className="mt-6 p-5 bg-stone-50 text-navy-900 border-l-4 border-navy-900 rounded-r-lg animate-fade-in">
                 <p className="font-medium text-center">Gracias, hemos recibido su mensaje. Nos pondremos en contacto pronto.</p>
               </div>
            )}
            <p className="text-center text-xs text-sand-500 mt-6 font-light">
              Sus datos serán tratados con total confidencialidad.
            </p>
          </form>
        </div>
      </section>
      
      {/* Footer minimalista de la landing page */}
      <footer className="bg-navy-900 py-12 text-center text-sand-500 text-sm font-light">
        <p className="tracking-wide">&copy; {new Date().getFullYear()} Lahuerta Real Estate. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
