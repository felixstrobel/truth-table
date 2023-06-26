import {
	Box,
	Button,
	Flex,
	Grid,
	IconButton,
	Input,
	InputGroup,
	InputRightElement,
	Stack,
	Tooltip,
	useColorModeValue,
} from "@chakra-ui/react";
import {CopyIcon} from "@chakra-ui/icons";
import {useState} from "react";
import CustomSelect from "@/components/CustomSelect";
import TableRepresentation from "@/components/TableRepresentation";
import { colors } from "@/constants/colors";

export default function Insertion() {
	const [value, setValue] = useState<string>("");
	const quickButtons = ["¬", "∧", "⊼", "∨", "⊽", "→", "↔", "↮", "(", ")", ",", "A", "B", "C"];

	const copyInputToClipBoard = () => {
		navigator.clipboard.writeText(value).catch((e) => console.log(e));
	};

	return (
		<Flex
			flexWrap={"wrap"}
			flexDirection={"column"}
			alignContent={"center"}
			justifyContent={"space-evenly"}
			flexGrow={1}
		>
			<Stack w={"70%"} alignItems={"center"}>
				<InputGroup w={"70%"} size={"lg"} mb={4} borderColor={useColorModeValue(...colors.inputBorderColor)}>
					<Input
						type={"text"}
						value={value}
						onChange={(e) => setValue(e.target.value)}
						placeholder={"Enter Boolean Expression ..."}
					/>
					<InputRightElement>
						<Tooltip hasArrow label={"copy expression"} borderRadius={"lg"}>
							<IconButton
								variant={"ghost"}
								onClick={copyInputToClipBoard}
								icon={<CopyIcon />}
								aria-label={"Copy expression to clipboard"}
							/>
						</Tooltip>
					</InputRightElement>
				</InputGroup>

				{/*TODO fix flex wrap*/}
				<Flex w={"full"} flexDir={"row"} flexWrap={"wrap"} justifyContent={"center"}>
					{quickButtons.map((button) => {
						return (
							<Button
								variant={"outline"}
								w={12}
								h={12}
								mr={4}
								key={button}
								borderColor={useColorModeValue(...colors.inputBorderColor)}
								onClick={() => setValue(value + button)}
							>
								{button}
							</Button>
						);
					})}
					<CustomSelect />
				</Flex>
			</Stack>
			<TableRepresentation />
		</Flex>
	);
}
