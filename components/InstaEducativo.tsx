
import React from 'react';
import { Heart, Ellipsis, Grid3X3, Film, UserSquare2, PlayCircle, TrendingUp, UserRound, FileText } from 'lucide-react';

const InstaEducativo: React.FC = () => {
  const posts = [
    { id: 1, type: 'graphic', title: "MERCADO 2025", subtitle: "Predicciones Madrid", color: "#151520" },
    { id: 2, type: 'video', img: "/images/ignacio.jpg", alt: "Ignacio Lahuerta Insight" },
    { id: 3, type: 'graphic', title: "RENTABILIDAD", subtitle: "Distrito Salamanca", color: "#A1A1AA" },
    { id: 4, type: 'image', img: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=600&auto=format&fit=crop" }, // Dormitorio clásico
    { id: 5, type: 'graphic', title: "TIP INVERSOR", subtitle: "Golden Visa Update", color: "#151520" },
    { id: 6, type: 'video', img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=600&auto=format&fit=crop", alt: "Architecture Insight" }, // Interior clásico
    { id: 7, type: 'graphic', title: "REFORMAS", subtitle: "Aumento de valor", color: "#A1A1AA" },
    { id: 8, type: 'image', img: "https://images.unsplash.com/photo-1502005229762-cf1afd3daa25?q=80&w=600&auto=format&fit=crop" }, // Salón con chimenea
    { id: 9, type: 'video', img: "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=600&auto=format&fit=crop", alt: "Madrid Market" }, // Interior elegante
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
            <div className="hidden md:flex gap-10 mb-5 text-gray-600">
              <span><strong>142</strong> publicaciones</span>
              <span><strong>8.4k</strong> seguidores</span>
              <span><strong>490</strong> seguidos</span>
            </div>
            <div className="text-sm">
              <span className="font-bold">Lahuerta Insights</span><br />
              Análisis técnico y estrategias de inversión inmobiliaria en Madrid. <br />
              Uniendo arquitectura y rentabilidad.
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
        </div>

        <div className="grid grid-cols-3 gap-1 md:gap-7 mb-16">
          {posts.map((post) => (
            <div key={post.id} className="relative aspect-square overflow-hidden bg-gray-100 cursor-pointer group">
              {post.type === 'graphic' && (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundColor: post.color }}>
                   <span className="text-white font-black text-lg md:text-2xl tracking-tighter mb-2">{post.title}</span>
                   <span className="text-white/70 text-[10px] uppercase tracking-widest border-t border-white/20 pt-2">{post.subtitle}</span>
                </div>
              )}
              {post.type === 'video' && (
                <>
                  <img 
                    src={post.img} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                    alt={post.alt || "Educational Content"}
                    onError={(e) => {
                        if (post.img.includes('ignacio')) (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop";
                        else (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=600&fit=crop";
                    }}
                  />
                  <PlayCircle className="absolute top-2 right-2 text-white/70" size={20} />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white font-bold text-xs tracking-widest uppercase">VER REEL</span>
                  </div>
                </>
              )}
              {post.type === 'image' && (
                <img src={post.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Lahuerta Deal" />
              )}
            </div>
          ))}
        </div>

        {/* Strategy Summary Panel */}
        <div className="max-w-2xl mx-auto bg-white border border-gray-200 p-8 md:p-12 shadow-sm rounded-sm animate-fade-in text-navy-900">
          <h3 className="font-sans text-lg font-bold uppercase tracking-[2px] border-b-2 border-black pb-3 mb-8">
            ESTRATEGIA B: AUTORIDAD DE MERCADO
          </h3>
          <ul className="space-y-6 list-none p-0 leading-relaxed text-[15px]">
            <li className="flex gap-4">
                <TrendingUp className="shrink-0 mt-1 text-gray-400" size={18} />
                <div>
                  <strong className="block mb-1 uppercase text-[10px] tracking-widest text-gray-500">Proyección al Cliente</strong>
                  <p className="font-light text-navy-900">Consultoría y análisis. Gráficos de tendencias, rentabilidades y valoración de zonas. Percepción de experto técnico.</p>
                </div>
            </li>
            <li className="flex gap-4">
                <UserRound className="shrink-0 mt-1 text-gray-400" size={18} />
                <div>
                  <strong className="block mb-1 uppercase text-[10px] tracking-widest text-gray-500">Rol de la Dirección</strong>
                  <p className="font-light text-navy-900">Portavoz Activo. Requiere comunicación directa en vídeo y exposición de criterio profesional.</p>
                </div>
            </li>
            <li className="flex gap-4">
                <FileText className="shrink-0 mt-1 text-gray-400" size={18} />
                <div>
                  <strong className="block mb-1 uppercase text-[10px] tracking-widest text-gray-500">Requisitos Operativos</strong>
                  <p className="font-light text-navy-900">Planificación editorial semanal, análisis de datos y grabación de cápsulas informativas.</p>
                </div>
            </li>
          </ul>
          <div className="mt-10 p-5 bg-stone-50 border-l-4 border-black">
              <p className="text-sm font-medium leading-relaxed">
                <strong>Análisis Estratégico:</strong> Herramienta de captación de inversión. Posiciona a la firma por conocimiento y confianza técnica. Alto retorno en reputación corporativa a medio plazo.
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstaEducativo;
