export interface Config {
    projects: Project[];
}

interface Project {
    title: string;
    description: string;
    link: string;
    technologies: string[];
    image: string;
    github: string;
    completed: boolean;
    startDate: string;
    endDate?: string;
}