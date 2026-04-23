"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaReact, FaNodeJs, FaDocker, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaLinux, FaWindows } from "react-icons/fa";
import { SiJavascript, SiMysql, SiMongodb, SiFigma, SiCplusplus, SiGo, SiPostgresql, SiFirebase, SiPostman, SiGooglecolab, SiNextdotjs, SiExpress, SiMongoose, SiRedux, SiRender, SiPhp, SiCodeigniter, SiFastapi } from "react-icons/si";

const skills = [
  { icon: SiCplusplus, name: "C/C++" },
  { icon: SiGo, name: "Go" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: FaHtml5, name: "HTML5" },
  { icon: FaCss3Alt, name: "CSS3" },
  { icon: FaGitAlt, name: "Git" },
  { icon: FaGithub, name: "GitHub" },
  { icon: FaDocker, name: "Docker" },
  { icon: FaDocker, name: "Docker Compose" },
  { icon: SiPostman, name: "Postman" },
  { icon: SiGooglecolab, name: "Colab" },
  { icon: FaLinux, name: "Linux" },
  { icon: FaWindows, name: "Windows" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: FaReact, name: "React.js" },
  { icon: SiExpress, name: "Express.js" },
  { icon: SiMongoose, name: "Mongoose" },
  { icon: FaNodeJs, name: "Node.js" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiFirebase, name: "Firebase" },
  { icon: SiRender, name: "Render" },
  { icon: SiRedux, name: "Redux" },
  { icon: SiMysql, name: "MySQL" },
  { icon: SiFigma, name: "Figma" },
  { icon: SiPhp, name: "PHP" },
  { icon: SiCodeigniter, name: "CodeIgniter" },
  { icon: SiFastapi, name: "FastAPI" }
];

function TechCard({ item }: { item: any }) {
  const layersRef = useRef<(HTMLDivElement | null)[]>([]);
  const nameRef = useRef<HTMLSpanElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layers = layersRef.current.filter(Boolean);
    gsap.set(layers, { xPercent: -105 });
    gsap.set(nameRef.current, { opacity: 0 });
    gsap.set(iconRef.current, { opacity: 1, scale: 1 });
  }, []);

  const handleEnter = () => {
    const layers = layersRef.current.filter(Boolean);
    gsap.killTweensOf([...layers, nameRef.current, iconRef.current]);

    gsap.to(layers, { 
      xPercent: 0, 
      duration: 0.4, 
      stagger: 0.05, 
      ease: "power2.out" 
    });

    gsap.to(iconRef.current, { opacity: 0, scale: 0.8, duration: 0.2 }); 
    // Text fades in once the black bars have covered the icon
    gsap.to(nameRef.current, { opacity: 1, duration: 0.1, delay: 0.45 });
  };

  const handleLeave = () => {
    const layers = layersRef.current.filter(Boolean);
    gsap.killTweensOf([...layers, nameRef.current, iconRef.current]);

    gsap.to(nameRef.current, { opacity: 0, duration: 0.1 });
    gsap.to(iconRef.current, { opacity: 1, scale: 1, duration: 0.3, delay: 0.2, ease: "back.out(1.5)" });

    gsap.to(layers, {
      xPercent: 105, 
      duration: 0.4, 
      stagger: 0.05, 
      ease: "power2.in",
      onComplete: () => {
        gsap.set(layers, { xPercent: -105 });
      }
    });
  };

  const Icon = item.icon;

  return (
    <li 
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="relative flex justify-center items-center text-center bg-zinc-100 w-[6.5rem] h-[6.5rem] overflow-hidden cursor-crosshair border border-zinc-200"
    >
      {/* Rectangles are back to Black for maximum contrast */}
      <div className="absolute inset-0 z-10 flex flex-col pointer-events-none -skew-x-[20deg] w-[200%] left-[-50%]">
        {[0, 1, 2, 3].map((i) => (
          <div 
            key={i}
            ref={(el) => { layersRef.current[i] = el; }}
            className="flex-1 bg-black border-none outline-none" 
          />
        ))}
      </div>

      <div ref={iconRef} className="absolute inset-0 m-auto flex items-center justify-center z-0 text-black">
        <Icon size="2.5em" />
      </div>

      <span 
        ref={nameRef} 
        // Applying the Neon Green to the text and adding a glow shadow
        className="relative z-20 text-[0.85rem] font-mono font-black text-[#39FF14] pointer-events-none px-2 uppercase tracking-tighter leading-tight drop-shadow-[0_0_8px_rgba(57,255,20,0.6)]"
      >
        {item.name}
      </span>
    </li>
  );
}

export default function TechStack() {
  return (
    <section id="skills" className="py-20 mx-auto px-6 max-w-6xl flex flex-col gap-12 bg-white selection:bg-[#39FF14] selection:text-black">
      <h1 className="font-mono italic font-black text-black text-[2.5rem] tracking-tight">
        Skills<span className="text-[#39FF14] text-[3rem]">.</span>
      </h1>

      <div className="flex flex-col gap-16">
        <article className="flex flex-col gap-8">
          <h2 className="text-xl font-mono text-zinc-500 font-bold uppercase tracking-wide">
            Technologies and tools
          </h2>
          <ul className="flex gap-4 flex-wrap w-fit">
            {skills.map((item, idx) => (
              <TechCard key={idx} item={item} />
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
