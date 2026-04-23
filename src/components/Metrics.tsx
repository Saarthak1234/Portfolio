"use client";

import { motion } from "framer-motion";
import { Trophy, Code2 } from "lucide-react";

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
              className="flex items-center gap-6 p-8 shadow-ghost bg-black border border-black rounded-none transition-transform hover:-translate-y-1"
            >
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
