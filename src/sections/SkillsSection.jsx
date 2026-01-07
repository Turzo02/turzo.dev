import React, { useRef, useEffect } from "react";
import { SkillChip } from "../components/SkillChip";
import { skills } from "../data/skills";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const SkillsSection = () => {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const chipRefs = useRef([]); // persistent array

  // ref callback to add elements
  const addChipRef = (el) => {
    if (el && !chipRefs.current.includes(el)) chipRefs.current.push(el);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1️⃣ Initial state
      gsap.set(headlineRef.current, {
        opacity: 0,
        x: -100,
        willChange: "transform, opacity",
      });

      chipRefs.current.forEach((chip) => {
        gsap.set(chip, {
          opacity: 0,
          y: 30,
          willChange: "transform, opacity",
        });
      });

      // 2️⃣ Headline animation
      gsap.to(headlineRef.current, {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      });

      // 3️⃣ Skill chips staggered slide from bottom
      gsap.to(chipRefs.current, {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "top top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="w-full py-32 px-4 md:px-8">
      <div className="max-w-7xl w-full mx-auto">
        {/* Headline */}
        <div className="flex flex-col items-center mb-20">
          <h2
            ref={headlineRef}
            className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight"
          >
            Technical Expertise
          </h2>
          <div className="h-1.5 w-24 bg-linear-to-r from-indigo-500 to-cyan-400 rounded-full"></div>
        </div>

        {/* Skill Chips Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((s) => (
            <div key={s.name} ref={addChipRef}>
              <SkillChip {...s} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
