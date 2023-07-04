import {
    FormControl,
    FormLabel,
    Switch,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";
import { TableFormat } from "@/assets/Adapter";
import ParserError from "@/assets/model/ParserError";

interface CustomTableProps {
    tableData: TableFormat;
    setReversOrder: Function;
}

const CustomTable = ({ tableData, setReversOrder }: CustomTableProps) => {
    if (tableData instanceof ParserError || tableData.length === 0) {
        return;
    }

    // TODO: fix keys
    return (
        <>
            <TableContainer
                mx={"auto"}
                maxW={"90%"}
                display={"grid"}
                placeItems={"center"}
                fontSize={"lg"}
            >
                <Table colorScheme={"neutral"}>
                    <Thead>
                        <Tr>
                            {Object.entries(tableData[0]).map((column) => (
                                <Th
                                    key={column[0]}
                                    fontSize={"xl"}
                                    color={"neutral.200"}
                                    fontWeight={"extrabold"}
                                    textAlign={"center"}
                                >
                                    {column[0]}
                                </Th>
                            ))}
                        </Tr>
                    </Thead>
                    <Tbody>
                        {tableData.map((evaluation, index) => (
                            <Tr key={index}>
                                {Object.entries(evaluation).map((column, index) => (
                                    <Td key={index} textAlign={"center"}>
                                        {column[1] ? "T" : "F"}
                                    </Td>
                                ))}
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
            <FormControl display="flex" alignItems="center" justifyContent={"center"} mt="5">
                <FormLabel htmlFor="reverse-order" mb="0">
                    Reverse variable order
                </FormLabel>
                <Switch
                    colorScheme={"purple"}
                    id="reverse-order"
                    onChange={(e) => setReversOrder(e.target.checked)}
                />
            </FormControl>
        </>
    );
};

export default CustomTable;
