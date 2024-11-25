"use client";

import { motion } from "framer-motion";
import ProjectCard from "./project-card";

const projects = [
    {
        title: "Portfolio Website",
        description: "Mijn persoonlijke portfolio website waar ik mijn projecten en vaardigheden kan tonen.",
        tags: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS"
        ],
        githubUrl: "",
        liveUrl: "/"
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
};

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-4 bg-secondary/20">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                className="max-w-6xl mx-auto"
            >
                <div className="text-center mb-12">
                    <motion.h2
                        className="text-4xl font-bold mb-4"
                        variants={itemVariants}
                    >
                        Mijn Projecten
                    </motion.h2>
                    <motion.p
                        className="text-muted-foreground max-w-2xl mx-auto"
                        variants={itemVariants}
                    >
                        Hier zijn enkele projecten waar ik aan heb gewerkt.
                        Elk project weerspiegelt mijn passie voor clean code en gebruiksvriendelijk design.
                    </motion.p>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.2 }}
                        >
                            <ProjectCard {...project} />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
} 