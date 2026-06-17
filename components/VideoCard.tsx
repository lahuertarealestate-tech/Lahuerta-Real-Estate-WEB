
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { VideoProject } from '../data/videoGallery';

interface VideoCardProps {
  project: VideoProject;
}

/**
 * IMPORTANTE: Sube tus vídeos .mp4 comprimidos (max 5MB) a la carpeta /public/assets/videos/
 * y actualiza los nombres en data/videoGallery.ts
 */

const VideoCard: React.FC<VideoCardProps> = ({ project }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play().catch(() => {
              console.log("Autoplay preventivo activado");
            });
            setIsPlaying(true);
          } else {
            videoRef.current?.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  const getSizeClasses = () => {
    switch (project.size) {
      case 'large': return 'md:col-span-2 md:row-span-2 aspect-square md:aspect-auto';
      case 'tall': return 'md:row-span-2 aspect-[3/4]';
      case 'wide': return 'md:col-span-2 aspect-[16/9]';
      default: return 'aspect-square';
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`relative group overflow-hidden bg-stone-100 rounded-lg ${getSizeClasses()}`}
    >
      <video
        ref={videoRef}
        src={project.videoSrc}
        poster={project.posterSrc}
        muted
        loop
        playsInline
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 pointer-events-none">
        <span className="text-[9px] font-bold tracking-[0.4em] text-sand-400 uppercase mb-2">
          {project.category}
        </span>
        <h3 className="text-white text-xl md:text-3xl font-serif tracking-tight leading-none">
          {project.title}
        </h3>
        <div className="w-0 group-hover:w-12 h-[1px] bg-sand-400 mt-4 transition-all duration-700 delay-100"></div>
      </div>

      {!isPlaying && (
        <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-white/30" />
      )}
    </motion.div>
  );
};

export default VideoCard;
