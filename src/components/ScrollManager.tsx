"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollManager({ children }: { children: React.ReactNode }) {
  const scanlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let timeouts: any[] = [];
    
    // Scanline trigger logic
    const sections = document.querySelectorAll("section");
    sections.forEach((sec) => {
      ScrollTrigger.create({
        trigger: sec,
        start: "top 60%", // When section enters mid-screen
        onEnter: () => {
          if (!scanlineRef.current) return;
          gsap.fromTo(scanlineRef.current, 
            { opacity: 1, top: 0 },
            { opacity: 0, top: "100%", duration: 0.5, ease: "power4.inOut" }
          );
        },
        onEnterBack: () => {
          if (!scanlineRef.current) return;
          gsap.fromTo(scanlineRef.current, 
            { opacity: 1, top: "100%" }, // Start at bottom going up
            { opacity: 0, top: 0, duration: 0.5, ease: "power4.inOut" }
          );
        }
      });
    });

    const updateSnaps = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const snapPoints = Array.from(sections).map(sec => {
        const rect = sec.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        return top / scrollHeight;
      }).filter(p => !isNaN(p) && isFinite(p) && p >= 0 && p <= 1);

      if (snapPoints.length > 0) {
        ScrollTrigger.create({
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            snap: {
            snapTo: snapPoints,
            duration: { min: 0.3, max: 0.6 },
            delay: 0.1,
            ease: "expo.out" // Heavy mechanical snap
            }
        });
      }
    };

    timeouts.push(setTimeout(updateSnaps, 600));

    return () => {
      timeouts.forEach(clearTimeout);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <>
      <div 
        ref={scanlineRef}
        className="fixed left-0 w-full h-[2px] bg-[#39FF14] z-50 pointer-events-none drop-shadow-[0_0_10px_rgba(57,255,20,0.8)] opacity-0"
      />
      {children}
    </>
  );
}
