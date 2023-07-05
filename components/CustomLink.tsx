import { Text } from "@chakra-ui/react";
import Link from "next/link";
import { HTMLAttributeAnchorTarget, ReactNode } from "react";

interface CustomProps {
    href: string;
    children: ReactNode;
    target?: HTMLAttributeAnchorTarget;
}

const CustomLink = ({ href, children, target }: CustomProps) => {
    return (
        <Text
            as={Link}
            href={href}
            target={target}
            rel="nofollow noopener"
            _hover={{
                textDecorationThickness: 2,
                textDecorationLine: "underline",
                textDecorationColor: "purple.400",
                textUnderlineOffset: 4,
            }}
        >
            {children}
        </Text>
    );
};

export default CustomLink;
