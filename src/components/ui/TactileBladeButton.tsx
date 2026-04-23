"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useRouter } from "next/navigation";

interface TactileBladeProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function TactileBladeButton({ children, href, onClick, type = "button" }: TactileBladeProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);
  const sweepRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Flawless baseline initialization using GSAP entirely 
  // preventing native CSS translation collisions.
  useEffect(() => {
    if (sweepRef.current) {
        gsap.set(sweepRef.current, { xPercent: -100 });
    }
  }, []);

  const handleMouseEnter = () => {
    if (!btnRef.current || !shadowRef.current || !sweepRef.current || !textRef.current) return;
    
    // Kill any active GSAP tweens exiting
    gsap.killTweensOf([btnRef.current, shadowRef.current, sweepRef.current, textRef.current]);
    
    // Elevate button
    gsap.to(btnRef.current, { x: -6, y: -6, duration: 0.3, ease: "expo.out" });
    
    // Grey Ghost Shadow expands below
    gsap.to(shadowRef.current, { opacity: 1, x: 4, y: 4, duration: 0.3, ease: "expo.out" });
    
    // Spring-Sweep Background enters rapidly from Left
    gsap.fromTo(sweepRef.current, 
      { xPercent: -100 },
      { xPercent: 0, duration: 0.4, ease: "expo.out" }
    );
    
    // Invert font to black cleanly
    gsap.to(textRef.current, { color: "#000000", duration: 0.2 });
  };

  const handleMouseLeave = () => {
    if (!btnRef.current || !shadowRef.current || !sweepRef.current || !textRef.current) return;
    
    // Kill any active GSAP tweens entering
    gsap.killTweensOf([btnRef.current, shadowRef.current, sweepRef.current, textRef.current]);

    gsap.to(btnRef.current, { x: 0, y: 0, duration: 0.3, ease: "expo.out" });
    gsap.to(shadowRef.current, { opacity: 0, x: 0, y: 0, duration: 0.3, ease: "expo.out" });
    
    // Spring-Sweep Background exists to Right heavily
    gsap.to(sweepRef.current, { 
      xPercent: 100, 
      duration: 0.6, 
      ease: "elastic.out(1, 0.75)" 
    });
    
    // Return font directly back to white without native CSS conflicting
    gsap.to(textRef.current, { color: "#FFFFFF", duration: 0.2 });
  };

  const handleMouseDown = () => {
    if (!btnRef.current) return;
    gsap.killTweensOf(btnRef.current);
    gsap.to(btnRef.current, { x: 2, y: 2, duration: 0.1, ease: "power2.out" });
  };

  const handleMouseUp = () => {
    if (!btnRef.current) return;
    gsap.killTweensOf(btnRef.current);
    gsap.to(btnRef.current, { x: -6, y: -6, duration: 0.2, ease: "expo.out" });
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onClick) onClick();
    if (href) {
      if (href.startsWith("#")) {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        router.push(href);
      }
    }
  };

  return (
    <div ref={wrapperRef} className="relative inline-block cursor-pointer z-10 hover:z-20">
      {/* Grey Ghost Shadow matching button limits */}
      <div 
        ref={shadowRef}
        className="absolute inset-0 bg-[rgba(0,0,0,0.1)] opacity-0 pointer-events-none drop-shadow-md"
        style={{ transform: "skewX(-15deg)" }}
      />
      <button
        ref={btnRef}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        type={type}
        className="relative bg-black text-white px-8 py-4 border-none outline-none -skew-x-[15deg] font-mono italic overflow-hidden"
      >
        {/* Sweep Foreground - Pointer events absolutely blocked so cursor doesn't interrupt */}
        <div 
          ref={sweepRef} 
          className="absolute inset-0 bg-[#39FF14] z-0 pointer-events-none"
        />
        
        <div ref={textRef} className="skew-x-[15deg] whitespace-nowrap flex items-center justify-center text-[15px] font-bold relative z-10 outline-none">
          {children}
        </div>
      </button>
    </div>
  );
}
