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
                    fontSize={{ base: "3xl", sm: "5xl", md: "7xl" }}
                    whiteSpace={"nowrap"}
                >
                    Truth Table
                </Heading>
            </GridItem>

            <GridItem justifySelf={"end"} alignSelf={{ base: "center", sm: "start" }}>
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
                        w={{ base: 8, sm: 12 }}
                        h={{ base: 10, sm: 12 }}
                        colorScheme={"neutral"}
                        variant={"ghost"}
                        _hover={{ backgroundColor: "neutral.200" }}
                        _dark={{ _hover: { backgroundColor: "whiteAlpha.200" } }}
                        icon={
                            colorMode === "dark" ? (
                                <MoonIcon boxSize={{ base: 4, sm: 6 }} />
                            ) : (
                                <SunIcon boxSize={{ base: 4, sm: 6 }} />
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
