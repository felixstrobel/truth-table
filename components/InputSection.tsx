import { ReactNode, useEffect, useReducer, useState } from "react";
import {
    Box,
    Button,
    Flex,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Stack,
    Table,
    Tbody,
    Text,
    Th,
    Thead,
    Tooltip,
    Tr,
    Td,
    useDisclosure,
} from "@chakra-ui/react";
import { CopyIcon, QuestionOutlineIcon } from "@chakra-ui/icons";
import CustomSelect from "@/components/CustomSelect";
import { evaluate } from "@/assets/Adapter";
import ParserError from "@/assets/model/ParserError";

interface InputProps {
    onChange: Function;
}

const InputSection = ({ onChange }: InputProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [infoMessage, setInfoMessage] = useState<ReactNode>(<span></span>);
    const [value, updateValue] = useReducer(
        (state: string, action: { setValue?: string; quickButtonAction?: string }): string => {
            if (action.setValue) {
                return action.setValue;
            }
            if (action.quickButtonAction === "DEL") {
                return state.substring(0, state.length - 1);
            }
            if (action.quickButtonAction) {
                return state + action.quickButtonAction;
            }
            return "";
        },
        ""
    );

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
        "A",
        "B",
        "C",
        "DEL",
    ];

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
                    />
                    <InputRightElement>
                        <Tooltip
                            hasArrow
                            openDelay={800}
                            placement={"top"}
                            label={"copy expression"}
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

                <IconButton
                    size={"lg"}
                    onClick={onOpen}
                    icon={<QuestionOutlineIcon boxSize={5} />}
                    aria-label={"show language specifications"}
                />

                {/* Modal to display language specifications */}
                <Modal size={"3xl"} isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Input Syntax</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            Here you can see which symbols we support and how you can enter one or
                            more expressions.
                            <Table>
                                <Thead>
                                    <Tr>
                                        <Th>Operator</Th>
                                        <Th>Unicode</Th>
                                        <Th>Alternatives</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>Negation</Td>
                                        <Td>¬</Td>
                                        <Td>!, ~</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Conjunction</Td>
                                        <Td>∧</Td>
                                        <Td>&amp;, &amp;&amp;</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>NAND</Td>
                                        <Td>⊼</Td>
                                        <Td>
                                            ¬∧, ¬&amp;, ¬&amp;&amp;, !∧, !&amp;, !&amp;&amp;, ~∧,
                                            ~&amp;, ~&amp;&amp;
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Disjunction</Td>
                                        <Td>∨</Td>
                                        <Td>\|, \|\|</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>NOR</Td>
                                        <Td>⊽</Td>
                                        <Td>¬∨, ¬|, ¬||, !∨, !|, !||, ~∨, ~|, ~||</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Conditional</Td>
                                        <Td>→</Td>
                                        <Td>&gt;, -&gt;, =&gt;</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Biconditional</Td>
                                        <Td>↔</Td>
                                        <Td>=, ==, &lt;&gt;, &lt;=&gt;, &lt;-&gt;</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Exclusive Disjunction</Td>
                                        <Td>⇹</Td>
                                        <Td>!=, &lt;!&gt;, &lt;!=&gt;</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </Stack>

            <Box h={6}>
                <Text color={"neutral.500"} fontSize={"lg"} fontWeight={"semibold"}>
                    {infoMessage}
                </Text>
            </Box>

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
                            fontSize={"lg"}
                            onClick={() => updateValue({ quickButtonAction: buttonText })}
                        >
                            {buttonText}
                        </Button>
                    );
                })}
                <CustomSelect />
            </Flex>
        </Stack>
    );
};

export default InputSection;
