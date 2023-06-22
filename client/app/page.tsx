'use client'
import {Box, Button, Tooltip} from "@chakra-ui/react";
import {MoonIcon} from "@chakra-ui/icons";

export default function Home() {
    return (
        <div className="w-screen min-h-screen overflow-hidden bg-amber-700">
            <Box w={"full"} px={3} py={3} bgColor={"red.400"}>
                {/*TODO add a little transparency to tooltip and change description dynamically*/}
                <Tooltip hasArrow label={"switch to TODO mode"} borderRadius={"lg"} bgColor={""}>
                    <Button w={"12"} h={"12"} variant={"ghost"}>
                        <MoonIcon boxSize={5}/>
                    </Button>
                </Tooltip>
            </Box>
            {/*<Header/>*/}
            {/*<main className="flex min-h-screen flex-col items-center justify-between p-24">*/}

            {/*</main>*/}
            {/*<Footer/>*/}
        </div>
    );
}
