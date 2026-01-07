import React, { useEffect, useRef } from 'react';

const AmbientCursorHalo = () => {
  // Refs for DOM elements to avoid re-renders during animation
  const primaryHaloRef = useRef(null);
  const secondaryHaloRef = useRef(null);

  // Refs for coordinate tracking
  // We track "target" (mouse) and "current" (halo position) separately for interpolation
  const position = useRef({
    mouseX: 0,
    mouseY: 0,
    halo1: { x: 0, y: 0 },
    halo2: { x: 0, y: 0 },
  });

  useEffect(() => {
    // 1. Event Listener: Light-weight mouse tracking
    const handleMouseMove = (e) => {
      position.current.mouseX = e.clientX;
      position.current.mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 2. Animation Loop: Smooth interpolation (Lerp)
    let animationFrameId;

    const animate = () => {
      const { mouseX, mouseY, halo1, halo2 } = position.current;

      // Linear Interpolation (Lerp) helper
      // delay: lower = slower/more delay, higher = snappier
      const lerp = (start, end, factor) => start + (end - start) * factor;

      // Update Halo 1 (Primary - slightly faster)
      halo1.x = lerp(halo1.x, mouseX, 0.08);
      halo1.y = lerp(halo1.y, mouseY, 0.08);

      // Update Halo 2 (Secondary - slower, creates "drift" effect)
      halo2.x = lerp(halo2.x, mouseX, 0.04);
      halo2.y = lerp(halo2.y, mouseY, 0.04);

      // Apply transforms directly to DOM for performance
      if (primaryHaloRef.current) {
        primaryHaloRef.current.style.transform = `translate3d(${halo1.x}px, ${halo1.y}px, 0) translate(-50%, -50%)`;
      }
      if (secondaryHaloRef.current) {
        secondaryHaloRef.current.style.transform = `translate3d(${halo2.x}px, ${halo2.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    // Start loop
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0" aria-hidden="true">
      {/* Primary Glow: Smaller, more intense center */}
      <div
        ref={primaryHaloRef}
        className="absolute top-0 left-0 w-[40vw] h-[40vw] md:w-[25vw] md:h-[25vw] 
                   bg-cyan-400/30 dark:bg-indigo-500/15 
                   rounded-full blur-[80px] md:blur-[100px] 
                   mix-blend-multiply dark:mix-blend-screen 
                   will-change-transform"
      />

      {/* Secondary Glow: Larger, softer wash */}
      <div
        ref={secondaryHaloRef}
        className="absolute top-0 left-0 w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] 
                   bg-cyan-300/20 dark:bg-fuchsia-600/10 
                   rounded-full blur-[100px] md:blur-[120px] 
                   mix-blend-multiply dark:mix-blend-screen 
                   will-change-transform"
      />
    </div>
  );
};

export default AmbientCursorHalo;
