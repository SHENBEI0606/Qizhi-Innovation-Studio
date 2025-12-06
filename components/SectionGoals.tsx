import React from 'react';
import { TRAINING_CONTENT } from '../constants';

export const SectionGoals: React.FC = () => {
  return (
    <section id="training" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
                <h2 className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-2">Development Strategy</h2>
                <h3 className="text-4xl font-black text-black">培养模式</h3>
            </div>
            <div className="w-full md:w-auto mt-6 md:mt-0">
                <div className="h-1 w-24 bg-amber-400"></div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRAINING_CONTENT.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 group hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl border-b-4 border-transparent hover:border-amber-400"
            >
              <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-400 transition-colors duration-300">
                <item.icon className="w-6 h-6 text-gray-800 group-hover:text-black" />
              </div>
              
              <h4 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};