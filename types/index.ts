export interface Project {
    title: string;
    description: string;
    link: string;
    technologies: string[];
    image: string;
    github: string | false;
    completed: boolean;
    startDate: string;
    endDate?: string;
}

export interface SkillProps {
    title: string;
    icon: React.ElementType;
}

export interface GithubUser {
    avatar_url: string;
    name: string;
    location: string;
    followers: number;
    following: number;
    public_repos: number;
}