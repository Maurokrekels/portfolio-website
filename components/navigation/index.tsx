"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Bungee } from 'next/font/google';
import { cn } from "@/lib/utils";
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeSwitcher } from "@/components/theme-switcher";

const bungee = Bungee({
    weight: ["400"],
    subsets: ["latin"],
});

interface NavProps {
    label: string
    href: string
}

const NavItems: NavProps[] = [
    {
        label: "Projects",
        href: "#projects"
    }
]

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={cn(
            "sticky top-0 z-50 w-full transition-all duration-300",
            scrolled ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md" : "bg-transparent"
        )}>
            <nav className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-8">
                <Logo />
                <DesktopMenu pathname={pathname} />
                <div className="flex items-center space-x-4">
                    <ThemeSwitcher />
                    <MobileMenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
                </div>
            </nav>
            <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} pathname={pathname} />
        </header>
    );
}

const Logo = () => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
    >
        <Link href="/" className="flex items-center space-x-2">
            <p className={cn("text-2xl font-bold text-primary", bungee.className)}>Mauro</p>
        </Link>
    </motion.div>
);

const DesktopMenu = ({ pathname }: { pathname: string }) => (
    <div className="hidden md:flex md:items-center md:space-x-1">
        {NavItems.map((item, index) => (
            <motion.div
                key={item.href}
                custom={index}
                initial="initial"
                animate="animate"
            // variants={navItemAnimation}
            >
                <Link href={item.href}>
                    <Button
                        variant="ghost"
                        className={cn(
                            "text-base font-medium transition-colors hover:text-primary",
                            pathname === item.href ? "text-primary" : "text-muted-foreground"
                        )}
                    >
                        {item.label}
                    </Button>
                </Link>
            </motion.div>
        ))}
    </div>
);

const MobileMenuButton = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (isOpen: boolean) => void }) => (
    <motion.button
        className="md:hidden text-foreground"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        whileTap={{ scale: 0.95 }}
    >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    </motion.button>
);

const MobileMenu = ({ isOpen, setIsOpen, pathname }: { isOpen: boolean, setIsOpen: (isOpen: boolean) => void, pathname: string }) => (
    <AnimatePresence>
        {isOpen && (
            <motion.div
                className="md:hidden bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={mobileMenuAnimation}
            >
                <div className="container flex flex-col space-y-4 px-4 py-6">
                    {NavItems.map((item, index) => (
                        <motion.div
                            key={item.href}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * index }}
                        >
                            <Link href={item.href}>
                                <Button
                                    variant="ghost"
                                    className={cn(
                                        "w-full justify-start text-base font-medium",
                                        pathname === item.href ? "text-primary bg-primary/10" : "text-muted-foreground"
                                    )}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </Button>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        )}
    </AnimatePresence>
);

const navItemAnimation = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            delay: (i: number) => i * 0.1,
        },
    },
};

const mobileMenuAnimation = {
    initial: {
        opacity: 0,
        y: -20,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
        },
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.3,
        },
    },
};

