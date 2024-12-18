import Hero from "@/components/hero";
import Projects from "@/components/projects";

export default function Home() {
    return (
        <main className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
            <Hero />
            <Projects />
        </main>
    );
}