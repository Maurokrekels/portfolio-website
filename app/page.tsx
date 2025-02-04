import { AnimationDiv, AnimationP } from "@/components/animations";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import Projects from "@/components/projects";
import Skills from "@/components/Skills";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";

export default function Home() {
    return (
        <main className="relative min-h-screen">
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <BackgroundAnimation />
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />

                <div className="container mx-auto px-4 py-16 z-10">
                    <div className="max-w-4xl mx-auto">
                        <AnimationDiv
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6 text-center"
                        >
                            <span className="inline-block text-primary/80 text-sm font-medium tracking-wider uppercase mb-4">
                                Welcome to my portfolio
                            </span>
                            
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-secondary">
                                    Hi, I'm Mauro
                                </span>
                            </h1>

                            <AnimationP
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                            >
                                Full stack developer passionate about creating innovative solutions
                                and embracing new technologies.
                            </AnimationP>

                            <AnimationDiv
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                                className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
                            >
                                <Link href="#projects">
                                    <Button
                                        size="lg"
                                        className="group relative w-full sm:w-auto overflow-hidden bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300"
                                    >
                                        <span className="relative z-10 flex items-center text-white">
                                            View My Work
                                            <GoArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                                        </span>
                                    </Button>
                                </Link>

                                <Link 
                                    href="https://github.com/MauroKrekels" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="group relative w-full sm:w-auto border-primary/20 hover:border-primary/40 transition-all duration-300"
                                    >
                                        <FaGithub className="mr-2 transition-transform group-hover:scale-110" />
                                        GitHub Profile
                                    </Button>
                                </Link>
                            </AnimationDiv>
                        </AnimationDiv>
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3">
                    <AnimationDiv
                        className="w-6 h-10 border-2 border-primary/30 rounded-full p-1.5"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        <AnimationDiv
                            className="w-1.5 h-1.5 bg-primary rounded-full mx-auto"
                            animate={{
                                y: [0, 16, 0],
                                opacity: [0.5, 1, 0.5]
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </AnimationDiv>
                    
                    <AnimationDiv
                        className="text-xs text-primary/50 font-medium tracking-wider uppercase"
                        animate={{
                            opacity: [0.5, 1, 0.5]
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        Scroll
                    </AnimationDiv>
                </div>
            </section>

            <Projects />
            <Skills />
        </main>
    );
}