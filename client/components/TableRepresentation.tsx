import {Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, useColorModeValue} from "@chakra-ui/react";
import {colors} from "@/constants/colors";

export default function TableRepresentation() {
	// TODO: get data from parser
	const data = [
		{A: false, B: false, C: false, "(A∧B)∨C": false},
		{A: false, B: false, C: true, "(A∧B)∨C": true},
		{A: false, B: true, C: false, "(A∧B)∨C": false},
		{A: false, B: true, C: true, "(A∧B)∨C": true},
		{A: true, B: false, C: false, "(A∧B)∨C": false},
		{A: true, B: false, C: true, "(A∧B)∨C": true},
		{A: true, B: true, C: false, "(A∧B)∨C": true},
		{A: true, B: true, C: true, "(A∧B)∨C": true},
	];

	// TODO: fix keys
	return (
		<TableContainer mx={"auto"} maxW={"90%"} display={"grid"} placeItems={"center"} fontSize={"lg"}>
			<Table variant="simple">
				<Thead>
					<Tr>
						{Object.entries(data[0]).map((column) => (
							<Th
								key={column[0]}
								fontSize={"xl"}
								fontWeight={"extrabold"}
								color={useColorModeValue(...colors.bodyColor)}
								textAlign={"center"}
								borderColor={useColorModeValue(...colors.tableBorderColor)}
							>
								{column[0]}
							</Th>
						))}
					</Tr>
				</Thead>
				<Tbody>
					{data.map((evaluation, index) => (
						<Tr key={index}>
							{Object.entries(evaluation).map((column, index) => (
								<Td key={index} textAlign={"center"} borderColor={useColorModeValue(...colors.tableBorderColor)}>
									{column[1] ? "T" : "F"}
								</Td>
							))}
						</Tr>
					))}
				</Tbody>
			</Table>
		</TableContainer>
	);
}
