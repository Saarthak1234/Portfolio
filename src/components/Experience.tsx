"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "Freelance - Full-Stack Developer",
    client: "Rishi Atta Brand",
    duration: "10/2025 - 01/2026",
    description: "Engineered a full-stack e-commerce catalog platform with server-side rendering, achieving a 1.2s initial load time. Optimized database performance by 45% using a normalized PostgreSQL schema, indexed foreign keys, and connection pooling for concurrent traffic. Built a secure admin dashboard with JWT-based role access and protected API routes.",
    tech: ["Next.js 14", "TypeScript", "PostgreSQL", "Tailwind CSS", "JWT"]
  },
  {
    id: 2,
    role: "Freelance - Web Developer",
    client: "NGO Website",
    duration: "06/2024 - 08/2024",
    description: "Spearheaded development of a production-grade, responsive website utilizing React Router and React-Bootstrap, resulting in a 20% improvement in page load time through optimized asset delivery on Vercel. Improved navigation flow and mobile usability, ensuring a consistent experience across desktop, tablet, and mobile users.",
    tech: ["React", "JavaScript", "React-Bootstrap", "React Router", "Vercel"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 max-w-5xl mx-auto px-6 overflow-hidden">
      <h2 className="text-3xl font-mono text-zinc-500 font-bold uppercase tracking-wide text-center mb-10">Experience.</h2>
      
      <div className="grid grid-cols-1 gap-8">
        {experiences.map((exp) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            key={exp.id} 
            className="px-8 py-10 bg-black shadow-ghost border border-black group-hover:border-[#39FF14] rounded-none flex flex-col gap-4 transform transition-all duration-300 hover:-translate-y-2 relative group"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold font-mono text-white tracking-wide">{exp.role}</h3>
                <h4 className="text-lg font-bold font-mono text-zinc-500 uppercase tracking-tighter">{exp.client}</h4>
              </div>
              <span className="font-mono text-sm font-bold text-black bg-white px-3 py-1 uppercase shrink-0">
                {exp.duration}
              </span>
            </div>
            
            <p className="text-zinc-400 font-mono text-sm leading-relaxed mt-2">
              {exp.description}
            </p>
            
            <div className="flex flex-wrap gap-3 mt-4">
              {exp.tech.map((t) => (
                <span key={t} className="text-xs font-mono font-bold px-3 py-1 bg-white text-black rounded-none uppercase">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}