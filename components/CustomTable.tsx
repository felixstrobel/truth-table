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
    Tooltip,
    Tr,
} from "@chakra-ui/react";
import { TableFormat } from "@/assets/Adapter";
import ParserError from "@/assets/model/ParserError";
import { useState, useEffect, useRef } from "react";

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
                            {Object.entries(tableData[0]).map((column) => {
                                return <TableHeaderCell key={column[0]} data={column} />;
                            })}
                        </Tr>
                    </Thead>
                    <Tbody>
                        {tableData.map((evaluation, index) => (
                            <Tr key={index}>
                                {Object.entries(evaluation).map((column, index) => (
                                    <Td key={index} textAlign={"center"}>
                                        {column[1].value ? "T" : "F"}
                                    </Td>
                                ))}
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
            <ReverseOrderSwitch setReversOrder={setReversOrder} />
        </>
    );
};

interface TableHeaderCellProps {
    data: any;
}
const TableHeaderCell = ({ data }: TableHeaderCellProps) => {
    const [copied, setCopied] = useState(false);
    const [currentTimeout, setCurrentTimeout] = useState<NodeJS.Timeout>();

    const onCopy = () => {
        setCopied(true);
        navigator.clipboard.writeText(data[0]).catch((e) => console.log(e));

        clearTimeout(currentTimeout);
        setCurrentTimeout(
            setTimeout(() => {
                console.log(false);
                setCopied(false);
            }, 1000)
        );
    };
    const onMouseLeave = () => {
        setCopied(false);
        clearTimeout(currentTimeout);
    };

    return (
        <Th
            fontSize={"xl"}
            color={"neutral.200"}
            fontWeight={"extrabold"}
            textAlign={"center"}
            cursor={"pointer"}
            onMouseLeave={onMouseLeave}
            onClick={onCopy}
        >
            {data[1].type === "expression" ? (
                <Tooltip
                    label={copied ? "Copied!" : "Click to copy expression"}
                    placement={"top"}
                    closeOnClick={false}
                    offset={[0, 15]}
                    hasArrow
                >
                    {data[0]}
                </Tooltip>
            ) : (
                <>{data[0]}</>
            )}
        </Th>
    );
};

interface ReverseOrderSwitchProps {
    setReversOrder: Function;
}
const ReverseOrderSwitch = ({ setReversOrder }: ReverseOrderSwitchProps) => {
    return (
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
    );
};

export default CustomTable;
