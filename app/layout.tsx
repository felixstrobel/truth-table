import "./globals.css";

import React from "react";
import { URL } from "url";
import { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import ScrollToTopButton from "@/components/layout/ScrollToTopButton";
import { Comfortaa } from "next/font/google";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import Link from "next/link";

export const metadata: Metadata = {
    metadataBase: new URL("https://truth-table.com"),
    title: {
        template: "%s | Truth Table Generator",
        default: "Truth Table Generator", // a default is required when using a template
    },
    description:
        "Simplify logical analysis with our easy-to-use truth table generator. Quickly evaluate your boolean expressions and view the corresponding truth table in real-time. A handy tool for students and professionals.",
    applicationName: "Truth Table Generator",
    authors: [
        { name: "Felix Strobel", url: "https://github.com/felixstrobel" },
        { name: "Max Lohrmann", url: "https://github.com/Max0440" },
    ],
    keywords: [
        "Boolean expression",
        "truth table",
        "logic gate",
        "logic operator",
        "logic calculator",
        "logical analysis",
        "boolean algebra",
        "evaluate logic",
        "evaluate logical statements",
        "Boolean expression truth table generator",
        "Boolean logic table calculator",
        "online truth table generator",
        "evaluate boolean expressions online",
        "logic gate truth table maker",
        "binary logic analysis tool",
        "interactive logic calculator",
        "logic reasoning web app",
        "solve logical puzzles online",
        "truth table generator for boolean algebra",
    ],
    referrer: "strict-origin-when-cross-origin",
    themeColor: "#171717", // Equivalent to "neutral-900"
    // colorScheme: "", TODO
    viewport: { width: "device-width", initialScale: 1 },
    creator: "truth-table.com Team",
    publisher: "truth-table.com Team",
    robots: { index: true, follow: true },
    alternates: {
        canonical: "https://truth-table.com",
        languages: { en: "https://truth-table.com" },
    },
    // icons: [], TODO: here the different sizes for the favicon
    manifest: "/manifest.json", //TODO: check if generation is valid
    openGraph: {
        type: "website",
        title: "Truth Table Generator",
        description:
            "Simplify logical analysis with our easy-to-use truth table generator. Quickly evaluate your boolean expressions and view the corresponding truth table in real-time. A handy tool for students and professionals.",
        url: "https://truth-table.com",
        // images: [] TODO: images for opengraph (1200x627 pixels)
    },
    twitter: {
        card: "summary",
        title: "Truth Table Generator",
        description:
            "Simplify logical analysis with our easy-to-use real-time truth table generator. Quickly evaluate your Boolean expressions and view the truth table. A handy tool for students and professionals.",
        // images: [] TODO for twitter (1:1 ratio; min. 144x144 pixels; max. 4096x4096 pixels; max. 5MB; jpg, png, GIF?)
    },
    verification: {
        google: "", //TODO: paste google search console secret
    },
    appleWebApp: {
        capable: true,
        title: "Truth Table",
        startupImage: "/", //TODO: add splash image
        statusBarStyle: "black-translucent",
    },
    formatDetection: { telephone: true, date: true, address: true, email: true, url: true },
};

const comfortaa: NextFontWithVariable = Comfortaa({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-comfortaa",
});

interface RootLayoutProps {
    children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
    return (
        <html lang="en" className={`dark ${comfortaa.variable}`}>
            <body className="flex flex-col min-h-screen font-comfortaa">
                <header className="grid grid-cols-[1fr 6fr 1fr] max-w-7xl mx-auto mt-4 mb-6 lg:mt-8 lg:mb-16 px-4 sm:px-6 lg:px-8">
                    <div className="justify-self-center self-center md:self-start">
                        <Link
                            href="/"
                            className="whitespace-nowrap text-3xl sm:text-5xl md:text-7xl dark:text-neutral-100 select-none"
                        >
                            Truth Table
                        </Link>
                    </div>
                    {/* TODO: add color mode changer */}
                </header>
                <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
                <footer className="flex-shrink-0 mt-12 mb-8 md:mb-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Footer />
                </footer>

                <ScrollToTopButton />
            </body>
        </html>
    );
};

export default RootLayout;
