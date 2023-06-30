import { Grid, GridItem, Heading, IconButton, Tooltip, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Grid as={"header"} py={4} w={"full"} templateColumns={"1fr 6fr 1fr"}>
            <GridItem />

            <GridItem justifySelf={"center"} alignSelf={{ base: "center", md: "start" }}>
                <Heading
                    as={"h1"}
                    colorScheme={"neutral"}
                    fontSize={{ base: "3xl", md: "5xl" }}
                    whiteSpace={"nowrap"}
                >
                    Truth Table
                </Heading>
            </GridItem>

            <GridItem justifySelf={"end"} alignSelf={{ base: "center", md: "start" }}>
                <Tooltip
                    hasArrow
                    openDelay={800}
                    closeOnClick={false}
                    label={`switch to ${colorMode === "dark" ? "light" : "dark"} mode`}
                    colorScheme={"neutral"}
                    borderRadius={"md"}
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
        </Grid>
    );
};

export default Header;
