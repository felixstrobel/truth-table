"use client";

import { useTheme } from "next-themes";
import { UseThemeProps } from "next-themes/dist/types";
import MoonIcon from "@/components/icons/MoonIcon";
import SunIcon from "@/components/icons/SunIcon";
import React from "react";
import { clsx } from "clsx";

interface ColorModeSwitcherProps {
    className: string;
}

const ColorModeSwitcher = ({ className }: ColorModeSwitcherProps) => {
    const { theme, setTheme }: UseThemeProps = useTheme();

    const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

    return (
        <button
            className={clsx(
                "grid place-items-center w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg hover:shadow-md md:hover:scale-105 dark:hover:bg-neutral-700/40",
                className
            )}
            onClick={toggleTheme}
        >
            {theme === "dark" ? <MoonIcon className="w-4 h-4 sm:w-7 sm:h-7" /> : <SunIcon className="w-6 h-6 sm:w-7 sm:h-7" />}
        </button>
    );
};

export default ColorModeSwitcher;
