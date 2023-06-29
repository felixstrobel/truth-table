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
import TableRepresentation from "@/components/TableRepresentation";
import { evaluate, TableFormat } from "@/assets/Evaluater";

export default function Insertion() {
    const [value, setValue] = useState<string>("");
    const [tableData, setTableData] = useState<TableFormat>([]);
    const quickButtons = ["¬", "∧", "⊼", "∨", "⊽", "→", "↔", "↮", "(", ")", ",", "A", "B", "C"];

    const copyInputToClipBoard = () => {
        navigator.clipboard.writeText(value).catch(e => console.log(e));
    };

    useEffect(() => setTableData(evaluate(value)), [value]);

    return (
        <Flex
            flexWrap={"wrap"}
            flexDirection={"column"}
            alignContent={"center"}
            justifyContent={"space-evenly"}
            flexGrow={1}
        >
            <Stack w={"70%"} alignItems={"center"}>
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
                        onChange={e => setValue(e.target.value)}
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

                {/*TODO fix flex wrap*/}
                <Flex w={"full"} flexDir={"row"} flexWrap={"wrap"} justifyContent={"center"}>
                    {quickButtons.map(button => {
                        return (
                            <Button
                                colorScheme={"neutral"}
                                variant={"ghost"}
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
                    <CustomSelect />
                </Flex>
            </Stack>
            <TableRepresentation tableData={tableData} />
        </Flex>
    );
}
