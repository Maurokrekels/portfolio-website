"use client";
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Globe, Clock } from 'lucide-react';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { Project as ProjectProps } from "@/types";


const Project: React.FC<ProjectProps> = ({
    title,
    description,
    link,
    technologies,
    image,
    github,
    completed,
    startDate,
    endDate
}) => {
    return (
        <Card className="w-full m-4 hover:border-primary/40 transition-colors duration-200">
                <CardHeader>
                    <Image src={image} alt={title} width={400} height={200} className="rounded-t-lg" />
                    <CardTitle className="mt-2">{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {technologies.map((tech, index) => (
                            <Badge key={index} variant="secondary">{tech}</Badge>
                        ))}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Calendar className="w-4 h-4" />
                        <span>{startDate} - {endDate || 'Ongoing'}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{completed ? 'Completed' : 'In Progress'}</span>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    {github && (
                        <Button variant="outline" onClick={() => window.open(github, '_blank')}>
                            <FaGithub className="w-4 h-4 mr-2" />
                            GitHub
                        </Button>
                    )}
                    {link && (
                        <Button onClick={() => window.open(link, '_blank')} className='text-white'>
                            <Globe className="w-4 h-4 mr-2" />
                            Visit Project
                        </Button>
                    )}
                </CardFooter>
            </Card>
    );
};

export default Project;

