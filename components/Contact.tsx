
import React, { useState } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch('https://script.google.com/macros/s/AKfycbyBDCHurU9T7l_M6lBsf1zG4lUEAQRD8UphLNvKOxZhYx03wvqBjS6C5w6OVcTKrawr/exec', {
        method: 'POST',
        body: formData,
        mode: 'no-cors' // Importante para evitar errores de CORS con Google Apps Script
      });

      // Asumimos éxito si no hay error de red (debido a no-cors)
      setIsSuccess(true);
      form.reset();
    } catch (error) {
      console.error("Error al enviar el formulario", error);
      alert("Hubo un error al enviar el mensaje. Por favor, inténtelo de nuevo.");
    } finally {
      setIsSubmitting(false);
      // Ocultar mensaje de éxito después de 5 segundos si se desea, o dejarlo fijo.
      setTimeout(() => setIsSuccess(false), 8000);
    }
  };

  return (
    <section id="contacto" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            {/* Left Info */}
            <div className="lg:w-1/3">
            <span className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4 block">Contacto</span>
            <h2 className="text-3xl md:text-5xl font-medium text-navy-900 mb-12">
                Déjanos un mensaje, estamos aquí para asesorarte.
            </h2>

            <div className="space-y-8 text-navy-900">
                <div>
                    <h4 className="text-xs font-bold tracking-widest uppercase mb-2">Email</h4>
                    <p className="text-lg">info@lahuertarealestate.com</p>
                </div>
                <div>
                    <h4 className="text-xs font-bold tracking-widest uppercase mb-2">Teléfono</h4>
                    <p className="text-lg">+34 654 26 32 99</p>
                </div>
                <div>
                    <h4 className="text-xs font-bold tracking-widest uppercase mb-2">Horario</h4>
                    <p className="text-lg">Lunes a Viernes<br/>10:00 a 21:30</p>
                </div>
            </div>
            </div>

            {/* Formulario Funcional */}
            <div className="lg:w-2/3">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <input 
                        type="text" 
                        name="Nombre"
                        placeholder="Ingrese su nombre..." 
                        className="w-full bg-stone-50 border border-transparent rounded-lg p-5 text-base text-navy-900 placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-sand-400 transition-all"
                        required
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input 
                            type="email" 
                            name="Email"
                            placeholder="Ingrese su email..." 
                            className="w-full bg-stone-50 border border-transparent rounded-lg p-5 text-base text-navy-900 placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-sand-400 transition-all"
                            required
                        />

                        <input 
                            type="tel" 
                            name="Telefono"
                            placeholder="Ingrese su teléfono..." 
                            className="w-full bg-stone-50 border border-transparent rounded-lg p-5 text-base text-navy-900 placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-sand-400 transition-all"
                            required
                        />
                    </div>

                    <textarea 
                        name="Mensaje"
                        rows={6}
                        placeholder="Puedes agregar cualquier detalle necesario..."
                        className="w-full bg-stone-50 border border-transparent rounded-lg p-5 text-base text-navy-900 placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-sand-400 transition-all resize-none"
                        required
                    ></textarea>

                    <div className="flex items-center gap-3 pt-4">
                        <div className="relative flex items-center">
                            <input type="checkbox" id="privacy" className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-sand-400 checked:bg-sand-400 transition-all" required />
                            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 pointer-events-none">
                                <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </span>
                        </div>
                        <label htmlFor="privacy" className="text-sm text-navy-900 cursor-pointer select-none">Acepto la política de privacidad</label>
                    </div>

                    <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-navy-900 text-white rounded-lg p-5 flex justify-between items-center hover:bg-navy-800 transition-colors group active:scale-[0.98] shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        <span className="text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                            {isSubmitting ? (
                                <>
                                    ENVIANDO... <Loader2 className="animate-spin" size={14} />
                                </>
                            ) : 'ENVIAR'}
                        </span>
                        {!isSubmitting && <ArrowRight className="group-hover:translate-x-1 transition-transform" />}
                    </button>

                    {isSuccess && (
                        <div className="mt-4 p-4 bg-stone-50 text-navy-900 border-l-4 border-navy-900 rounded-r-lg animate-fade-in">
                            <p className="font-medium">Gracias, hemos recibido tu mensaje correctamente.</p>
                        </div>
                    )}
                </form>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
