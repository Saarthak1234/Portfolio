"use client";

import { useRef } from "react";
import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import TactileBladeButton from "./ui/TactileBladeButton";
import { motion, useMotionTemplate, useSpring } from "framer-motion";

const contactLinks = [
  {
    label: "Email",
    value: "saarthakagarwal0408@gmail.com",
    Icon: Mail,
    href: "mailto:saarthakagarwal0408@gmail.com"
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/saarthakagarwal",
    Icon: FaLinkedin,
    href: "https://linkedin.com/in/saarthakagarwal"
  },
  {
    label: "GitHub",
    value: "github.com/saarthak1234",
    Icon: FaGithub,
    href: "https://github.com/saarthak1234"
  },
  {
    label: "Location",
    value: "Delhi, India",
    Icon: MapPin,
    href: "#"
  }
];

export default function Contact() {
  const connectRef = useRef<HTMLSpanElement>(null);
  const mouseX = useSpring(0, { stiffness: 400, damping: 28 });
  const mouseY = useSpring(0, { stiffness: 400, damping: 28 });
  const radius = useSpring(0, { stiffness: 400, damping: 28 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!connectRef.current) return;
    const rect = connectRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseEnter = () => radius.set(70);
  const handleMouseLeave = () => radius.set(0);

  // Changed to have a hard stop at 100% for a sharp edge, and used a darker grey (#27272a)
  const background = useMotionTemplate`radial-gradient(circle ${radius}px at ${mouseX}px ${mouseY}px, #39FF14 0%, #39FF14 100%, #27272a 100%)`;

  return (
    <footer id="contact" className="w-full border-t-[3px] border-black mt-20 bg-white relative">
      <div className="max-w-6xl mx-auto px-6 py-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-start">
          
          {/* Left Side: Let's Connect */}
          <div className="flex flex-col gap-6">
            <h2 className="text-6xl md:text-8xl font-bold tracking-tight leading-[1.1] text-black select-none">
              Let's <br />
              <motion.span 
                ref={connectRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="italic font-mono lowercase tracking-tighter relative inline-block cursor-crosshair pb-2"
                style={{
                  backgroundImage: background,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent"
                }}
              >
                connect.
              </motion.span>
            </h2>
            <p className="text-zinc-600 font-mono text-sm leading-relaxed max-w-sm mt-4">
              I'm always open to new opportunities, interesting projects, and collaborations. Whether it's about backend dev, systems engineering, or just a chat — reach out!
            </p>
            {/* Added font-sans to change the font style from the surrounding mono/headings */}
            <div className="mt-8 font-sans font-semibold tracking-normal text-lg">
              <TactileBladeButton href="mailto:saarthakagarwal0408@gmail.com">
                Say Hello &rarr;
              </TactileBladeButton>
            </div>
          </div>

          {/* Right Side: Contact Links */}
          <div className="flex flex-col gap-4">
            {contactLinks.map((contact, idx) => (
              <a 
                key={idx}
                href={contact.href}
                target={contact.href !== "#" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-6 p-6 bg-black border border-black hover:border-[#39FF14] rounded-none shadow-ghost transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-center shrink-0">
                  <contact.Icon className="w-4 h-4 text-[#39FF14] opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{contact.label}</span>
                  <span className="text-sm font-mono text-white font-bold tracking-wide">{contact.value}</span>
                </div>
              </a>
            ))}
          </div>

        </div>

        {/* Bottom Bar Footer */}
        <div className="mt-32 pt-8 border-t-[3px] border-black flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-black font-bold uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Saarthak Agarwal</p>
          <p className="text-zinc-500">Built with Next.js + Tailwind</p>
          <p className="flex items-center gap-2">Delhi, India <span className="w-2 h-2 bg-[#39FF14] rounded-none inline-block"></span></p>
        </div>

      </div>
    </footer>
  );
}