'use client'
import {Grid, GridItem, Heading, IconButton, Tooltip, useColorMode} from "@chakra-ui/react";
import {MoonIcon, SunIcon} from "@chakra-ui/icons";

export default function Header() {
    const {colorMode, toggleColorMode} = useColorMode()

    return <Grid w={"full"} minH={18} p={3} templateColumns={"1fr 8fr 1fr"} alignItems={"center"} position={"sticky"}
                 bgColor={"red.400"}>
        {/*TODO add a little transparency to tooltip and change description dynamically*/}
        <GridItem>
            <Tooltip hasArrow label={`switch to ${colorMode === "dark" ? "light" : "dark"} mode`} borderRadius={"lg"}>
                <IconButton
                    onClick={toggleColorMode}
                    size={"md"}
                    variant={"ghost"}
                    icon={colorMode === "dark" ? <MoonIcon boxSize={5}/> : <SunIcon boxSize={5}/>}
                    aria-label={"Switch color mode"}/>
            </Tooltip>
        </GridItem>
        <GridItem textAlign={"center"}>
            <Heading m={"auto"}>Truth Table Wizard</Heading>
        </GridItem>
    </Grid>
}