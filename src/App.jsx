import React, { useState, useEffect } from "react";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./sections/HeroSection";
import { AboutSection } from "./sections/AboutSection";
import { SkillsSection } from "./sections/SkillsSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { ContactSection } from "./sections/ContactSection";

export default function App() {
  const [theme, setTheme] = useState(() => {
    // Initialize from localStorage or system preference
    const saved = localStorage.getItem("theme");
    if (saved) return saved;

    // Fallback to system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  // Persist theme to localStorage and update DOM
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <div
      className={`min-h-screen transition-colors duration-700 font-display ${
        theme === "dark" ? "bg-[#0a0a0c]" : "bg-slate-50"
      } selection:bg-indigo-500 selection:text-white`}
    >
      {/* Halo Glow Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-200 h-200 bg-indigo-600/20 dark:bg-indigo-600/10 rounded-full blur-[160px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-225 h-225 bg-purple-600/15 dark:bg-purple-600/5 rounded-full blur-[180px] animate-float"></div>
        <div className="absolute top-[30%] left-[10%] w-100 h-100 bg-cyan-400/10 dark:bg-cyan-400/5 rounded-full blur-[140px]"></div>
      </div>

      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main className="z-10 relative">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      <footer className="w-full py-12 border-t border-slate-200 dark:border-white/5 bg-white/20 dark:bg-black/40 backdrop-blur-2xl">
        <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-400 dark:text-slate-500 text-[10px] sm:text-xs font-medium tracking-[0.3em] uppercase transition-colors duration-300 hover:text-indigo-500">
            © 2026 Portfolio <span className="mx-2 opacity-30">|</span>
            <span className="font-semibold text-slate-600 dark:text-slate-300">
              Syed Naimul Islam <span className="hidden sm:inline">TurzO</span>
            </span>
          </p>
          <div className="flex items-center gap-8">
            <a
              href="https://github.com/Turzo02"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-indigo-500 transition-all duration-300 hover:-translate-y-1.5 hover:scale-110 active:scale-95"
              aria-label="GitHub Profile"
            >
              <Github size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/syed-turzo/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-500 transition-all duration-300 hover:-translate-y-1.5 hover:scale-110 active:scale-95"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={22} />
            </a>

            <a
              href="https://www.instagram.com/syedturz0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-pink-500 transition-all duration-300 hover:-translate-y-1.5 hover:scale-110 active:scale-95"
              aria-label="Instagram Profile"
            >
              <Instagram size={22} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
