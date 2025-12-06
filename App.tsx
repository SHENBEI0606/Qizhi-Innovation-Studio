import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SectionBackground } from './components/SectionBackground';
import { SectionGoals } from './components/SectionGoals';
import { SectionDirections } from './components/SectionDirections';
import { SectionProjects } from './components/SectionProjects';
import { SectionMechanism } from './components/SectionMechanism';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-slate-900 font-sans selection:bg-amber-400 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <SectionBackground />
        <SectionGoals />
        <SectionDirections />
        <SectionProjects />
        <SectionMechanism />
      </main>
      <Footer />
    </div>
  );
};

export default App;