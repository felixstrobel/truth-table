"use client";

import { useState, useEffect } from "react";
import { clsx } from "clsx";

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState<boolean>(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        const onScroll = () => {
            setVisible(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400);
        };
        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <button
            onClick={scrollToTop}
            className={clsx(
                "fixed bottom-4 right-3 grid place-items-center w-10 h-10 rounded-lg border dark:bg-neutral-700/40 dark:hover:bg-neutral-700/80 border-neutral-400 dark:border-neutral-600 dark:focus:border-violet-500 dark:placeholder-neutral-300 dark:focus:ring-violet-600",
                !visible && "hidden"
            )}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
        </button>
    );
};

export default ScrollToTopButton;
