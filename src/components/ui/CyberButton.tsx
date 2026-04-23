"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { useRouter } from "next/navigation";

interface CyberButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function CyberButton({ children, href, className = "", onClick, type = "button" }: CyberButtonProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (loading) return;
    
    // GSAP Mechanical switch
    if (btnRef.current) {
        gsap.to(btnRef.current, { scale: 0.95, duration: 0.1, yoyo: true, repeat: 1, ease: "power2.inOut" });
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (onClick) onClick();
      if (href) {
        if (href.startsWith("#")) {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        } else {
          router.push(href);
        }
      }
    }, 500); // Simulated Data Stream Load
  };

  return (
    <button
      ref={btnRef}
      onClick={handleClick}
      type={type}
      className={`relative overflow-hidden font-mono italic shadow-ghost transition-colors flex items-center justify-center ${className}`}
    >
      <span className={loading ? "opacity-0" : "opacity-100"}>{children}</span>
      {loading && (
        <span className="absolute inset-0 flex items-center justify-center text-xs tracking-widest bg-foreground text-background">
           [STREAMING]
        </span>
      )}
    </button>
  );
}
