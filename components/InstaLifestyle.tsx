
import React from 'react';
import { Diamond, User, Eye } from 'lucide-react';

const InstaLifestyle: React.FC = () => {
  const posts = [
    { id: 1, type: 'detail', img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&auto=format&fit=crop" }, // Salón clásico luminoso
    { id: 2, type: 'art', img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600&auto=format&fit=crop", grayscale: true }, // Comedor señorial
    { id: 3, type: 'minimal', text: 'LAHUERTA' },
    { id: 4, type: 'arch', img: "https://images.unsplash.com/photo-1502005229762-cf1afd3daa25?q=80&w=600&auto=format&fit=crop" }, // Chimenea y molduras parisino/madrileño
    { id: 5, type: 'detail', img: "https://images.unsplash.com/photo-1550993510-189f7f020302?q=80&w=600&auto=format&fit=crop" }, // Detalle ventana clásica
    { id: 6, type: 'minimal', text: 'ARTE' },
    { id: 7, type: 'art', img: "https://images.unsplash.com/photo-1556020685-ae41abfc9365?q=80&w=600&auto=format&fit=crop", grayscale: true }, // Interior clásico
    { id: 8, type: 'detail', img: "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=600&auto=format&fit=crop" }, // Salón elegante Madrid
    { id: 9, type: 'minimal', text: 'PERSPECTIVA' },
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 flex flex-col items-center selection:bg-gray-100">
      <div className="max-w-[935px] w-full px-5">
        <header className="flex mb-16 md:mb-20">
          <div className="flex-[0_0_30%] flex justify-center">
            {/* Avatar Logo updated to font-extrabold */}
            <div className="w-20 h-20 md:w-36 md:h-36 rounded-full bg-navy-900 text-white flex items-center justify-center font-spartan font-extrabold tracking-tighter text-lg md:text-3xl border border-gray-100 shadow-sm lowercase">
              lahuerta
            </div>
          </div>
          <div className="flex-1 pt-4">
            <div className="flex items-center mb-6 gap-8">
              <h1 className="text-2xl font-light tracking-[0.2em] uppercase">lahuertarealestate</h1>
              <div className="flex gap-4">
                <button className="border border-gray-200 px-6 py-1.5 rounded-md text-sm font-bold tracking-widest hover:bg-gray-50 transition-colors">PERFIL</button>
                <button className="bg-black text-white px-6 py-1.5 rounded-md text-sm font-bold tracking-widest hover:bg-navy-900 transition-colors">FOLLOW</button>
              </div>
            </div>
            <div className="text-sm tracking-wide max-w-md">
              <span className="font-bold text-gray-400 uppercase text-[10px] tracking-[0.3em] block mb-2">Architectural Vision</span>
              <p className="text-navy-900 leading-relaxed italic font-serif text-lg">
                "Vemos el potencial donde otros solo ven metros cuadrados."
              </p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-3 gap-1 md:gap-10 mb-16">
          {posts.map((post) => (
            <div key={post.id} className="relative aspect-square overflow-hidden bg-stone-50 transition-all duration-700 hover:scale-[0.98] cursor-pointer group">
              {post.type === 'minimal' && (
                <div className="w-full h-full flex items-center justify-center bg-white border border-gray-100">
                   <span className="text-[10px] font-bold tracking-[0.5em] text-gray-300 uppercase group-hover:text-navy-900 transition-colors">{post.text}</span>
                </div>
              )}
              {(post.type === 'detail' || post.type === 'art' || post.type === 'arch') && post.img && (
                <img 
                  src={post.img} 
                  className={`w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 ${post.grayscale ? 'grayscale' : ''} ${post.type === 'detail' ? 'p-0' : ''}`} 
                  alt="Lahuerta Aesthetic" 
                />
              )}
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Strategy Summary Panel */}
        <div className="max-w-2xl mx-auto bg-white border border-gray-200 p-8 md:p-12 shadow-sm rounded-sm animate-fade-in text-navy-900">
          <h3 className="font-sans text-lg font-bold uppercase tracking-[2px] border-b-2 border-black pb-3 mb-8">
            ESTRATEGIA C: FIRMA DE AUTOR
          </h3>
          <ul className="space-y-6 list-none p-0 leading-relaxed text-[15px]">
            <li className="flex gap-4">
                <Diamond className="shrink-0 mt-1 text-gray-400" size={18} />
                <div>
                  <strong className="block mb-1 uppercase text-[10px] tracking-widest text-gray-500">Proyección al Cliente</strong>
                  <p className="font-light text-navy-900">Estética y detalle constructivo. Materiales, iluminación y composición artística. Percepción de exclusividad.</p>
                </div>
            </li>
            <li className="flex gap-4">
                <User className="shrink-0 mt-1 text-gray-400" size={18} />
                <div>
                  <strong className="block mb-1 uppercase text-[10px] tracking-widest text-gray-500">Rol de la Dirección</strong>
                  <p className="font-light text-navy-900">Presencia Institucional. Imagen de dirección facultativa y autoría, proyectando estatus sin necesidad de creación de contenido masivo.</p>
                </div>
            </li>
            <li className="flex gap-4">
                <Eye className="shrink-0 mt-1 text-gray-400" size={18} />
                <div>
                  <strong className="block mb-1 uppercase text-[10px] tracking-widest text-gray-500">Requisitos Operativos</strong>
                  <p className="font-light text-navy-900">Dirección de arte exigente. Selección crítica de material visual. Prioridad absoluta de la calidad sobre la frecuencia.</p>
                </div>
            </li>
          </ul>
          <div className="mt-10 p-5 bg-stone-50 border-l-4 border-black">
              <p className="text-sm font-medium leading-relaxed">
                <strong>Análisis Estratégico:</strong> Diferenciación Premium. Eleva el valor percibido de la marca, justificando honorarios superiores mediante la especialización técnica y estética.
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstaLifestyle;
