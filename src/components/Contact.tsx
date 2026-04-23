"use client";

import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import TactileBladeButton from "./ui/TactileBladeButton";

export default function Contact() {
  return (
    <footer className="w-full border-t-[3px] border-black mt-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <h2 className="text-2xl font-bold font-mono text-black italic uppercase">Saarthak Agarwal</h2>
          <span className="text-black/70 font-mono italic flex items-center gap-2 font-medium">
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
