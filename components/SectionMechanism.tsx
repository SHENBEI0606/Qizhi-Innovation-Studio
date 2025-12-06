import React from 'react';
import { MECHANISM_STEPS, SECTION_ICONS } from '../constants';
import { LayoutGrid, ChevronRight } from 'lucide-react';

export const SectionMechanism: React.FC = () => {
  return (
    <section id="mechanism" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-black mb-2">项目孵化机制</h2>
            <div className="w-16 h-1 bg-amber-400 mx-auto"></div>
        </div>

        <div className="space-y-6">
            {MECHANISM_STEPS.map((step, index) => {
               // @ts-ignore
               const iconKeys = Object.keys(SECTION_ICONS);
               // @ts-ignore
               const Icon = SECTION_ICONS[iconKeys[index % iconKeys.length]] || LayoutGrid;

               return (
                  <div key={step.id} className="group flex flex-col md:flex-row bg-gray-50 border-l-4 border-gray-200 hover:border-amber-400 transition-all duration-300">
                     
                     {/* Left: Icon Block */}
                     <div className="w-full md:w-48 bg-gray-100 flex items-center justify-center p-6 group-hover:bg-amber-400 transition-colors duration-300">
                        <Icon size={40} className="text-gray-400 group-hover:text-black transition-colors" />
                     </div>

                     {/* Middle: Title */}
                     <div className="p-8 md:w-1/3 flex flex-col justify-center">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{step.title}</h3>
                        {step.period && (
                           <span className="text-xs font-bold text-amber-500 uppercase tracking-wider">{step.period}</span>
                        )}
                     </div>

                     {/* Right: Details */}
                     <div className="p-8 flex-1 border-t md:border-t-0 md:border-l border-gray-200 flex items-center justify-between">
                        <ul className="space-y-2">
                           {step.details.map((detail, idx) => (
                              <li key={idx} className="text-gray-600 text-sm flex items-start gap-2">
                                 <span className="w-1.5 h-1.5 bg-gray-400 mt-1.5"></span>
                                 {detail}
                              </li>
                           ))}
                        </ul>
                        <ChevronRight className="text-gray-300 group-hover:text-amber-400 transition-colors" />
                     </div>
                  </div>
               );
            })}
        </div>
      </div>
    </section>
  );
};