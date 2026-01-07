import React, { useEffect, useRef } from "react";
import { Download, Github } from "lucide-react";
import CreativeProfile from "../components/CreativeProfile";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const HeroSection = () => {
  const headlineRef = useRef(null);
  const buttonsRef = useRef(null);
  const badgeRef = useRef(null);
  const profileRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1️⃣ Initial state (all start at their real position)
      gsap.set(
        [
          headlineRef.current,
          buttonsRef.current,
          badgeRef.current,
          profileRef.current,
        ],
        {
          opacity: 0, // invisible initially for entrance fade
          scale: 1, // no scaling except profile
          x: 0, // start at original x
          y: 0, // start at original y
        }
      );

      // 2️⃣ Timeline for entrance animations (fade & subtle scale)
      const tl = gsap.timeline({
        defaults: { duration: 1, ease: "power3.out" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      tl.to(badgeRef.current, { opacity: 1 }, 0);
      tl.to(headlineRef.current, { opacity: 1 }, 0);
      tl.to(buttonsRef.current, { opacity: 1 }, 0.2);
      tl.to(profileRef.current, { opacity: 1, scale: 1 }, 0);

      // 3️⃣ Scroll-driven position animations (relative movement)
      // Badge: move left 50px
      gsap.to(badgeRef.current, {
        x: -13,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Headline: move right 50px
      gsap.to(headlineRef.current, {
        x: 40,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Buttons: move up 30px
      gsap.to(buttonsRef.current, {
        x: -13,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Profile: move left 440px (as before)
      gsap.to(profileRef.current, {
        x: -40,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-screen w-full flex items-center justify-center pt-32 pb-12 px-4 md:px-8 overflow-hidden"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2  items-center">
        {/* Left Column */}
        <div
          ref={headlineRef}
          className="flex flex-col gap-8 order-2 md:order-1 will-change-transform"
        >
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 dark:bg-indigo-500/5 w-fit backdrop-blur-xl will-change-transform"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="text-[10px] font-black text-indigo-600 dark:text-indigo-400 tracking-[0.2em] uppercase">
              Open for Innovation
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black leading-[0.95] tracking-tighter text-slate-900 dark:text-white">
            FRONTEND{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 via-vi-500 to-cyan-400">
              WEB
            </span>{" "}
            DEVELOPER
          </h1>

          <p className="text-xl max-w-lg leading-relaxed font-medium md:text-xl text-slate-700 dark:text-slate-300 italic text-justify tracking-tight">
            I build high-performance, responsive web interfaces with a focus on
            clean design and seamless full-stack integration to deliver
            functional, user-centric applications.
          </p>

          <div className="flex flex-wrap gap-5 pt-4" ref={buttonsRef}>
            <button className="flex items-center justify-center gap-3 h-14 px-8 bg-indigo-600 text-white text-lg font-bold cursor-pointer rounded-2xl hover:bg-indigo-700 transition-all shadow-2xl shadow-indigo-500/40 active:scale-95">
              Resume <Download size={20} />
            </button>
            <button
              onClick={() =>
                window.open("https://github.com/Turzo02", "_blank")
              }
              className="flex items-center justify-center gap-3 h-14 px-8 bg-white/20 dark:bg-white/5 border border-slate-300 dark:border-white/10 hover:border-indigo-500/50 text-slate-900 dark:text-white text-base font-bold cursor-pointer rounded-2xl transition-all backdrop-blur-xl"
            >
              GitHub <Github size={20} />
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div ref={profileRef} className="will-change-transform">
          <CreativeProfile />
        </div>
      </div>
    </section>
  );
};
