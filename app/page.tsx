import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/Skills";

export default function Home() {
    return (
        <main className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
            <Hero />
            <Projects />
            <Skills />
        </main>
    );
}