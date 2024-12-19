"use client";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SiGithub } from "react-icons/si";
import { FaCode, FaServer, FaLaptopCode, FaDatabase } from "react-icons/fa";
import { fetchGithubUser } from "@/lib/github";
import { githubUsername, skills } from "@/lib/config";
import Link from "next/link";
import { motion } from "framer-motion";
import { GithubUser } from "@/types";

export default function Skills() {
    const [user, setUser] = useState<GithubUser>({
        avatar_url: "",
        name: "",
        location: "",
        followers: 0,
        following: 0,
        public_repos: 0,
    });

    useEffect(() => {
        const fetchData = async () => {
            const userData = await fetchGithubUser();
            setUser(userData);
        };
        fetchData();
    }, []);

    return (
        <section id="about" className="snap-start min-h-screen py-20 bg-gradient-to-b from-background to-secondary/20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl font-bold text-center mb-4 text-primary">Skills & Experience</h2>
                    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                        I specialize in full-stack development with a focus on creating responsive and user-friendly applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <Card className="h-full">
                            <CardHeader className="text-center">
                                <Avatar className="w-24 h-24 mx-auto mb-4">
                                    <AvatarImage src={user.avatar_url} alt={user.name} />
                                    <AvatarFallback>{user.name?.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <CardTitle className="text-2xl mb-2">{user.name}</CardTitle>
                                <p className="text-muted-foreground">{user.location}</p>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-3 gap-4 text-center mb-6">
                                    <div className="p-3 rounded-lg bg-secondary/20">
                                        <p className="text-2xl font-semibold">{user.followers}</p>
                                        <p className="text-sm text-muted-foreground">Followers</p>
                                    </div>
                                    <div className="p-3 rounded-lg bg-secondary/20">
                                        <p className="text-2xl font-semibold">{user.following}</p>
                                        <p className="text-sm text-muted-foreground">Following</p>
                                    </div>
                                    <div className="p-3 rounded-lg bg-secondary/20">
                                        <p className="text-2xl font-semibold">{user.public_repos}</p>
                                        <p className="text-sm text-muted-foreground">Repos</p>
                                    </div>
                                </div>
                                <Link
                                    href={`https://github.com/${githubUsername}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                                >
                                    <SiGithub />
                                    View Profile
                                </Link>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2"
                    >
                        <Card className="h-full">
                            <CardHeader>
                                <CardTitle>Technical Skills</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <FaLaptopCode className="text-primary text-xl" />
                                            <div>
                                                <h3 className="font-semibold">Frontend Development</h3>
                                                <p className="text-sm text-muted-foreground">Building responsive UI/UX</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <FaDatabase className="text-primary text-xl" />
                                            <div>
                                                <h3 className="font-semibold">Database Management</h3>
                                                <p className="text-sm text-muted-foreground">SQL and NoSQL databases</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <FaServer className="text-primary text-xl" />
                                            <div>
                                                <h3 className="font-semibold">Backend Development</h3>
                                                <p className="text-sm text-muted-foreground">API design and server management</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <FaCode className="text-primary text-xl" />
                                            <div>
                                                <h3 className="font-semibold">Clean Code</h3>
                                                <p className="text-sm text-muted-foreground">Writing maintainable code</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="font-semibold mb-4">Technologies</h3>
                                <div className="flex flex-wrap gap-2">
                                    {skills.map((skill, index) => (
                                        <Badge key={index} variant="default" className="group hover:scale-105">
                                            <skill.icon className="group-hover:scale-110 transition-transform" />
                                            {skill.title}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

