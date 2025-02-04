"use client";

import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider"
import { Poppins } from "next/font/google"
import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";

const metadata: Metadata = {
    title: "Mauro Krekels - Portfolio",
    description: "Mauro Krekels - Portfolio",
    keywords: ["Mauro", "Krekels", "Software Developer", "Portfolio"],
    authors: [{ name: "Mauro Krekels" }],
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
    return (
        <html lang="en" suppressHydrationWarning>
            <head />
            <body className={cn(poppins.className, "overflow-y-scroll no-scrollbar")}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                >
                    <AnimatePresence mode="wait">
                        {children}
                        <Footer />
                    </AnimatePresence>
                </ThemeProvider>
            </body>
        </html>
    );
}
