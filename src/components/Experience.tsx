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
      
      <div className="flex flex-col gap-12">
        {experiences.map((exp) => (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            key={exp.id} 
            className="flex flex-col gap-4 border-l-2 border-[#39FF14] pl-6 ml-4 relative"
          >
            {/* structural timeline nub */}
            <div className="absolute w-3 h-3 bg-black -left-[7px] top-2" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
              <h3 className="text-2xl font-bold font-tech text-black tracking-wide">{exp.role}</h3>
              <span className="font-mono text-sm font-bold text-zinc-500 bg-zinc-100 px-3 py-1">{exp.duration}</span>
            </div>
            <h4 className="text-lg font-bold font-mono text-zinc-700 uppercase tracking-tighter">{exp.client}</h4>
            <p className="text-black/80 font-mono text-sm leading-relaxed max-w-3xl">
              {exp.description}
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              {exp.tech.map((t) => (
                <span key={t} className="text-xs font-mono font-bold px-3 py-1 bg-black text-white rounded-none">
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