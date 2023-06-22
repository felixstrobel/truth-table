import {Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";

export default function TableRepresentation() {

    // TODO: get data from parser
    const data = [
        {A: false, B: false, C: false, '=': false},
        {A: false, B: false, C: true, '=': true},
        {A: false, B: true, C: false, '=': false},
        {A: false, B: true, C: true, '=': true},
        {A: true, B: false, C: false, '=': false},
        {A: true, B: false, C: true, '=': true},
        {A: true, B: true, C: false, '=': true},
        {A: true, B: true, C: true, '=': true}
    ];

    // TODO: fix keys
    return <TableContainer mx={"auto"} w={"80%"} display={"grid"} placeItems={"center"} fontSize={"lg"}>
        <Table variant='simple'>
            <Thead>
                <Tr>
                    {Object.entries(data[0]).map(column => <Th fontSize={"xl"} fontWeight={"extrabold"}
                                                               key={column[0]}>{column[0]}</Th>)}
                </Tr>
            </Thead>
            <Tbody>
                {data.map(evaluation =>
                    <Tr key={evaluation}>
                        {Object.entries(evaluation).map(column => <Td>{column[1] ? "1" : "0"}</Td>
                        )}
                    </Tr>
                )}
            </Tbody>
        </Table>
    </TableContainer>
}