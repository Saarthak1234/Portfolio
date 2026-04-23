"use client";

import { Mail, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import TactileBladeButton from "./ui/TactileBladeButton";

export default function Contact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="w-full border-t-[3px] border-black mt-20 bg-white relative">
      <button 
        onClick={scrollToTop}
        title="Scroll to top"
        className="absolute -top-6 right-6 md:right-8 w-12 h-12 bg-black text-white flex items-center justify-center rounded border border-transparent hover:border-[#39FF14] hover:-translate-y-2 transition-all duration-300 shadow-ghost group z-50"
      >
        <ArrowUp className="w-5 h-5 group-hover:text-[#39FF14] transition-colors" />
      </button>

      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col items-center gap-8 text-center">
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-3xl font-mono text-zinc-500 font-bold uppercase tracking-wide text-center">Saarthak Agarwal.</h2>
          <span className="text-black/70 font-mono flex items-center gap-2 font-medium">
            saarthakagarwal0408@gmail.com
          </span>
        </div>
        
        <div className="flex items-center gap-8">
          <TactileBladeButton href="mailto:saarthakagarwal0408@gmail.com">
            <Mail className="w-4 h-4 mr-3" /> Email
          </TactileBladeButton>
          <TactileBladeButton href="https://github.com/saarthak1234">
            <FaGithub className="w-4 h-4 mr-3" /> GitHub
          </TactileBladeButton>
        </div>
      </div>
    </footer>
  );
}
