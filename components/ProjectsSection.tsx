
import React from 'react';
import Reveal from './Reveal';

const projects = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    size: "large"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
    size: "tall"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop",
    size: "small"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
    size: "wide"
  }
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="proyectos" className="py-24 md:py-32 bg-white border-t border-stone-100">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id}
              className={`relative overflow-hidden group bg-stone-100 rounded-lg ${
                project.size === 'large' ? 'md:col-span-8 aspect-[16/9]' :
                project.size === 'tall' ? 'md:col-span-4 aspect-[3/4]' :
                project.size === 'wide' ? 'md:col-span-8 aspect-[21/9]' :
                'md:col-span-4 aspect-square'
              }`}
            >
              <img 
                src={project.image} 
                alt="Proyecto Lahuerta"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-navy-900/10 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <div className="w-12 h-[1px] bg-stone-200 mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
