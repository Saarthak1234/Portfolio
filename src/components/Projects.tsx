"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";


const projects = [
  {
    title: "MERN Auth System",
    description: "Production-grade JWT/OAuth 2.0 system. Reduced authentication overhead by 40%.",
    tags: ["MongoDB", "Express", "Node.js", "OAuth"],
    link: "https://github.com/Saarthak1234/mern_boilerplate"
  },
  {
    title: "Rishi Atta",
    description: "Full-stack E-commerce platform. Achieved 1.2s initial load time and 45% DB performance optimization using PostgreSQL.",
    tags: ["Next.js", "PostgreSQL", "Tailwind CSS"],
    link: "https://rishi-atta-brand-78.vercel.app/"
  },
  {
    title: "Nudge (CLI Automation)",
    description: "Node.js CLI agent for remote command execution and LLM intent matching.",
    tags: ["Node.js", "LLM", "Automation"],
    link: "https://github.com/Rajatt09/Hackdata-2026"
  },
  {
    title: "JSCOP 7.0",
    description: "Official event platform that reliably managed 800+ registrations concurrently.",
    tags: ["React", "Express", "MongoDB"],
    link: "https://jscop-7-0-frontend.onrender.com/"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const item = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 max-w-5xl mx-auto px-6 overflow-hidden">
      <h2 className="text-3xl font-mono text-zinc-500 font-bold uppercase tracking-wide text-center mb-10">Featured Shipments.</h2>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pl-4"
      >
        {projects.map((project, idx) => (
          <motion.div key={idx} variants={item} className="relative">

            <Link href={project.link} target="_blank" rel="noopener noreferrer" className="block group h-full">
              {/* Normal Bento Wrapper */}
              <div className="h-full px-8 py-10 bg-black shadow-ghost rounded-none border border-black group-hover:border-[#39FF14] flex flex-col gap-4 transform transition-all duration-300 hover:-translate-y-2 relative">
                
                {/* Content */}
                <div className="flex flex-col h-full w-full">
                  <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight className="w-6 h-6 text-[#39FF14]" />
                  </div>
                  <h3 className="text-2xl font-bold font-mono text-white pr-8">{project.title}</h3>
                  <p className="text-zinc-400 text-sm flex-1 leading-relaxed font-mono mt-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3 pt-6 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-mono px-3 py-1.5 bg-white text-black font-bold uppercase rounded-none">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
