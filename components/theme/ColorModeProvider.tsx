"use client";

import { ThemeProvider } from "next-themes";
import React from "react";

interface DarkModeProviderProps {
    children: React.ReactNode;
}

const ColorModeProvider = ({ children }: DarkModeProviderProps) => {
    return (
        <ThemeProvider attribute="class" defaultTheme="dark">
            {children}
        </ThemeProvider>
    );
};

export default ColorModeProvider;
