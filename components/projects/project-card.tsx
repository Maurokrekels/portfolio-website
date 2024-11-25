import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    githubUrl: string | false;
    liveUrl: string;
}

export default function ProjectCard({
    title,
    description,
    tags,
    githubUrl,
    liveUrl
}: ProjectCardProps) {
    return (
        <div className="bg-card rounded-lg overflow-hidden border border-border">
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-muted-foreground mb-4">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-sm"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="flex gap-4">
                    {githubUrl && (
                        <Link
                            href={githubUrl}
                            target="_blank"
                            className="hover:text-primary transition-colors"
                        >
                            <Github size={20} />
                        </Link>
                    )}
                    <Link
                        href={liveUrl}
                        target="_blank"
                        className="hover:text-primary transition-colors"
                    >
                        <ExternalLink size={20} />
                    </Link>
                </div>
            </div>
        </div>
    );
} 