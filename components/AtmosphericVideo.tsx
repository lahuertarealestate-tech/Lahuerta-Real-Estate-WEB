
import React, { useRef, useEffect } from 'react';
import { getVideoPath } from '../config/videoMap';

interface AtmosphericVideoProps {
  videoNumber: number;
  opacity?: number;
  className?: string;
}

const AtmosphericVideo: React.FC<AtmosphericVideoProps> = ({ 
  videoNumber, 
  opacity = 0.05, 
  className = "" 
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        // Autoplay policy handling silently
      });
    }
  }, []);

  return (
    <div className={`absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0 ${className}`}>
      <video
        ref={videoRef}
        className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 grayscale"
        style={{ opacity: opacity }}
        playsInline
        autoPlay
        muted
        loop
        id={`bg-video-${videoNumber}`}
      >
        <source src={getVideoPath(videoNumber)} type="video/mp4" />
      </video>
    </div>
  );
};

export default AtmosphericVideo;
