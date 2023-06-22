'use client'
import Header from "@/components/Header";
import {Box, Button, Flex, Grid, IconButton, Input, InputGroup, InputRightElement} from "@chakra-ui/react";
import {CopyIcon} from "@chakra-ui/icons";
import {useState} from "react";

export default function Home() {
    const [value, setValue] = useState<string>("");
    const quickButtons = ["¬","∧","⊼","∨","⊽","→","↔","↮","(",")", ",", "A", "B", "C"];

    const copyInputToClipBoard = () => {
        navigator.clipboard.writeText(value).catch(e => console.log(e));
    }

    return (
        <div className="w-screen min-h-screen overflow-hidden bg-gray-900">

            <Header/>

            <Grid placeItems={"center"}>
                <Flex w={"50%"} flexDir={"column"}>
                    <InputGroup size={"lg"} mb={4}>
                        <Input
                            type={"text"}
                            value={value}
                            onChange={e => setValue(e.target.value)}
                            placeholder={"Enter Boolean Expression ..."}
                        />
                        <InputRightElement>
                            <IconButton onClick={copyInputToClipBoard} icon={<CopyIcon/>}
                                        aria-label={"Copy expression to clipboard"}/>
                        </InputRightElement>
                    </InputGroup>

                    <Flex flexDir={"row"} flexWrap={"wrap"} justifyContent={"space-between"}>
                        {quickButtons.map(button => {
                            return <Button key={button} onClick={()=> setValue(value+button)}>{button}</Button>
                        })}
                    </Flex>
                </Flex>
                <Box>
                    {/*TODO Cheatsheat*/}
                </Box>
            </Grid>
        </div>
    )
        ;
}
