"use client";
import { Grid, GridItem, Heading, IconButton, Tooltip, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const [scroll, setScroll] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!scroll && document.documentElement.scrollTop > 100) {
                setScroll(true);
            } else if (scroll && document.documentElement.scrollTop < 70) {
                setScroll(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scroll]);

    // BUG: Resizing of the font is causing strange shit on webkit (safari)
    return (
        <Grid p={3} w={"full"} h={"20"} templateColumns={"1fr 8fr 1fr"}>
            {/*TODO add a little transparency to tooltip and change description dynamically*/}
            <GridItem>
                <Tooltip
                    hasArrow
                    label={`switch to ${colorMode === "dark" ? "light" : "dark"} mode`}
                    borderRadius={"lg"}
                >
                    <IconButton
                        onClick={toggleColorMode}
                        size={"md"}
                        variant={"ghost"}
                        colorScheme={"neutral"}
                        icon={
                            colorMode === "dark" ? (
                                <MoonIcon boxSize={5} />
                            ) : (
                                <SunIcon boxSize={5} />
                            )
                        }
                        aria-label={"Switch color mode"}
                    />
                </Tooltip>
            </GridItem>

            <GridItem display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <Heading as={"h1"} colorScheme={"neutral"} whiteSpace={"nowrap"}>
                    Truth Table Wizard
                </Heading>
            </GridItem>
        </Grid>
    );
};

export default Header;
