import React from 'react';
import { APP_INFO } from '../constants';
import { ArrowUpRight, MapPin, Phone, Mail, Command, Github, Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  const links = [
    { name: '首页', href: '#home' },
    { name: '工作室简介', href: '#background' },
    { name: '培养模式', href: '#training' },
    { name: '工作方向', href: '#directions' },
    { name: '在研项目', href: '#projects' },
    { name: '孵化机制', href: '#mechanism' },
  ];

  return (
    <footer className="bg-black text-white pt-24 pb-12 border-t border-zinc-800 relative overflow-hidden font-sans">
      {/* Decorative large text background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.02]">
        <h1 className="text-[20vw] font-black text-white leading-none -translate-y-1/4 select-none font-oswald whitespace-nowrap">
          INNOVATION STUDIO
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-amber-400 text-black rounded">
                <Command size={24} />
              </div>
              <div>
                <span className="text-2xl font-bold tracking-tight block">启智双创工作室</span>
                <span className="text-xs text-gray-500 uppercase tracking-widest">{APP_INFO.studioNameEn}</span>
              </div>
            </div>
            
            <p className="text-gray-400 max-w-sm leading-relaxed border-l-2 border-amber-400/30 pl-4">
              {APP_INFO.programName}
              <br/>
              打造“产教融合、校企协同”的创新创业孵化平台。
            </p>
            
            <div className="flex flex-col gap-4 text-gray-400 pt-4">
              <div className="flex items-start gap-3 group">
                <div className="p-2 bg-zinc-900 rounded-full group-hover:bg-amber-400 group-hover:text-black transition-colors">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="mt-1">{APP_INFO.university}</span>
              </div>
              <div className="flex items-center gap-3 group">
                 <div className="p-2 bg-zinc-900 rounded-full group-hover:bg-amber-400 group-hover:text-black transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span>contact@qizhi-studio.edu.cn</span>
              </div>
              <div className="flex items-center gap-3 group">
                 <div className="p-2 bg-zinc-900 rounded-full group-hover:bg-amber-400 group-hover:text-black transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+86 0431-80000000</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold text-white mb-8 flex items-center gap-2">
              <span className="w-8 h-1 bg-amber-400"></span>
              快速导航
            </h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-amber-400 transition-colors flex items-center gap-3 group py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-amber-400 transition-colors"></span>
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* External Links / Socials */}
          <div className="lg:col-span-4">
             <h3 className="text-lg font-bold text-white mb-8 flex items-center gap-2">
              <span className="w-8 h-1 bg-amber-400"></span>
              相关链接
            </h3>
             <div className="flex flex-col gap-4">
                <a href="#" className="group bg-zinc-900/50 border border-zinc-800 p-4 hover:border-amber-400/50 hover:bg-zinc-900 transition-all flex justify-between items-center rounded-sm">
                   <div>
                      <div className="font-bold text-white group-hover:text-amber-400 transition-colors">长春师范大学</div>
                      <div className="text-xs text-gray-500">官方网站</div>
                   </div>
                   <ArrowUpRight className="text-gray-600 group-hover:text-amber-400 transition-colors" />
                </a>
                <a href="#" className="group bg-zinc-900/50 border border-zinc-800 p-4 hover:border-amber-400/50 hover:bg-zinc-900 transition-all flex justify-between items-center rounded-sm">
                   <div>
                      <div className="font-bold text-white group-hover:text-amber-400 transition-colors">教育学院</div>
                      <div className="text-xs text-gray-500">学院主页</div>
                   </div>
                   <ArrowUpRight className="text-gray-600 group-hover:text-amber-400 transition-colors" />
                </a>
             </div>
             
             {/* Social Icons Placeholder */}
             <div className="mt-8 flex gap-4">
                {[Github, Linkedin, Twitter].map((Icon, idx) => (
                   <a key={idx} href="#" className="w-10 h-10 flex items-center justify-center border border-zinc-800 rounded-full text-gray-500 hover:text-black hover:bg-amber-400 hover:border-amber-400 transition-all">
                      <Icon size={18} />
                   </a>
                ))}
             </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
           <p>© 2025 {APP_INFO.studioNameEn}. All rights reserved.</p>
           <div className="flex gap-6 mt-4 md:mt-0">
              <span className="hover:text-amber-400 cursor-pointer transition-colors">隐私政策</span>
              <span className="hover:text-amber-400 cursor-pointer transition-colors">服务条款</span>
           </div>
        </div>
      </div>
    </footer>
  );
};