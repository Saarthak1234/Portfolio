import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Metrics from "@/components/Metrics";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TechStack />
      <Experience />
      <Projects />
      <Metrics />
      <Contact />
    </main>
  );
}
