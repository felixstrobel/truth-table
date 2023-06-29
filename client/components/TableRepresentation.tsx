import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { TableFormat } from "@/assets/Adapter";
import ParserError from "@/assets/model/ParserError";

const TableRepresentation = ({ tableData }: { tableData: TableFormat }) => {
    if (tableData instanceof ParserError || tableData.length === 0) {
        return;
    }

    // TODO: fix keys
    return (
        <TableContainer
            mx={"auto"}
            maxW={"90%"}
            display={"grid"}
            placeItems={"center"}
            fontSize={"lg"}
        >
            <Table variant="simple" colorScheme={"neutral"}>
                <Thead>
                    <Tr>
                        {Object.entries(tableData[0]).map((column) => (
                            <Th
                                key={column[0]}
                                fontSize={"xl"}
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
    );
};

export default TableRepresentation;
