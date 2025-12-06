import React from 'react';
import { DIRECTIONS_CONTENT } from '../constants';
import { ArrowUpRight } from 'lucide-react';

export const SectionDirections: React.FC = () => {
  return (
    <section id="directions" className="py-24 bg-amber-400">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
           <h2 className="text-4xl font-black text-black mb-4">工作方向</h2>
           <p className="text-black/60 font-medium">MAIN PRODUCTS & DIRECTIONS</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {DIRECTIONS_CONTENT.map((direction, index) => (
            <div key={index} className="group relative bg-black overflow-hidden h-[500px]">
               {/* Image */}
               <img 
                 src={direction.image} 
                 alt={direction.title} 
                 className="w-full h-[60%] object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
               />
               
               {/* Content */}
               <div className="absolute bottom-0 left-0 w-full h-[40%] bg-black p-8 flex flex-col justify-center border-t-4 border-amber-500">
                  <div className="flex justify-between items-start mb-2">
                     <span className="text-amber-500 font-bold text-xs uppercase tracking-widest">{direction.tags.join(' / ')}</span>
                     <ArrowUpRight className="text-white w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{direction.title}</h3>
                  <p className="text-gray-400 text-sm line-clamp-2">
                     {direction.description}
                  </p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};