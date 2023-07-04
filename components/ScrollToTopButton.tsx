import { IconButton } from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";
import { useState } from "react";

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState<boolean>(true);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.onscroll = () => {
        setVisible(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400);
    };

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
