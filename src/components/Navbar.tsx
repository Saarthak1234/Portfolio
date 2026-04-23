"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { Home, Grid, Briefcase, Mail, Menu, X } from "lucide-react";
import { FaLaptopCode } from "react-icons/fa";

const links = [
  { name: "Home", href: "#hero", Icon: Home },
  { name: "Skills", href: "#skills", Icon: Grid },
  { name: "Experience", href: "#experience", Icon: FaLaptopCode },
  { name: "Shipments", href: "#projects", Icon: Briefcase },
  { name: "Contact", href: "#contact", Icon: Mail },
];

function NavItem({ item, idx, isOpen, onClick, total }: any) {
  const ref = useRef<HTMLAnchorElement>(null);
  const sweepRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const angle = Math.PI - (idx / (total - 1)) * Math.PI; 
    const radius = 90; // px
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    if (sweepRef.current) gsap.set(sweepRef.current, { scale: 0 });
    if (iconRef.current) gsap.set(iconRef.current, { color: "#ffffff" });

    if (isOpen) {
      gsap.to(ref.current, {
        x: x,
        y: y,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "back.out(1.5)",
        delay: idx * 0.05
      });
    } else {
      gsap.to(ref.current, {
        x: 0,
        y: 0,
        opacity: 0,
        scale: 0.5,
        duration: 0.3,
        ease: "power2.in",
        delay: (total - 1 - idx) * 0.05
      });
    }
  }, [isOpen, idx, total]);

  const handleEnter = () => {
    gsap.killTweensOf([sweepRef.current, iconRef.current]);
    gsap.to(sweepRef.current, { scale: 1, duration: 0.3, ease: "power2.out" });
    gsap.to(iconRef.current, { color: "#000000", duration: 0.3 });
  };

  const handleLeave = () => {
    gsap.killTweensOf([sweepRef.current, iconRef.current]);
    gsap.to(sweepRef.current, { scale: 0, duration: 0.3, ease: "power2.in" });
    gsap.to(iconRef.current, { color: "#ffffff", duration: 0.3 });
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector(item.href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    onClick();
  };

  return (
    <a
      ref={ref}
      href={item.href}
      onClick={handleClick}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="absolute -top-6 -left-6 w-12 h-12 flex items-center justify-center bg-black border border-white/20 rounded-full z-10 pointer-events-auto overflow-hidden will-change-transform shadow-md transition-[box-shadow,border-color] duration-300 hover:shadow-[0_0_15px_rgba(57,255,20,0.6)] hover:border-[#39FF14]"
      style={{ opacity: 0, scale: 0.5, pointerEvents: isOpen ? 'auto' : 'none' }}
      title={item.name}
    >
      <div 
        ref={sweepRef}
        className="absolute inset-0 bg-[#39FF14] z-0 pointer-events-none" 
        style={{ borderRadius: '50%', transform: 'scale(0)' }}
      />
      <div ref={iconRef} className="absolute inset-0 flex items-center justify-center z-10 text-white">
        <item.Icon className="w-5 h-5 drop-shadow-sm" />
      </div>
    </a>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
      {/* Semicircle Nav Items */}
      <div className="absolute top-7 left-7 z-10 w-0 h-0">
        {links.map((item, idx) => (
          <NavItem 
            key={idx} 
            item={item} 
            idx={idx} 
            total={links.length} 
            isOpen={isOpen} 
            onClick={() => setIsOpen(false)} 
          />
        ))}
      </div>

      {/* Central Pop-Out Anchor Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 relative flex items-center justify-center bg-black text-white hover:text-black rounded-full shadow-md hover:bg-white transition-colors duration-300 z-20 outline-none border border-white/20"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
    </div>
  );
}
