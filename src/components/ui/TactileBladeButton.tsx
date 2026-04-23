"use client";

import { useRef } from "react";
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
  const router = useRouter();

  const handleMouseEnter = () => {
    if (!btnRef.current || !shadowRef.current) return;
    
    // Elevate button diagonally
    gsap.to(btnRef.current, {
      x: -6,
      y: -6,
      duration: 0.3,
      ease: "expo.out"
    });
    
    // Sharp shadow appears fixed below creating depth
    gsap.to(shadowRef.current, {
      opacity: 1,
      x: 4,
      y: 4,
      duration: 0.3,
      ease: "expo.out"
    });
  };

  const handleMouseLeave = () => {
    if (!btnRef.current || !shadowRef.current) return;
    
    gsap.to(btnRef.current, {
      x: 0,
      y: 0,
      duration: 0.3,
      ease: "expo.out"
    });
    
    gsap.to(shadowRef.current, {
      opacity: 0,
      x: 0,
      y: 0,
      duration: 0.3,
      ease: "expo.out"
    });
  };

  const handleMouseDown = () => {
    if (!btnRef.current) return;
    
    // Press completely into the surface
    gsap.to(btnRef.current, {
      x: 2,
      y: 2,
      duration: 0.1,
      ease: "power2.out"
    });
  };

  const handleMouseUp = () => {
    if (!btnRef.current) return;
    
    // Spring back up
    gsap.to(btnRef.current, {
      x: -6,
      y: -6,
      duration: 0.2,
      ease: "expo.out"
    });
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
    <div ref={wrapperRef} className="relative inline-block cursor-pointer">
      {/* Defined Sharp Shadow matching button limits exactly without blur */}
      <div 
        ref={shadowRef}
        className="absolute inset-0 bg-black/30 opacity-0 pointer-events-none"
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
        className="relative bg-black text-white px-8 py-4 border-none outline-none -skew-x-[15deg] font-mono italic"
      >
        <div className="skew-x-[15deg] whitespace-nowrap flex items-center justify-center text-[15px] font-bold">
          {children}
        </div>
      </button>
    </div>
  );
}
