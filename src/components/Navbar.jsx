import React, { useState, useEffect } from "react";
import { ArrowUpRight, Command, ExternalLink, X } from "lucide-react";
import { useLocation } from "react-router";
import { RiMoonClearLine, RiSunLine } from "react-icons/ri";

export const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  };

  const navItems = ["Home", "About", "Skills", "Projects"];

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${
          scrolled ? "pt-3" : "pt-6"
        } px-4`}
      >
        <div className="relative flex items-center justify-between w-full max-w-7xl px-4 py-2 bg-white/40 dark:bg-neutral-900/40 backdrop-blur-xl border border-white/40 dark:border-white/5 rounded-2xl shadow-xl">
          {/* Logo / Menu Button */}
          <div className="flex items-center gap-3">
     {  location.pathname === "/" &&      <button
              onClick={() => setMenuOpen(true)}
              className="size-10 flex items-center justify-center rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-black shadow-lg md:hidden"
            >
              <Command size={20} />
            </button>}

            <span className="font-display font-bold tracking-tight text-neutral-800 dark:text-neutral-100">
              SYED <span className="text-indigo-500">TURZO</span>
            </span>
          </div>

          {/* Desktop Nav */}
          {location.pathname === "/" && (
            <div className="hidden md:flex items-center bg-neutral-200/30 dark:bg-white/5 p-1 rounded-xl">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleScrollTo(item.toLowerCase())}
                  className="px-5 py-2 text-sm font-display font-medium text-neutral-600 dark:text-neutral-400 hover:text-indigo-500 dark:hover:text-indigo-400 rounded-lg transition-all duration-300 cursor-pointer hover:bg-indigo-500/5"
                >
                  {item}
                </button>
              ))}
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl   dark:border-white/5  dark:bg-white/5 cursor-pointer hover:bg-white/60 dark:hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="transition-all duration-500 ease-in-out group-hover:scale-110">
                {theme === "dark" ? (
                  <RiSunLine className="text-amber-400 animate-[spin_0.5s_ease-out]" size={20} />
                ) : (
                  <RiMoonClearLine className="text-slate-700 animate-[spin_0.5s_ease-out]" size={20} />
                )}
              </div>
            </button>

            {location.pathname === "/" && (
              <button
                onClick={() => handleScrollTo("contact")}
                className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-xl text-sm font-display font-bold cursor-pointer hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300"
              >
                Get in Touch <ExternalLink size={16} />
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        />
      )}


 

      <aside
        className={`fixed top-0 left-0 h-full w-72 z-50 
    /* Glass Background */
    bg-white/60 dark:bg-neutral-900/60 backdrop-blur-2xl
    border-r border-white/20 dark:border-white/5 shadow-2xl
    
    /* Smooth Slide Transition (Custom Bezier Curve) */
    transform transition-transform duration-500 ease-in-out
    ${menuOpen ? "translate-x-0" : "-translate-x-full"}
  `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-black dark:border-white/50 ">
          <span className="font-display font-bold text-xl text-neutral-800 dark:text-white tracking-tight">
            Menu
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 rounded-full transition-colors duration-300 
        text-neutral-500 hover:text-neutral-900 
        dark:text-neutral-400 dark:hover:text-white
        hover:bg-neutral-100/50 dark:hover:bg-white/10"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col p-6 gap-3 ">
          {navItems.map((item) => {
         

            return (
              <button
                key={item}
                onClick={() => handleScrollTo(item.toLowerCase())}
                className={`
            group flex items-center font-display font-bold w-full px-5 py-2 rounded-lg text-left text-md text-slate-900 dark:text-white
            transition-all duration-300 ease-out
                    hover:translate-x-1 hover:bg-white/40 dark:hover:bg-white/30 hover:shadow-lg hover:shadow-indigo-500/5 cursor-pointer  
            

          `}
              >
                {item}
              </button>
            );
          })}

          <div className="h-px bg-linear-to-r from-transparent via-neutral-200 dark:via-neutral-800 to-transparent my-2 opacity-50 border-t  border-black dark:border-white/50 " />

          {/* CTA Button */}
          <button
            onClick={() => handleScrollTo("contact")}
            className="relative flex items-center justify-center gap-2 w-full px-5 py-4 rounded-2xl font-display font-bold 
        text-white dark:text-black
        bg-neutral-900 dark:bg-white
        shadow-lg
        cursor-pointer"
          >
            Get in Touch <ExternalLink size={18} />
          </button>
        </div>
      </aside>
    </>
  );
};
