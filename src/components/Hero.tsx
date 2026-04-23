"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import TactileBladeButton from "./ui/TactileBladeButton";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Saarthak Agarwal";

  useEffect(() => {
    let index = 0;
    setText(""); // Reset to empty on mount
    const timer = setInterval(() => {
      index++;
      setText(fullText.substring(0, index));
      if (index === fullText.length) {
        clearInterval(timer);
      }
    }, 120);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center max-w-5xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-8 flex flex-col items-center"
      >
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-black text-center flex justify-center items-center flex-wrap h-20 md:h-24">
            {text}
            <motion.span 
              animate={{ opacity: [1, 0] }} 
              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
              className="text-[#39FF14] font-mono font-light ml-1"
            >
              _
            </motion.span>
          </h1>
          <p className="text-xl md:text-2xl text-black/80 font-medium max-w-2xl font-mono text-center">
            Full-stack Developer & System Automation Engineer.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 pt-6">
          <TactileBladeButton href="#projects">
            Explore Projects
            <ArrowRight className="w-5 h-5 ml-2" />
          </TactileBladeButton>
          <TactileBladeButton href="https://github.com/saarthak1234">
            <FaGithub className="w-5 h-5 mr-3" />
            GitHub
          </TactileBladeButton>
        </div>
      </motion.div>
    </section>
  );
}
