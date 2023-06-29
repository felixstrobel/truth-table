import {
    Box,
    Button,
    Flex,
    Heading,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Text,
    Tooltip,
} from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";
import { ReactChildren, ReactNode, useEffect, useState } from "react";
import CustomSelect from "@/components/CustomSelect";
import { evaluate, TableFormat } from "@/assets/Adapter";
import ParserError from "@/assets/model/ParserError";

interface InsertionProps {
    onChange: Function;
}

const Insertion = ({ onChange }: InsertionProps) => {
    const [value, setValue] = useState<string>("");
    const [infoMessage, setInfoMessage] = useState<ReactNode>(<span></span>);

    const quickButtons = ["¬", "∧", "⊼", "∨", "⊽", "→", "↔", "↮", "(", ")", ",", "A", "B", "C"];

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
        <Stack w={"full"} py={20} alignItems={"center"}>
            <InputGroup
                colorScheme={"neutral"}
                borderColor={"neutral.400"}
                _dark={{ borderColor: "whiteAlpha.300" }}
                w={"70%"}
                size={"lg"}
            >
                <Input
                    colorScheme={"neutral"}
                    type={"text"}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder={"Enter Boolean Expression ..."}
                />
                <InputRightElement>
                    <Tooltip
                        colorScheme={"neutral"}
                        hasArrow
                        label={"copy expression"}
                        borderRadius={"lg"}
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

            <Box h={6}>
                <Text color={"neutral.700"} fontSize={"sm"} fontWeight={"semibold"}>
                    {infoMessage}
                </Text>
            </Box>

            {/* TODO: fix flex-wrap */}
            <Flex w={"full"} flexDir={"row"} flexWrap={"wrap"} justifyContent={"center"}>
                {quickButtons.map((button) => {
                    return (
                        <Button
                            colorScheme={"neutral"}
                            variant={"outline"}
                            w={12}
                            h={12}
                            mr={4}
                            key={button}
                            onClick={() => setValue(value + button)}
                        >
                            {button}
                        </Button>
                    );
                })}
                <Button
                    colorScheme={"neutral"}
                    variant={"outline"}
                    w={12}
                    h={12}
                    mr={4}
                    onClick={() => setValue(value.substring(0, value.length - 1))}
                >
                    {"DEL"}
                </Button>
                <CustomSelect />
            </Flex>
        </Stack>
    );
};

export default Insertion;
