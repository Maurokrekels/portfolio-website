"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="h-screen flex flex-col justify-center items-center text-center px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    <span className="text-primary">Software Developer</span><span className="text-muted-foreground text-sm"> (Student)</span>
                </h1>
            </motion.div>

            <motion.p
                className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                Ik ben een enthousiaste software developer die graag nieuwe dingen leert en uitdagingen aangaat.
            </motion.p>

            <motion.div
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <Link
                    href="#projects"
                    className="bg-primary text-primary-foreground px-6 py-3 rounded-lg flex items-center gap-2 hover:opacity-90 transition-opacity group"
                    scroll={false}
                    onClick={(e) => {
                        e.preventDefault();
                        document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                >
                    Bekijk mijn werk
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>

                <div className="flex gap-4">
                    <Link
                        href="https://github.com/MauroKrekels"
                        target="_blank"
                        className="bg-secondary text-secondary-foreground p-3 rounded-lg hover:opacity-90 transition-opacity"
                    >
                        <Github size={24} />
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}