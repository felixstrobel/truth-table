import { Text } from "@chakra-ui/react";
import Link from "next/link";
import { ReactNode } from "react";

interface CustomProps {
    href: string;
    children: ReactNode;
}

const CustomLink = ({ href, children }: CustomProps) => {
    return (
        <Text
            as={Link}
            href={href}
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
