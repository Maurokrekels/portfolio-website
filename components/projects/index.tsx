"use client";
import React, { useState, useEffect } from 'react';
import Project from './Project';
import { projects } from '@/lib/config';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects: React.FC = () => {
    const [projectsList, setProjects] = useState(projects);
    const [currentIndex, setCurrentIndex] = useState(0);
    const projectsToShow = 3;

    const nextProjects = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex + 1 < projectsList.length - 2) ? prevIndex + 1 : prevIndex
        );
    };

    const prevProjects = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    };

    useEffect(() => {
        if (projectsList.length < 3) {
            const additionalProjects = Array(3 - projectsList.length).fill({
                title: 'Coming Soon',
                description: 'A new exciting project is on the way!',
                link: '',
                technologies: [],
                image: '/placeholder.png',
                github: false,
                completed: false,
                startDate: '',
                endDate: '',
            });
            setProjects([...projectsList, ...additionalProjects]);
        }
    }, []);

    return (
        <div id='projects' className="snap-start container mx-auto px-4 py-8 h-screen">
            <h2 className="text-5xl font-semibold mb-2 text-center text-primary">My Projects</h2>
            <p className="text-lg text-center text-muted-foreground mb-8">
                Here are some of the projects I've worked on.
            </p>
            <div className="relative overflow-hidden">
                <motion.div 
                    className="flex transition-all duration-500 ease-in-out"
                    animate={{ x: `${-currentIndex * 33.33}%` }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    {projectsList.map((project, index) => (
                        <div key={index} className="w-1/3 flex-shrink-0 px-2">
                            <Project {...project} />
                        </div>
                    ))}
                </motion.div>
                {projectsList.length > projectsToShow && (
                    <>
                        <Button 
                            variant="outline" 
                            className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10"
                            onClick={prevProjects}
                            disabled={currentIndex === 0}
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <Button 
                            variant="outline" 
                            className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10"
                            onClick={nextProjects}
                            disabled={currentIndex + projectsToShow >= projectsList.length}
                        >
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Projects;

