import React from 'react';
import Project from './Project';
import { config } from '@/lib/config';

const Projects: React.FC = () => {
    const projects = config.projects;
    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-semibold mb-2 text-center text-primary">My Projects</h2>
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

