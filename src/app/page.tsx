import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Metrics from "@/components/Metrics";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TechStack />
      <Projects />
      <Metrics />
      <Contact />
    </main>
  );
}
