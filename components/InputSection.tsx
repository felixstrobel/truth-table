import {
    IconButton,
    Input,
    InputGroup,
    InputRightAddon,
    InputRightElement,
    Stack,
    Tooltip,
    useDisclosure,
} from "@chakra-ui/react";
import { CloseIcon, CopyIcon, QuestionOutlineIcon } from "@chakra-ui/icons";
import HelpModal from "@/components/HelpModal";

interface InputProps {
    input: string;
    setInput: any;
}

const InputSection = ({ input, setInput }: InputProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const copyInputToClipBoard = () => {
        navigator.clipboard.writeText(input).catch((e) => console.log(e));
    };

    const clearInput = () => setInput("");

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
                        value={input}
                        placeholder={"Enter Boolean Expression ..."}
                        onChange={(e) => {
                            setInput(e.target.value);
                        }}
                        variant={"filled"}
                        colorScheme={"neutral"}
                        letterSpacing={2}
                        focusBorderColor={"purple.400"}
                    />
                    <InputRightElement>
                        {input != "" && (
                            <Tooltip
                                hasArrow
                                openDelay={800}
                                placement={"top"}
                                label={"Clear input"}
                                borderRadius={"md"}
                            >
                                <IconButton
                                    variant={"ghost"}
                                    colorScheme={"neutral"}
                                    onClick={clearInput}
                                    icon={<CloseIcon />}
                                    aria-label={"Clear the input field"}
                                />
                            </Tooltip>
                        )}
                    </InputRightElement>
                    <InputRightAddon>
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
                    </InputRightAddon>
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
        </Stack>
    );
};

export default InputSection;
