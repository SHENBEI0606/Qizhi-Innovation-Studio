import React, { useState, useEffect } from 'react';
import { Menu, X, Command } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: '首页', href: '#home' },
    { name: '工作室简介', href: '#background' },
    { name: '培养模式', href: '#training' },
    { name: '工作方向', href: '#directions' },
    { name: '在研项目', href: '#projects' },
    { name: '孵化机制', href: '#mechanism' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-sm py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className={`p-2 rounded-lg transition-colors ${scrolled ? 'bg-amber-400 text-black' : 'bg-black text-white'}`}>
            <Command size={24} />
          </div>
          <div className="flex flex-col">
            <span className={`font-bold text-lg leading-none ${scrolled ? 'text-white' : 'text-black'}`}>启智双创</span>
            <span className={`text-[10px] tracking-widest uppercase ${scrolled ? 'text-gray-400' : 'text-black/60'}`}>Studio</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`text-sm font-medium hover:text-amber-400 transition-colors relative group ${scrolled ? 'text-gray-300' : 'text-black'}`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className={scrolled ? 'text-white' : 'text-black'}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-white hover:text-amber-400 font-medium py-2 border-b border-gray-800"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};