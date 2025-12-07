import React, { useState, useEffect, useRef } from 'react';
import { PROJECTS_CONTENT } from '../constants';
import { ProjectItem } from '../types';

// Helper component to handle individual intersection logic
const ProjectCard: React.FC<{ project: ProjectItem; index: number }> = ({ project, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Trigger when 20% of the element is visible
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          // Unobserve after triggering once for a permanent fade-in effect
          if (domRef.current) observer.unobserve(domRef.current);
        }
      },
      { threshold: 0.2 }
    );

    const currentElement = domRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, []);

  return (
    <div 
      ref={domRef}
      className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
    >
      {/* Visual Area */}
      <div className="lg:w-7/12 w-full">
        <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 shadow-2xl relative group">
            {/* Browser Header */}
            <div className="h-8 bg-gray-800 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-4 w-64 h-5 bg-gray-900 rounded text-[10px] flex items-center px-2 text-gray-500 font-mono">
                  {project.title.toLowerCase()}.ai/dev
                </div>
            </div>
            {/* Image Area */}
            <div className="aspect-[16/9] relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                {/* Status Badge */}
                <div className="absolute top-4 right-4 bg-amber-400 text-black text-xs font-bold px-3 py-1 uppercase">
                  {project.status}
                </div>
            </div>
        </div>
      </div>

      {/* Text Area */}
      <div className="lg:w-5/12 w-full">
        <div className={`h-1 w-20 bg-amber-400 mb-6 transition-all duration-700 delay-300 ${isVisible ? 'w-20 opacity-100' : 'w-0 opacity-0'}`}></div>
        <h3 className="text-3xl font-bold text-white mb-6">{project.title}</h3>
        <p className="text-gray-400 text-lg leading-relaxed mb-8">
            {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
            {project.features.map((feature, fIdx) => (
              <span key={fIdx} className="border border-gray-700 text-gray-300 px-4 py-2 text-sm uppercase tracking-wide hover:border-amber-400 hover:text-amber-400 transition-colors cursor-default">
                  {feature}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export const SectionProjects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
           <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4">
              Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Showcase</span>
           </h2>
           <p className="text-gray-500 max-w-2xl mx-auto">
              Our ongoing research and development initiatives pushing the boundaries of AI in education.
           </p>
        </div>

        <div className="space-y-24">
           {PROJECTS_CONTENT.map((project, index) => (
             <ProjectCard key={index} project={project} index={index} />
           ))}
        </div>
      </div>
    </section>
  );
};