
import React from 'react';
import VideoCard from './VideoCard';
import { videoGalleryData } from '../data/videoGallery';

const VideoGallery: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full">
      {videoGalleryData.map((project) => (
        <VideoCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default VideoGallery;
