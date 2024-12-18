'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { GoArrowRight } from 'react-icons/go';
import CodeBlock from './CodeBlock';
import BackgroundAnimation from './BackgroundAnimation';
import { Button } from '../ui/button';

export default function Hero() {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <BackgroundAnimation />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 z-0" />

            <div className="container mx-auto px-6 py-24 sm:py-32 z-10 relative">
                <div className="grid grid-cols-1 gap-x-16 gap-y-16 lg:grid-cols-2 lg:items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="lg:pr-8"
                    >
                        <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                            Software Developer{' '}
                            <span className="text-2xl font-normal text-muted-foreground">
                                (Student)
                            </span>
                        </h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="mt-6 text-lg text-muted-foreground"
                        >
                            Passionate about creating innovative solutions and learning new technologies.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="mt-10 flex items-center gap-x-6"
                        >
                            <Link href="#projects">
                                <Button
                                    variant="default"
                                    size="lg"
                                    className="group relative overflow-hidden"
                                >
                                    <span className="relative z-10 flex items-center text-white">
                                        Projects
                                        <GoArrowRight className="ml-2" />
                                    </span>
                                    <span className="absolute inset-0 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
                                </Button>
                            </Link>
                            <Link href="https://github.com/MauroKrekels">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="group relative overflow-hidden"
                                >
                                    <span className="relative z-10 flex items-center">
                                        <FaGithub className="mr-2" />
                                        GitHub
                                    </span>
                                    <span className="absolute inset-0 bg-primary/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-10 lg:mt-0"
                    >
                        <div className="bg-background/60 backdrop-blur-md border-2 border-primary/20 p-6 rounded-lg shadow-xl">
                            <div className="flex items-center mb-4 space-x-2">
                                <div className="w-3 h-3 bg-red-500 rounded-full" />
                                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                                <div className="w-3 h-3 bg-green-500 rounded-full" />
                            </div>
                            <CodeBlock />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

