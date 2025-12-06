import React from 'react';
import { APP_INFO, IMAGES } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative w-full h-screen bg-amber-400 overflow-hidden flex items-center">
      
      {/* --- Visual Elements --- */}
      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-multiply" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>

      {/* Concentric Circles Decoration */}
      <div className="absolute top-0 right-0 w-[80vw] h-[80vw] translate-x-1/3 -translate-y-1/4 rounded-full border border-black/5 opacity-60"></div>
      <div className="absolute top-0 right-0 w-[60vw] h-[60vw] translate-x-1/3 -translate-y-1/4 rounded-full border border-black/5 opacity-60"></div>
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] translate-x-1/3 -translate-y-1/4 rounded-full border border-black/5 opacity-60"></div>

      {/* --- Main Content --- */}
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left: Text */}
        <div className="flex flex-col pt-20 lg:pt-0">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-black"></div>
            <span className="text-sm font-bold tracking-[0.2em] uppercase font-oswald text-black/80">
              {APP_INFO.universityEn}
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-black leading-[0.9] tracking-tighter mb-8">
            启智双创<br />工作室
          </h1>

          <p className="text-xl md:text-2xl text-black/80 font-medium mb-2">
            {APP_INFO.programName}
          </p>
          <p className="text-black/60 font-light">
            AI + Education / Digital Twin / Smart Teaching
          </p>

          {/* Buttons removed as per user request */}
          
          {/* Quick Stats Grid */}
          <div className="grid grid-cols-3 gap-8 mt-16 border-t border-black/10 pt-8">
             <div>
                <div className="text-3xl font-black text-black font-oswald">30+</div>
                <div className="text-xs font-bold uppercase tracking-wider text-black/50 mt-1">Projects</div>
             </div>
             <div>
                <div className="text-3xl font-black text-black font-oswald">12</div>
                <div className="text-xs font-bold uppercase tracking-wider text-black/50 mt-1">Awards</div>
             </div>
             <div>
                <div className="text-3xl font-black text-black font-oswald">100%</div>
                <div className="text-xs font-bold uppercase tracking-wider text-black/50 mt-1">Employment</div>
             </div>
          </div>
        </div>

        {/* Right: Visual */}
        <div className="hidden lg:flex justify-end relative">
          <div className="relative w-[500px] h-[500px]">
             {/* Decorative Ring */}
             <div className="absolute inset-0 border-2 border-black/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
             
             {/* Main Image Container */}
             <div className="absolute inset-4 rounded-full overflow-hidden border-8 border-white/20 shadow-2xl">
                <img 
                  src={IMAGES.hero} 
                  alt="Studio Hero" 
                  className="w-full h-full object-cover"
                />
                {/* Tech Overlay */}
                <div className="absolute inset-0 bg-black/10"></div>
             </div>

             {/* Floating Badge */}
             <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl">
                <div className="flex flex-col">
                   <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">FOCUS</span>
                   <span className="text-2xl font-bold text-black font-oswald">AI + Education</span>
                </div>
             </div>
          </div>
        </div>

      </div>

      {/* Tech Stack Marquee */}
      <div className="absolute bottom-0 left-0 w-full bg-black py-4 overflow-hidden whitespace-nowrap">
         <div className="inline-block animate-marquee">
            {[...Array(2)].map((_, i) => (
                <span key={i} className="text-white/30 font-oswald font-bold text-xl uppercase tracking-widest mx-4">
                   Python • React • Unity3D • TensorFlow • Digital Twin • Big Data • Cloud Computing • UI/UX Design • 
                </span>
            ))}
         </div>
      </div>
      <style>{`
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .animate-marquee {
            animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};