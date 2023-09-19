import { ReactNode, useEffect, useReducer, useState } from "react";
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
    useDisclosure,
} from "@chakra-ui/react";
import { CopyIcon, QuestionOutlineIcon } from "@chakra-ui/icons";
import CustomSelect from "@/components/CustomSelect";
import { evaluate } from "@/assets/Adapter";
import ParserError from "@/assets/model/ParserError";
import HelpModal from "@/components/HelpModal";
interface InputProps {
    onChange: Function;
    reversOrder: boolean;
}

const InputSection = ({ onChange, reversOrder }: InputProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [infoMessage, setInfoMessage] = useState<ReactNode>(<span></span>);
    const [value, updateValue] = useReducer(
        (state: string, action: { setValue?: string; quickButtonAction?: string }): string => {
            let newValue = "";
            if (action.setValue !== undefined) {
                newValue = action.setValue;
            } else if (action.quickButtonAction === "DEL") {
                newValue = state.substring(0, state.length - 1);
            } else if (action.quickButtonAction) {
                newValue = state + action.quickButtonAction;
            }

            window.localStorage.setItem("input", newValue);
            return newValue;
        },
        ""
    );

    useEffect(() => {
        const urlParamValue = new URLSearchParams(window.location.search).get("input");
        const storageLocationValue = window.localStorage.getItem("input");

        updateValue({ setValue: urlParamValue ?? storageLocationValue ?? "" });
    }, []);

    const quickButtons = [
        "¬",
        "∧",
        "⊼",
        "∨",
        "⊽",
        "→",
        "↔",
        "⇹",
        "(",
        ")",
        ",",
        "0",
        "1",
        "A",
        "B",
        "C",
        "DEL",
    ];

    const copyInputToClipBoard = () => {
        navigator.clipboard.writeText(value).catch((e) => console.log(e));
    };

    useEffect(() => {
        const data = evaluate(value, reversOrder);

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
    }, [value, onChange, reversOrder]);

    return (
        <Stack my={{ base: 10, lg: 20 }} alignItems={"center"}>
            <Stack w={{ base: "full", md: "85%", lg: "70%" }} direction={"row"}>
                <InputGroup
                    flex={1}
                    borderColor={"neutral.400"}
                    _dark={{ borderColor: "whiteAlpha.300" }}
                    size={"lg"}
                >
                    <Input
                        type={"text"}
                        value={value}
                        placeholder={"Enter Boolean Expression ..."}
                        onChange={(e) => updateValue({ setValue: e.target.value })}
                        variant={"filled"}
                        colorScheme={"neutral"}
                        letterSpacing={2}
                        focusBorderColor={"purple.400"}
                    />
                    <InputRightElement>
                        <Tooltip
                            hasArrow
                            openDelay={800}
                            placement={"top"}
                            label={"Copy expression"}
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

                <Tooltip
                    hasArrow
                    openDelay={800}
                    placement={"top"}
                    label={"Show syntax"}
                    borderRadius={"md"}
                >
                    <IconButton
                        size={"lg"}
                        variant={"ghost"}
                        backgroundColor={"whiteAlpha.50"}
                        onClick={onOpen}
                        icon={<QuestionOutlineIcon boxSize={5} />}
                        aria-label={"Show language specifications"}
                    />
                </Tooltip>

                <HelpModal open={isOpen} onClose={onClose} />
            </Stack>

            <Box h={6}>
                <Text color={"neutral.500"} fontSize={"lg"} fontWeight={"bold"}>
                    {infoMessage}
                </Text>
            </Box>

            <Flex flexDirection={"row"} flexWrap={"wrap"} justifyContent={"center"}>
                {quickButtons.map((buttonText) => {
                    return (
                        <Button
                            colorScheme={"neutral"}
                            variant={"outline"}
                            w={12}
                            h={12}
                            m={2}
                            key={buttonText}
                            fontSize={"lg"}
                            onClick={() => updateValue({ quickButtonAction: buttonText })}
                        >
                            {buttonText}
                        </Button>
                    );
                })}
                {/*<CustomSelect />*/}
            </Flex>
        </Stack>
    );
};

export default InputSection;
