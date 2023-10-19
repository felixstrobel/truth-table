import "./globals.css";

import React from "react";
import { URL } from "url";
import { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import ScrollToTopButton from "@/components/layout/ScrollToTopButton";
import { Comfortaa } from "next/font/google";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import Link from "next/link";
import ColorModeProvider from "@/components/theme/ColorModeProvider";
import ColorModeSwitcher from "@/components/theme/ColorModeSwitcher";
import PlausibleProvider from "next-plausible";

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
    viewport: { width: "device-width", initialScale: 1 },
    creator: "truth-table.com Team",
    publisher: "truth-table.com Team",
    robots: { index: true, follow: true },
    alternates: {
        canonical: "https://truth-table.com",
        languages: { en: "https://truth-table.com" },
    },
    icons: [
        { href: "/icon-16.png", url: "/favicon.ico" },
        { href: "/icon-16.png", url: "/icon-16.png", sizes: "16x16", type: "image/png" },
        { href: "/icon-32.png", url: "/icon-32.png", sizes: "32x32", type: "image/png" },
        { href: "/icon-48.png", url: "/icon-48.png", sizes: "48x48", type: "image/png" },
        { href: "/icon-96.png", url: "/icon-96.png", sizes: "96x96", type: "image/png" },
        { href: "/icon-144.png", url: "/icon-144.png", sizes: "144x144", type: "image/png" },
        { href: "/icon-152.png", url: "/icon-152.png", sizes: "152x152", type: "image/png" },
        { href: "/icon-192.png", url: "/icon-192.png", sizes: "192x192", type: "image/png" },
        { href: "/icon-256.png", url: "/icon-256.png", sizes: "256x256", type: "image/png" },
        { href: "/icon-384.png", url: "/icon-384.png", sizes: "384x384", type: "image/png" },
        { href: "/icon-512.png", url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    manifest: "/manifest.json",
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
    appleWebApp: {
        capable: true,
        title: "Truth Table",
        startupImage: "/icon-256.png",
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
        <html lang="en" className={`${comfortaa.variable}`} suppressHydrationWarning>
            <body className="flex min-h-screen flex-col font-comfortaa">
                <PlausibleProvider domain="truth-table.com">
                    <ColorModeProvider>
                        <header className="mx-auto mb-6 mt-4 grid w-full max-w-7xl grid-cols-3 grid-rows-1 px-4 sm:px-6 lg:mb-16 lg:mt-8 lg:px-8">
                            <div></div>

                            <div className="self-center justify-self-center md:self-start">
                                <Link
                                    href="/"
                                    className="select-none whitespace-nowrap text-3xl dark:text-neutral-100 sm:text-5xl md:text-7xl"
                                >
                                    <h1>Truth Table</h1>
                                </Link>
                            </div>

                            <ColorModeSwitcher className="self-center justify-self-end" />
                        </header>
                        <main className="max-w-7xl flex-1 px-4 sm:px-6 md:mx-auto lg:px-8">
                            {children}
                        </main>
                        <footer className="mx-auto mb-8 mt-12 w-full max-w-7xl flex-shrink-0 px-4 sm:px-6 md:mb-4 lg:px-8">
                            <Footer />
                        </footer>

                        <ScrollToTopButton />
                    </ColorModeProvider>
                </PlausibleProvider>
            </body>
        </html>
    );
};

export default RootLayout;
