
import React, { useState } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Identificador de fuente para el Excel
    formData.append("Fuente", "Pagina Contacto");

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

  return (
    <section className="bg-white min-h-screen pt-32 md:pt-48 pb-24 animate-fade-in">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* COLUMNA IZQUIERDA: INFORMACIÓN */}
            <div className="lg:w-1/3 pt-2">
                <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-6 block">
                    CONTACTO
                </span>
                <h1 className="text-3xl md:text-5xl font-medium text-navy-900 mb-12 leading-tight">
                    Déjanos un mensaje, estamos aquí para asesorarte.
                </h1>

                <div className="space-y-10 text-navy-900">
                    <div>
                        <h4 className="text-[10px] font-bold tracking-widest uppercase mb-3">Email</h4>
                        <p className="text-lg font-light">info@lahuertarealestate.com</p>
                    </div>
                    <div>
                        <h4 className="text-[10px] font-bold tracking-widest uppercase mb-3">Teléfono</h4>
                        <p className="text-lg font-light">+34 654 26 32 99</p>
                    </div>
                    <div>
                        <h4 className="text-[10px] font-bold tracking-widest uppercase mb-3">Horario</h4>
                        <p className="text-lg font-light">Lunes a Viernes<br/>10:00 a 21:30</p>
                    </div>
                </div>
            </div>

            {/* COLUMNA DERECHA: FORMULARIO */}
            <div className="lg:w-2/3">
                <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Campo Nombre */}
                    <input 
                        type="text" 
                        name="Nombre"
                        placeholder="Ingrese su nombre..." 
                        className="w-full bg-stone-50/80 border border-transparent rounded-lg p-5 text-base text-navy-900 placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-stone-200 transition-all duration-300"
                        required
                    />

                    {/* Fila Email y Teléfono */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input 
                            type="email" 
                            name="Email"
                            placeholder="Ingrese su email..." 
                            className="w-full bg-stone-50/80 border border-transparent rounded-lg p-5 text-base text-navy-900 placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-stone-200 transition-all duration-300"
                            required
                        />

                        <input 
                            type="tel" 
                            name="Telefono"
                            placeholder="Ingrese su teléfono..." 
                            className="w-full bg-stone-50/80 border border-transparent rounded-lg p-5 text-base text-navy-900 placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-stone-200 transition-all duration-300"
                            required
                        />
                    </div>

                    {/* TextArea Mensaje */}
                    <textarea 
                        name="Mensaje"
                        rows={8}
                        placeholder="Puedes agregar cualquier detalle necesario..."
                        className="w-full bg-stone-50/80 border border-transparent rounded-lg p-5 text-base text-navy-900 placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-stone-200 transition-all duration-300 resize-none"
                        required
                    ></textarea>

                    {/* Checkbox Privacidad */}
                    <div className="flex items-center gap-3 pt-2">
                        <div className="relative flex items-center">
                            <input 
                                type="checkbox" 
                                id="privacy-page" 
                                className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-gray-300 checked:bg-navy-900 checked:border-navy-900 transition-all" 
                                required 
                            />
                            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transform scale-75">
                                <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 4L3.5 6.5L9 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </span>
                        </div>
                        <label htmlFor="privacy-page" className="text-sm text-navy-900 cursor-pointer select-none font-light">
                            Acepto la política de privacidad
                        </label>
                    </div>

                    {/* Botón Enviar */}
                    <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-navy-900 text-white rounded-lg p-5 flex justify-between items-center hover:bg-navy-800 transition-all duration-300 group active:scale-[0.99] shadow-lg disabled:opacity-70 disabled:cursor-not-allowed mt-8"
                    >
                        <span className="text-xs font-bold tracking-[0.2em] uppercase flex items-center gap-2">
                            {isSubmitting ? (
                                <>
                                    ENVIANDO... <Loader2 className="animate-spin" size={14} />
                                </>
                            ) : 'ENVIAR'}
                        </span>
                        {!isSubmitting && <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />}
                    </button>

                    {/* Mensaje de Éxito */}
                    {isSuccess && (
                        <div className="mt-6 p-5 bg-stone-50 text-navy-900 border-l-4 border-navy-900 rounded-r-lg animate-fade-in">
                            <p className="font-medium">Gracias, hemos recibido tu mensaje correctamente. Nos pondremos en contacto en breve.</p>
                        </div>
                    )}
                </form>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
