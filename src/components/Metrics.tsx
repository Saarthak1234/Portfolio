"use client";

import { motion } from "framer-motion";
import { Trophy, Code2, ArrowUpRight } from "lucide-react";

const metrics = [
  {
    title: "200+ Problems Solved",
    description: "Consistent problem solving experience on LeetCode & GeeksforGeeks.",
    icon: Code2,
  },
  {
    title: "2nd Place",
    description: "Hack Data Hackathon (Healthcare AI category).",
    icon: Trophy,
  }
];

export default function Metrics() {
  return (
    <section className="py-12 max-w-5xl mx-auto px-6 w-full">
      <h2 className="text-3xl font-mono text-zinc-500 font-bold uppercase tracking-wide text-center mb-10">Achievements.</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {metrics.map((metric, idx) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5, ease: "easeOut" }}
              className="relative flex items-center gap-6 p-8 shadow-ghost bg-black border border-black group-hover:border-[#39FF14] rounded-none transition-all hover:-translate-y-1 group cursor-pointer"
            >
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="w-5 h-5 text-[#39FF14]" />
              </div>
              <div className="w-14 h-14 rounded-none bg-white flex items-center justify-center shrink-0 shadow-ghost">
                <Icon className="w-6 h-6 text-black" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-bold font-mono text-white tracking-tight">{metric.title}</h3>
                <p className="text-sm font-mono text-zinc-400">{metric.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
