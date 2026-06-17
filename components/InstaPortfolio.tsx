
import React from 'react';
import { Heart, Ellipsis, Grid3X3, Film, UserSquare2, Building2, UserX, Settings } from 'lucide-react';

const InstaPortfolio: React.FC = () => {
  const posts = [
    { id: 1, img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=600&auto=format&fit=crop" }, // Apartamento clásico Madrid
    { id: 2, img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&auto=format&fit=crop" }, // Salón señorial
    { id: 3, img: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=600&auto=format&fit=crop" }, // Salón clásico
    { id: 4, img: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=600&auto=format&fit=crop" }, // Dormitorio elegante
    { id: 5, img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=600&auto=format&fit=crop" }, // Pasillo con molduras
    { id: 6, img: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=600&auto=format&fit=crop" }, // Detalle salón
    { id: 7, img: "https://images.unsplash.com/photo-1502005229762-cf1afd3daa25?q=80&w=600&auto=format&fit=crop" }, // Chimenea clásica
    { id: 8, img: "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=600&auto=format&fit=crop" }, // Interior lujo
    { id: 9, img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&w=600&auto=format&fit=crop" }, // Espacio diáfano clásico
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] pt-32 pb-20 flex flex-col items-center selection:bg-gray-200">
      <div className="max-w-[935px] w-full px-5">
        <header className="flex mb-12 md:mb-16">
          <div className="flex-[0_0_30%] flex justify-center">
            {/* Avatar Logo updated to font-extrabold */}
            <div className="w-20 h-20 md:w-36 md:h-36 rounded-full bg-navy-900 text-white flex items-center justify-center font-spartan font-extrabold tracking-tighter text-lg md:text-3xl border border-gray-100 shadow-sm lowercase">
              lahuerta
            </div>
          </div>
          <div className="flex-1">
            <div className="flex items-center mb-5 gap-4">
              <h1 className="text-2xl md:text-3xl font-light tracking-tight">lahuertarealestate</h1>
              <button className="bg-navy-900 text-white px-6 py-1.5 rounded-md text-sm font-semibold hover:bg-navy-800 transition-colors">Seguir</button>
              <Ellipsis size={24} className="cursor-pointer" />
            </div>
            <div className="hidden md:flex gap-10 mb-5">
              <span><strong>48</strong> publicaciones</span>
              <span><strong>2.1k</strong> seguidores</span>
              <span><strong>315</strong> seguidos</span>
            </div>
            <div className="text-sm">
              <span className="font-bold">Lahuerta Real Estate</span><br />
              Consultora Inmobiliaria líder en Madrid. Especialistas en activos singulares y transformación de espacios dirigida por arquitectos.
            </div>
          </div>
        </header>

        <div className="border-t border-gray-200 flex justify-center gap-14 mb-4">
          <div className="border-t border-black -mt-[1px] py-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest cursor-pointer">
            <Grid3X3 size={14} /> PUBLICACIONES
          </div>
          <div className="py-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 cursor-pointer hover:text-navy-900 transition-colors">
            <Film size={14} /> REELS
          </div>
          <div className="py-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 cursor-pointer hover:text-navy-900 transition-colors">
            <UserSquare2 size={14} /> ETIQUETADAS
          </div>
        </div>

        <div className="grid grid-cols-3 gap-1 md:gap-7 mb-16">
          {posts.map((post) => (
            <div key={post.id} className="relative aspect-square overflow-hidden bg-gray-100 group cursor-pointer">
              <img src={post.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Lahuerta Property" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Heart fill="white" className="text-white" size={24} />
              </div>
            </div>
          ))}
        </div>

        {/* Strategy Summary Panel */}
        <div className="max-w-2xl mx-auto bg-white border border-gray-200 p-8 md:p-12 shadow-sm rounded-sm animate-fade-in text-navy-900">
          <h3 className="font-sans text-lg font-bold uppercase tracking-[2px] border-b-2 border-black pb-3 mb-8">
            ESTRATEGIA A: PORTFOLIO DE ACTIVOS
          </h3>
          <ul className="space-y-6 list-none p-0 leading-relaxed text-[15px]">
            <li className="flex gap-4">
                <Building2 className="shrink-0 mt-1 text-gray-400" size={18} />
                <div>
                  <strong className="block mb-1 uppercase text-[10px] tracking-widest text-gray-500">Proyección al Cliente</strong>
                  <p className="font-light text-navy-900">Foco exclusivo en el inmueble. Escaparate visual de fachadas, interiores y zonas comunes. Percepción de catálogo premium.</p>
                </div>
            </li>
            <li className="flex gap-4">
                <UserX className="shrink-0 mt-1 text-gray-400" size={18} />
                <div>
                  <strong className="block mb-1 uppercase text-[10px] tracking-widest text-gray-500">Rol de la Dirección</strong>
                  <p className="font-light text-navy-900">Supervisión. No requiere exposición pública ni presencia en cámara del socio fundador.</p>
                </div>
            </li>
            <li className="flex gap-4">
                <Settings className="shrink-0 mt-1 text-gray-400" size={18} />
                <div>
                  <strong className="block mb-1 uppercase text-[10px] tracking-widest text-gray-500">Requisitos Operativos</strong>
                  <p className="font-light text-navy-900">Producción de fotografía de arquitectura y vídeo recorrido. Gestión delegable y mantenimiento sencillo.</p>
                </div>
            </li>
          </ul>
          <div className="mt-10 p-5 bg-stone-50 border-l-4 border-black">
              <p className="text-sm font-medium leading-relaxed">
                <strong>Análisis Estratégico:</strong> Opción conservadora y eficiente. Maximiza la visibilidad del producto reduciendo la dependencia de la marca personal. Ideal para una fase inicial de captación de producto.
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstaPortfolio;
