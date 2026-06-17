
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Vértice {
  id: string;
  name: string;
  definition: string;
  angle: number;
}

const vértices: Vértice[] = [
  { id: "01", name: "COMPRAR", definition: "ANÁLISIS DE VALOR", angle: -90 },
  { id: "02", name: "DISEÑAR", definition: "VISIÓN TÉCNICA", angle: -18 },
  { id: "03", name: "REFORMAR", definition: "EJECUCIÓN PRIME", angle: 54 },
  { id: "04", name: "ALQUILAR", definition: "GESTIÓN PASIVA", angle: 126 },
  { id: "05", name: "VENDER", definition: "MAXIMIZACIÓN", angle: 198 },
];

const CicloInversor: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const size = 600;
  const center = size / 2;
  const radius = 200;
  const nodeRadius = 8; // Radio de los círculos de los vértices

  // Calculamos las coordenadas de los vértices
  const points = useMemo(() => {
    return vértices.map(v => {
      const radian = (v.angle * Math.PI) / 180;
      return {
        x: center + radius * Math.cos(radian),
        y: center + radius * Math.sin(radian)
      };
    });
  }, [center, radius]);

  // Función para acortar la línea y que la flecha no quede tapada por el círculo
  const getShortenedEndPoint = (start: {x: number, y: number}, end: {x: number, y: number}, gap: number) => {
    const dx = end.x - start.x;
    const dy = end.y - start.y;
    const length = Math.sqrt(dx * dx + dy * dy);
    if (length === 0) return end;
    
    const t = (length - gap) / length;
    return {
      x: start.x + dx * t,
      y: start.y + dy * t
    };
  };

  // Definición de segmentos para la animación secuencial
  const segments = useMemo(() => {
    return points.map((point, i) => {
      const nextIndex = (i + 1) % points.length;
      const nextPoint = points[nextIndex];
      // Acortamos el punto final para que la punta de la flecha toque el borde del círculo, no el centro
      const adjustedEnd = getShortenedEndPoint(point, nextPoint, nodeRadius + 12); 
      return { 
        start: point, 
        end: adjustedEnd, 
        id: i 
      };
    });
  }, [points]);

  // --- CONFIGURACIÓN DE LA ANIMACIÓN ---
  const stepTime = 1.2;    // Tiempo entre el inicio de una flecha y la siguiente
  const lineDuration = 1.8; // Cuánto tarda una flecha en dibujarse y desvanecerse (más largo que stepTime para solapamiento)
  const cyclePause = 2.5;   // EL PARÓN: Tiempo de espera al acabar la vuelta completa
  
  // Tiempo total de un ciclo completo (todas las flechas + la pausa final)
  const totalLoopDuration = (segments.length * stepTime) + cyclePause;

  return (
    <div className="relative w-full max-w-[90vw] md:max-w-[700px] aspect-square flex items-center justify-center select-none">
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 0 1px rgba(0,0,0,0.05))' }}
      >
        <defs>
          {/* Definición de la punta de flecha */}
          <marker 
            id="arrowhead" 
            markerWidth="6" 
            markerHeight="6" 
            refX="5" 
            refY="3" 
            orient="auto"
          >
            <path d="M 0 0 L 6 3 L 0 6" fill="#151520" stroke="none" />
          </marker>
          
           {/* Flecha gris para la estructura base */}
           <marker 
            id="arrowhead-gray" 
            markerWidth="6" 
            markerHeight="6" 
            refX="5" 
            refY="3" 
            orient="auto"
          >
            <path d="M 0 0 L 6 3 L 0 6" fill="#E4E4E7" stroke="none" />
          </marker>
        </defs>

        {/* 1. Estructura Base (Gris suave) - Pentágono estático de fondo */}
        {segments.map((seg, i) => (
           <line
             key={`base-${i}`}
             x1={seg.start.x}
             y1={seg.start.y}
             x2={seg.end.x}
             y2={seg.end.y}
             stroke="#f0f0f0" // Stone-50 approx
             strokeWidth="1"
             markerEnd="url(#arrowhead-gray)"
           />
        ))}

        {/* 2. Animación Secuencial (Navy) - El "Flow" con pausa final */}
        {segments.map((seg, i) => (
           <motion.line
             key={`anim-${i}`}
             x1={seg.start.x}
             y1={seg.start.y}
             x2={seg.end.x}
             y2={seg.end.y}
             stroke="#151520" // Navy 900
             strokeWidth="1.5"
             markerEnd="url(#arrowhead)"
             initial={{ pathLength: 0, opacity: 0 }}
             animate={{ 
               pathLength: [0, 1, 1, 0], // Dibuja -> Mantiene -> Borra
               opacity: [0, 1, 1, 0] 
             }} 
             transition={{
               duration: lineDuration,
               times: [0, 0.4, 0.7, 1], // Timing de la animación de línea individual
               ease: "easeInOut",
               delay: i * stepTime, // Inicio escalonado
               repeat: Infinity,
               // Calculamos el tiempo de espera para que cuadre exactamente con el ciclo total + pausa
               repeatDelay: totalLoopDuration - lineDuration
             }}
           />
        ))}

        {/* 3. Líneas conectoras al centro (Spokes) */}
        {points.map((p, i) => (
          <motion.line
            key={`line-${i}`}
            x1={center}
            y1={center}
            x2={p.x}
            y2={p.y}
            stroke="#A1A1AA"
            strokeWidth="0.5"
            strokeDasharray="4 4" // Dashed para diferenciar del flujo principal
            initial={{ opacity: 0 }}
            animate={{ opacity: hoveredIndex === i ? 0.3 : 0.05 }}
            transition={{ duration: 0.5 }}
          />
        ))}

        {/* 4. Vértices (Puntos interactivos) */}
        {points.map((p, i) => {
          // Lógica para posicionar etiquetas
          const isBottomLabel = i === 2 || i === 3;
          const labelYOffset = isBottomLabel ? 40 : -45;

          // Animación especial para el punto "COMPRAR" (inicio de ciclo)
          // Hace un pequeño pulso cuando el ciclo se reinicia
          const isStartNode = i === 0;

          return (
            <g 
              key={`vertex-${i}`} 
              className="cursor-pointer"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setHoveredIndex(i === hoveredIndex ? null : i)}
            >
              <motion.circle
                cx={p.x}
                cy={p.y}
                r={nodeRadius}
                fill="white"
                stroke="#151520"
                strokeWidth="1.5"
                animate={
                  hoveredIndex === i 
                    ? { scale: 1.3, fill: "#151520", borderColor: "#fff" }
                    : isStartNode 
                      ? { 
                          scale: [1, 1.2, 1], // Pulso sutil al reiniciar
                          transition: { 
                             delay: totalLoopDuration - 0.2, // Justo antes de que empiece la línea 0
                             duration: 0.6,
                             repeat: Infinity,
                             repeatDelay: totalLoopDuration - 0.6
                          }
                        }
                      : { scale: 1, fill: "white", borderColor: "#151520" }
                }
                transition={hoveredIndex === i ? { duration: 0.3 } : undefined}
              />
              
              {/* Etiquetas */}
              <foreignObject
                x={p.x - 75}
                y={p.y + labelYOffset}
                width="150"
                height="40"
                className="overflow-visible pointer-events-none"
              >
                <div className="flex flex-col items-center justify-center text-center">
                  <span className={`text-[10px] md:text-xs font-bold tracking-[0.2em] transition-colors duration-500 ${hoveredIndex === i ? 'text-navy-900 scale-110' : 'text-gray-400'}`}>
                    {vértices[i].name}
                  </span>
                </div>
              </foreignObject>
            </g>
          );
        })}
      </svg>

      {/* Centro Dinámico (Información) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-56 pointer-events-none">
        <AnimatePresence mode="wait">
          {hoveredIndex !== null ? (
            <motion.div
              key={`def-${hoveredIndex}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex flex-col items-center bg-white/90 backdrop-blur-sm p-4 rounded-lg"
            >
              <span className="text-[9px] font-bold text-sand-400 tracking-[0.4em] uppercase mb-2">FASE {vértices[hoveredIndex].id}</span>
              <span className="text-sm font-italiana text-navy-900 tracking-widest leading-tight uppercase">
                {vértices[hoveredIndex].definition}
              </span>
            </motion.div>
          ) : (
            <motion.div
              key="default-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center"
            >
               <span className="text-3xl font-serif text-stone-200 opacity-20">LRE</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CicloInversor;
