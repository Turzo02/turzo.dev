import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Sun, Moon, Command } from 'lucide-react';

export const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);

  // Adds a slight lift effect when scrolling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${scrolled ? 'pt-3' : 'pt-6'} px-4`}>
      <div className="group relative flex items-center justify-between w-full max-w-6xl px-4 py-2 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-xl border border-white/40 dark:border-white/5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-300 hover:border-indigo-500/30">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3 pl-2">
          <div className="relative size-10 flex items-center justify-center overflow-hidden rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-black shadow-2xl transition-transform duration-300 group-hover:rotate-45">
            <Command size={20} strokeWidth={2.5} />
          </div>
          <span className="hidden sm:block font-bold tracking-tight text-neutral-800 dark:text-neutral-100">
            SYED <span className="text-neutral-400 dark:text-neutral-500">TURZO</span>
          </span>
        </div>

        {/* Navigation Links - Centered Pill */}
        <div className="hidden md:flex items-center bg-neutral-200/30 dark:bg-white/5 p-1 rounded-xl border border-white/20">
          {['Home', 'About', 'Skills', 'Projects'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-5 py-2 text-[13px] font-medium text-neutral-600 dark:text-neutral-400 hover:text-indigo-600 dark:hover:text-white rounded-lg transition-all duration-200 hover:bg-white/60 dark:hover:bg-white/10"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Actions */}
      <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl border border-white/10 dark:border-white/5 bg-white/5 hover:bg-white/20 transition-all text-slate-600 dark:text-slate-400"
          >
            {theme === 'dark' ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} />}
          </button>

          <a
            href="#contact"
            className="group/btn relative px-6 py-2.5 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-xl text-[13px] font-bold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl"
          >
            <span className="flex items-center gap-2">
              Get in Touch
              <ArrowUpRight size={16} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </span>
          </a>
        </div>

      </div>
    </nav>
  );
};

//  