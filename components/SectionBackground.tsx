import React from 'react';
import { BACKGROUND_CONTENT, IMAGES, ORGANIZATION_STRUCTURE } from '../constants';
import { Quote, Zap } from 'lucide-react';

export const SectionBackground: React.FC = () => {
  return (
    <section id="background" className="bg-white overflow-hidden">
      
      {/* --- Part 1: Intro Profile --- */}
      <div className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left: Visual & Vertical Text */}
          <div className="lg:w-5/12 relative">
             <div className="flex gap-8">
                {/* Vertical Text */}
                <div className="hidden md:flex flex-col justify-between py-4 h-[600px]">
                   <h2 className="text-6xl font-black text-black writing-vertical-lr rotate-180 uppercase tracking-wider font-oswald">
                      {BACKGROUND_CONTENT.enTitle}
                   </h2>
                   <div className="w-1 h-32 bg-amber-400"></div>
                </div>

                {/* Image Container with Redesigned Overlay */}
                <div className="relative flex-1 h-[500px] md:h-[600px] group">
                   <div className="absolute top-0 right-0 w-full h-full bg-gray-100 -z-10 translate-x-4 translate-y-4"></div>
                   
                   <img 
                      src={IMAGES.background} 
                      alt="Background" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                   />

                   {/* Design Element 1: Top Right Tag */}
                   <div className="absolute top-6 right-6 bg-black/90 text-white px-4 py-1 text-sm font-bold tracking-widest border-l-2 border-amber-400 shadow-lg">
                      始于 2018
                   </div>

                   {/* Design Element 2: Bottom Left Info Card - UPDATED WITH CHINESE STATS */}
                   <div className="absolute bottom-8 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 border-l-4 border-amber-400 shadow-2xl transition-transform duration-500 hover:-translate-y-1">
                      <div className="flex justify-between items-start mb-3">
                          <span className="text-amber-600 font-bold text-xs tracking-widest">长春师范大学 · 教育学院</span>
                          <Zap size={16} className="text-amber-500 fill-amber-500" />
                      </div>
                      
                      <h4 className="text-2xl font-black text-black mb-1 leading-tight">
                         启智双创工作室
                      </h4>
                      <p className="text-gray-500 text-sm font-medium mb-6 tracking-wide">
                         产教融合 · 校企协同 · 创新孵化
                      </p>
                      
                      {/* Integrated Stats (Moved here and translated) */}
                      <div className="grid grid-cols-2 gap-4 border-t border-gray-100 pt-4">
                           <div>
                              <span className="block text-3xl font-black text-black leading-none font-oswald">10+</span>
                              <span className="text-xs text-gray-500 font-bold mt-1 block">核心成员</span>
                          </div>
                          <div>
                              <span className="block text-3xl font-black text-black leading-none font-oswald">100%</span>
                              <span className="text-xs text-gray-500 font-bold mt-1 block">项目研发率</span>
                          </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* Right: Content */}
          <div className="lg:w-7/12 flex flex-col justify-center">
             <div className="mb-12">
                <span className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-2 block">Company Profile</span>
                <h3 className="text-4xl md:text-5xl font-black text-black mb-8 leading-tight">
                   {BACKGROUND_CONTENT.title}
                </h3>
                <Quote className="text-amber-400 w-12 h-12 mb-6 rotate-180" />
                <p className="text-xl text-gray-800 font-medium leading-relaxed mb-6">
                   {BACKGROUND_CONTENT.mainText}
                </p>
                <p className="text-gray-500 leading-relaxed mb-8">
                   {BACKGROUND_CONTENT.subText}
                </p>
             </div>
          </div>

        </div>
      </div>

      {/* --- Part 2: Organization Structure --- */}
      <div className="bg-zinc-900 py-24 relative">
         {/* Decorative Grid Background */}
         <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
         
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
               <h3 className="text-white text-3xl font-black mb-2">组织架构</h3>
               <p className="text-gray-500 uppercase tracking-widest text-sm">Organizational Structure</p>
               {/* Connector Line */}
               <div className="w-px h-12 bg-gray-700 mx-auto mt-4"></div>
               <div className="w-1/2 h-px bg-gray-700 mx-auto"></div>
               <div className="flex justify-between w-1/2 mx-auto">
                  <div className="w-px h-8 bg-gray-700"></div>
                  <div className="w-px h-8 bg-gray-700"></div>
                  <div className="w-px h-8 bg-gray-700"></div>
                  <div className="w-px h-8 bg-gray-700"></div>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {ORGANIZATION_STRUCTURE.map((center, index) => (
                  <div key={center.id} className="bg-zinc-800 border border-zinc-700 group hover:border-amber-400 transition-colors duration-300 relative overflow-hidden">
                     {/* Top Color Bar */}
                     <div className={`h-1 w-full ${center.color}`}></div>
                     
                     <div className="p-6">
                        {/* Header */}
                        <div className="flex items-center gap-4 mb-6">
                           <div className={`p-3 rounded bg-zinc-900 text-white group-hover:bg-amber-400 group-hover:text-black transition-colors`}>
                              <center.icon size={24} />
                           </div>
                           <div className="flex flex-col">
                              <h4 className="font-bold text-white text-lg leading-tight">{center.title}</h4>
                              {center.subtitle && <span className="text-xs text-gray-500">{center.subtitle}</span>}
                           </div>
                        </div>

                        {/* Departments List */}
                        <div className="space-y-2">
                           {center.departments.map((dept, idx) => (
                              <div key={idx} className="flex items-center gap-3 py-2 border-b border-zinc-700/50 last:border-0">
                                 <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full group-hover:bg-amber-400 transition-colors"></span>
                                 <span className="text-gray-400 text-sm group-hover:text-gray-200 transition-colors">{dept}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                     
                     {/* Decorative Number */}
                     <div className="absolute bottom-2 right-2 text-6xl font-black text-zinc-700/20 pointer-events-none font-oswald">
                        0{index + 1}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>

      <style>{`
        .writing-vertical-lr {
          writing-mode: vertical-lr;
        }
      `}</style>
    </section>
  );
};