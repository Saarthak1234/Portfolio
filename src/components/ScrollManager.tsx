"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollManager({ children }: { children: React.ReactNode }) {


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let timeouts: any[] = [];
    


    const sections = document.querySelectorAll("section");
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

      {children}
    </>
  );
}
