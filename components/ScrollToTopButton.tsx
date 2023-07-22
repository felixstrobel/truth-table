import { IconButton } from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";

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
        <IconButton
            display={visible ? "block" : "none"}
            position={"fixed"}
            bottom={4}
            right={3}
            zIndex={"tooltip"}
            icon={<ArrowUpIcon boxSize={6} />}
            onClick={scrollToTop}
            aria-label={"Scroll to the top of the page"}
        />
    );
};

export default ScrollToTopButton;
