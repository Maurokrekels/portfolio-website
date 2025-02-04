"use client";
import React, { useState } from 'react';
import Project from './Project';
import { projects } from '@/lib/config';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Projects: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const projectsPerPage = 3;
    const totalPages = Math.ceil(projects.length / projectsPerPage);

    const nextPage = () => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
    };

    const prevPage = () => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    const currentProjects = projects.slice(
        currentPage * projectsPerPage,
        (currentPage + 1) * projectsPerPage
    );

    return (
        <section id="projects" className="py-24 bg-gradient-to-b from-background via-secondary/5 to-background">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50 mb-6">
                        Featured Projects
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Explore some of my recent work, showcasing a range of skills and technologies.
                    </p>
                </div>

                <div className="relative max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {currentProjects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Project {...project} />
                            </motion.div>
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute -left-16 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-all duration-200"
                        onClick={prevPage}
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </Button>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute -right-16 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-all duration-200"
                        onClick={nextPage}
                    >
                        <ChevronRight className="h-6 w-6" />
                    </Button>

                    {/* Page Indicators */}
                    <div className="flex justify-center gap-2 mt-8">
                        {Array.from({ length: totalPages }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentPage(index)}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                                    index === currentPage 
                                        ? 'bg-primary scale-125' 
                                        : 'bg-primary/20 hover:bg-primary/40'
                                }`}
                                aria-label={`Go to page ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
