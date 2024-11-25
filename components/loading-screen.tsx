"use client";
import { motion } from "framer-motion";

export default function LoadingScreen() {
    const name = "Mauro Krekels";
    const letters = name.split("").map((letter, index) => (
        <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            {letter}
        </motion.span>
    ));

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-background"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex flex-col items-center">
                <h1 className="text-4xl font-bold text-primary animate-pulse">Loading...</h1>
                <div className="h-2 bg-primary rounded-full w-full max-w-md mt-2">
                    <motion.div
                        className="h-full bg-secondary rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1, ease: "linear" }}
                    />
                </div>
                <motion.h2
                    className="text-2xl font-bold text-primary mt-4"
                >
                    {letters}
                </motion.h2>
            </div>
        </motion.div>
    );
} 