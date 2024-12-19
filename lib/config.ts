import { Project, SkillProps } from "@/types";
import { SiGit, SiJavascript, SiLua, SiMysql, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";

const projects: Project[] = [
    {
        title: 'Aurum Scripts',
        description: 'Aurum Scripts is a company that sells resources for the popular game FiveM.',
        link: 'https://aurum-scripts.com',
        technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
        image: '/aurum.png',
        github: 'https://github.com/Aurum-Scripts',
        completed: false,
        startDate: '2024-14-12',
        endDate: '',
    },
    {
        title: 'Portfolio',
        description: 'My personal portfolio website.',
        link: 'https://maurokrekels.vercel.app',
        technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
        image: '/portfolio.png',
        github: 'https://github.com/MauroKrekels/portfolio-website',
        completed: false,
        startDate: '2024-18-12',
        endDate: '',
    },
];

const githubUsername = "MauroKrekels";

const skills: SkillProps[] = [
    {
        title: "JavaScript",
        icon: SiJavascript,
    },
    {
        title: "TypeScript",
        icon: SiTypescript,
    },
    {
        title: "MySQL",
        icon: SiMysql,
    },
    {
        title: "Lua",
        icon: SiLua,
    },
    {
        title: "Node.js",
        icon: SiNodedotjs,
    },
    {
        title: "React",
        icon: SiReact,
    },
    {
        title: "Next.js",
        icon: SiNextdotjs,
    },
    {
        title: "Tailwind CSS",
        icon: SiTailwindcss,
    },
    {
        title: "Git",
        icon: SiGit,
    }
]

export { projects, githubUsername, skills };