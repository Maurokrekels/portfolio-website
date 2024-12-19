import React from 'react';
import Project from './Project';
import { projects } from '@/lib/config';

const Projects: React.FC = () => {
    return (
        <div id='projects' className="snap-start container mx-auto px-4 py-8 h-screen">
            <h2 className="text-5xl font-semibold mb-2 text-center text-primary">My Projects</h2>
            <p className="text-lg text-center text-muted-foreground mb-8">
                Here are some of the projects I've worked on.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;

