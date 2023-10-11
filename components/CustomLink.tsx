import Link from "next/link";
import { HTMLAttributeAnchorTarget, ReactNode } from "react";

interface CustomProps {
    href: string;
    children: ReactNode;
    target?: HTMLAttributeAnchorTarget;
}

const CustomLink = ({ href, children, target }: CustomProps) => {
    return (
        <Link
            href={href}
            target={target}
            rel="nofollow noopener"
            className="decoration-2 underline decoration-purple-400 underline-offset-4"
        >
            {children}
        </Link>
    );
};

export default CustomLink;
