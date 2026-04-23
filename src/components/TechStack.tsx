"use client";

const skills = [
  {
    category: "Languages",
    items: ["JavaScript (ES6+)", "C", "C++", "SQL", "HTML", "CSS"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["React.js", "Next.js", "Node.js", "Express.js", "Mongoose"],
  },
  {
    category: "Tools & Cloud",
    items: ["Docker", "Postman", "Git", "GitHub", "Vercel", "Render", "MongoDB Atlas"],
  },
];

export default function TechStack() {
  return (
    <section className="py-20 max-w-5xl mx-auto px-6">
      <h2 className="text-3xl font-mono italic tracking-tight font-bold text-black mb-8">Technical Stack.</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.map((skillGroup, idx) => (
          <div
            key={idx}
            className="p-8 shadow-ghost bg-white border-2 border-black rounded-none flex flex-col gap-6"
          >
            <h3 className="text-xl font-bold font-mono text-black">{skillGroup.category}</h3>
            <ul className="flex flex-wrap gap-3">
              {skillGroup.items.map((skill, i) => (
                <li key={i} className="font-mono italic font-bold px-4 py-2 bg-black text-white text-sm shadow-ghost shadow-black/20 hover:-translate-y-1 transition-transform">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
