"use client";
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Globe, Clock } from 'lucide-react';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { Project as ProjectProps } from "@/types";
import { motion } from 'framer-motion';

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
        <motion.div 
            className="w-full h-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
        >
            <Card className="h-full overflow-hidden bg-card/50 backdrop-blur-sm border-primary/10">
                <CardHeader className="relative h-[200px] p-0">
                    <Image 
                        src={image} 
                        alt={title} 
                        fill 
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                        <CardTitle className="text-xl text-white mb-2">{title}</CardTitle>
                        <CardDescription className="text-sm text-white/80 line-clamp-2">{description}</CardDescription>
                    </div>
                </CardHeader>
                <CardContent className="pt-6">
                    <div className="flex flex-wrap gap-2 mb-6">
                        {technologies.map((tech, index) => (
                            <Badge key={index} variant="secondary">{tech}</Badge>
                        ))}
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{startDate} - {endDate || 'Ongoing'}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{completed ? 'Completed' : 'In Progress'}</span>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex gap-4">
                    {github && (
                        <Button variant="outline" onClick={() => window.open(github, '_blank')} className="flex-1">
                            <FaGithub className="mr-2" />
                            GitHub
                        </Button>
                    )}
                    {link && (
                        <Button onClick={() => window.open(link, '_blank')} className="flex-1 text-white">
                            <Globe className="mr-2" />
                            Visit
                        </Button>
                    )}
                </CardFooter>
            </Card>
        </motion.div>
    );
};

export default Project;

