"use client";

import { useTheme } from "next-themes";
import { UseThemeProps } from "next-themes/dist/types";
import MoonIcon from "@/components/icons/MoonIcon";
import SunIcon from "@/components/icons/SunIcon";
import React from "react";
import { clsx } from "clsx";
import { Tooltip } from "react-tooltip";

interface ColorModeSwitcherProps {
    className: string;
}

const ColorModeSwitcher = ({ className }: ColorModeSwitcherProps) => {
    const { theme, setTheme }: UseThemeProps = useTheme();

    const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

    return (
        <>
            <button
                className={clsx(
                    "grid h-9 w-9 place-items-center rounded-lg hover:shadow-md dark:hover:bg-neutral-700/40 sm:h-10 sm:w-10 md:h-12 md:w-12 md:hover:scale-105",
                    className
                )}
                onClick={toggleTheme}
                id="color-switcher"
            >
                {theme === "dark" ? (
                    <MoonIcon className="h-4 w-4 sm:h-7 sm:w-7" />
                ) : (
                    <SunIcon className="h-6 w-6 sm:h-7 sm:w-7" />
                )}
            </button>

            {/* <Tooltip
                variant={theme === "light" ? "light" : "dark"}
                delayShow={500}
                anchorSelect="#color-switcher"
                content={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            /> */}
        </>
    );
};

export default ColorModeSwitcher;
