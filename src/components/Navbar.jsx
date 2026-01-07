import React, { useState, useEffect } from "react";
import { ArrowUpRight, Command, X } from "lucide-react";
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

            <span className=" font-bold tracking-tight text-neutral-800 dark:text-neutral-100">
              SYED <span className="text-neutral-400">TURZO</span>
            </span>
          </div>

          {/* Desktop Nav */}
          {location.pathname === "/" && (
            <div className="hidden md:flex items-center bg-neutral-200/30 dark:bg-white/5 p-1 rounded-xl">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleScrollTo(item.toLowerCase())}
                  className="px-5 py-2 text-[13px] font-medium text-neutral-600 dark:text-neutral-400 hover:text-cyan-600 rounded-lg transition cursor-pointer"
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
              className="p-2.5 rounded-xl border border-slate-900/30 dark:border-white/5 bg-white/40 dark:bg-white/5 cursor-pointer"
            >
              {theme === "dark" ? (
                <RiSunLine className="text-cyan-400" />
              ) : (
                <RiMoonClearLine />
              )}
            </button>

            {location.pathname === "/" && (
              <button
                onClick={() => handleScrollTo("contact")}
                className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-xl text-[13px] font-bold cursor-pointer"
              >
                Get in Touch <ArrowUpRight size={16} />
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

      {/* Side Menu */}
      {/* <aside
        className={`fixed top-0 left-0 h-full w-64  bg-white/40 dark:bg-neutral-900/40 backdrop-blur-xl border border-white/40 dark:border-white/5 rounded-r-2xl shadow-xl z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <span className="font-black text-lg">Menu</span>
          <button onClick={() => setMenuOpen(false)}>
            <X />
          </button>
        </div>

        <div className="flex flex-col p-6 gap-4">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleScrollTo(item.toLowerCase())}
              className="text-left hover:text-indigo-500 transition cursor-pointer px-5 py-3 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-xl font-bold"
            >
              {item}
            </button>
          ))}

          <button
            onClick={() => handleScrollTo("contact")}
            className="flex items-center gap-2 px-5 py-3 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-xl font-bold"
          >
            Get in Touch <ArrowUpRight size={16} />
          </button>
        </div>

      </aside> */}

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
          <span className="font-bold text-xl text-neutral-800 dark:text-white tracking-tight">
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
            group flex items-center font-bold w-full px-5 py-2 rounded-lg text-left text-md text-slate-900 dark:text-white
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
            className="relative flex items-center justify-center gap-2 w-full px-5 py-4 rounded-2xl font-bold 
        text-white dark:text-black
        bg-neutral-900 dark:bg-white
        shadow-lg
        cursor-pointer"
          >
            Get in Touch <ArrowUpRight size={18} />
          </button>
        </div>
      </aside>
    </>
  );
};
