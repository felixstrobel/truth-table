const Header = () => {
    // const { colorMode, toggleColorMode } = useColorMode();

    return (
        <div className="grid grid-cols-[1fr 6fr 1fr]">
            <div />

            <div className="justify-self-center self-center md:self-start">
                <h1 className="whitespace-nowrap text-3xl sm:text-5xl md:text-7xl">Truth Table</h1>
            </div>

            <div className="justify-self-end self-center sm:self-start">
                {/*<Tooltip
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
                </Tooltip>*/}
            </div>
        </div>
    );
};

export default Header;
