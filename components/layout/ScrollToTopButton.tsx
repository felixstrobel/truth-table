"use client";

import { useEffect, useState } from "react";
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
                "fixed bottom-4 right-3 grid h-10 w-10 place-items-center rounded-lg border border-neutral-400 bg-neutral-200 hover:bg-neutral-300 dark:border-neutral-600 dark:bg-neutral-700 dark:placeholder-neutral-300 dark:hover:bg-neutral-600 dark:focus:border-violet-500 dark:focus:ring-violet-600",
                !visible && "hidden"
            )}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
        </button>
    );
};

export default ScrollToTopButton;
