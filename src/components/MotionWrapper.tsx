"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function MotionWrapper({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    
    // Slow ambient drift
    const anim = gsap.to(ref.current, {
      y: "-=8",
      x: "+=4",
      duration: 3 + Math.random() * 2,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });

    return () => {
      anim.kill();
    };
  }, []);

  return <div ref={ref} className="h-full">{children}</div>;
}
