'use client'
import {Button, Container, useColorMode} from "@chakra-ui/react";

export default function Header() {
    const { colorMode, toggleColorMode } = useColorMode()

    return <Container width={"full"} height={"sm"} margin={0} padding={0} backgroundColor={"red.400"}>
        <Button onClick={toggleColorMode} mt={10} w={40}>
            Toggle {colorMode === "light" ? "Dark" : "Light"} Mode
        </Button>
    </Container>
}