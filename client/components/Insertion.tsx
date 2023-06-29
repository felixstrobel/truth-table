import {
    Button,
    Flex,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Tooltip,
} from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import CustomSelect from "@/components/CustomSelect";
import { evaluate, TableFormat } from "@/assets/Adapter";
import ParserError from "@/assets/model/ParserError";

interface InsertionProps {
    onChange: Function;
}

const Insertion = ({ onChange }: InsertionProps) => {
    const [value, setValue] = useState<string>("");
    const [infoMessage, setInfoMessage] = useState("");

    const quickButtons = ["¬", "∧", "⊼", "∨", "⊽", "→", "↔", "↮", "(", ")", ",", "A", "B", "C"];

    const copyInputToClipBoard = () => {
        navigator.clipboard.writeText(value).catch((e) => console.log(e));
    };

    useEffect(() => {
        const data = evaluate(value);

        if (data instanceof ParserError) {
            setInfoMessage(data.message);
        } else {
            setInfoMessage("No expression entered");
            onChange(data);
        }
    }, [value]);

    return (
        <Stack w={"full"} py={20} alignItems={"center"}>
            <InputGroup
                colorScheme={"neutral"}
                borderColor={"neutral.400"}
                _dark={{ borderColor: "whiteAlpha.300" }}
                w={"70%"}
                size={"lg"}
                mb={4}
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
