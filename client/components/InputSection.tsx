import { ReactNode, useEffect, useState } from "react";
import {
    Box,
    Button,
    Flex,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Text,
    Tooltip,
} from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";
import CustomSelect from "@/components/CustomSelect";
import { evaluate } from "@/assets/Adapter";
import ParserError from "@/assets/model/ParserError";

interface InsertionProps {
    onChange: Function;
}

const InputSection = ({ onChange }: InsertionProps) => {
    const [value, setValue] = useState<string>("");
    const [infoMessage, setInfoMessage] = useState<ReactNode>(<span></span>);

    const quickButtons = ["¬", "∧", "⊼", "∨", "⊽", "→", "⇔", "↮", "(", ")", ",", "A", "B", "C"];

    const copyInputToClipBoard = () => {
        navigator.clipboard.writeText(value).catch((e) => console.log(e));
    };

    useEffect(() => {
        const data = evaluate(value);

        if (data instanceof ParserError) {
            if (!data.position) {
                setInfoMessage(<span>{data.message}</span>);
            } else {
                setInfoMessage(
                    <span>
                        {data.message + ": " + data.input.slice(0, data.position)}
                        <Text as={"span"} color={"red.400"}>
                            {data.input.slice(data.position, data.position + 1)}
                        </Text>
                        {data.input.slice(data.position + 1, data.input.length)}
                    </span>
                );
            }
            return;
        }

        onChange(data);
        setInfoMessage(null);
    }, [value, onChange]);

    return (
        <Stack my={{ base: 10, lg: 20 }} alignItems={"center"}>
            <InputGroup
                borderColor={"neutral.400"}
                _dark={{ borderColor: "whiteAlpha.300" }}
                w={{ base: "full", md: "85%", lg: "70%" }}
                size={"lg"}
            >
                <Input
                    type={"text"}
                    value={value}
                    placeholder={"Enter Boolean Expression ..."}
                    onChange={(e) => setValue(e.target.value)}
                    variant={"filled"}
                    colorScheme={"neutral"}
                    letterSpacing={2}
                />
                <InputRightElement>
                    <Tooltip
                        hasArrow
                        openDelay={800}
                        placement={"top"}
                        label={"copy expression"}
                        colorScheme={"neutral"}
                        borderRadius={"md"}
                    >
                        <IconButton
                            variant={"ghost"}
                            colorScheme={"neutral"}
                            onClick={copyInputToClipBoard}
                            icon={<CopyIcon />}
                            aria-label={"Copy expression to clipboard"}
                        />
                    </Tooltip>
                </InputRightElement>
            </InputGroup>

            {/* TODO: do it the correct way! You are awesome and more than able to to this task! I believe in you :) */}
            {/*<Box h={6}>*/}
            {/*    <Text color={"neutral.700"} fontSize={"sm"} fontWeight={"semibold"}>*/}
            {/*        {infoMessage}*/}
            {/*    </Text>*/}
            {/*</Box>*/}

            <Flex
                flexDirection={"row"}
                flexWrap={"wrap"}
                justifyContent={{ base: "center", md: "start" }}
            >
                {quickButtons.map((buttonText) => {
                    return (
                        <Button
                            colorScheme={"neutral"}
                            variant={"outline"}
                            w={12}
                            h={12}
                            m={2}
                            key={buttonText}
                            onClick={() => setValue(value + buttonText)}
                        >
                            {buttonText}
                        </Button>
                    );
                })}
                <Button
                    colorScheme={"neutral"}
                    variant={"outline"}
                    w={12}
                    h={12}
                    m={2}
                    onClick={() => setValue(value.substring(0, value.length - 1))}
                >
                    {"DEL"}
                </Button>
                <CustomSelect />
            </Flex>
        </Stack>
    );
};

export default InputSection;
