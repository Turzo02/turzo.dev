import React from 'react';
import { ArrowUpRight, Sun, Moon } from 'lucide-react';

export const Navbar = ({ theme, toggleTheme }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
    <div className="flex items-center justify-between w-full max-w-5xl px-6 py-3 bg-white/10 dark:bg-black/20 backdrop-blur-2xl border border-white/20 dark:border-white/10 rounded-full shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]">
      <div className="flex items-center gap-2">
        <div className="size-9 rounded-full bg-linear-to-tr from-indigo-600 to-purple-500 flex items-center justify-center text-white font-bold text-sm shadow-lg">JD</div>
      </div>
      <div className="hidden md:flex items-center gap-8">
        {['About', 'Skills', 'Projects', 'Experience'].map((item) => (
          <a 
            key={item}
            href={`#${item.toLowerCase()}`} 
            className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-white transition-all duration-300"
          >
            {item}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full bg-slate-200/50 dark:bg-white/5 hover:bg-slate-300/50 dark:hover:bg-white/10 transition-colors"
        >
          {theme === 'dark' ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-slate-700" />}
        </button>
        <a 
          href="#contact" 
          className="flex items-center gap-2 px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold rounded-full transition-all shadow-lg shadow-indigo-500/20 active:scale-95"
        >
          <span>Contact</span>
          <ArrowUpRight size={16} />
        </a>
      </div>
    </div>
  </nav>
);