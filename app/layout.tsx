"use client";

import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider"
import { Poppins } from "next/font/google"
import "../styles/globals.css";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/loading-screen";
import Footer from "@/components/footer";

const metadata: Metadata = {
    title: "Mauro Krekels - Portfolio",
    description: "Mauro Krekels - Portfolio",
};

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-poppins",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <html lang="en" suppressHydrationWarning>
            <head />
            <body className={poppins.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <AnimatePresence mode="wait">
                        {isLoading ? (
                            <LoadingScreen key="loading" />
                        ) : (
                            <>
                                {children}
                                <Footer />
                            </>
                        )}
                    </AnimatePresence>
                </ThemeProvider>
            </body>
        </html>
    );
}
