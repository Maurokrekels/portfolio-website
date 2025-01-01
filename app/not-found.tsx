"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center px-4">
            <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-9xl font-bold mb-4 text-primary animate-pulse">404</h1>
                <h2 className="text-2xl font-semibold mb-4">Pagina niet gevonden</h2>
                <p className="text-muted-foreground mb-8">
                    De pagina die je zoekt bestaat niet of is verplaatst.
                </p>
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity group"
                >
                    <ArrowLeft size={20} className="group-hover:translate-x-1 transition-transform" />
                    Terug naar home
                </Link>
            </motion.div>
        </main>
    );
} 