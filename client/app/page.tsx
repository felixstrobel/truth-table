"use client";
import Header from "@/components/Header";
import {
	Box,
	Button,
	Flex,
	Grid,
	IconButton,
	Input,
	InputGroup,
	InputRightElement,
	Select,
	Stack,
} from "@chakra-ui/react";
import {CopyIcon} from "@chakra-ui/icons";
import {useState} from "react";
import Footer from "@/components/Footer";

export default function Home() {
	const [value, setValue] = useState<string>("");
	const quickButtons = ["¬", "∧", "⊼", "∨", "⊽", "→", "↔", "↮", "(", ")", ",", "A", "B", "C"];

	const copyInputToClipBoard = () => {
		navigator.clipboard.writeText(value).catch((e) => console.log(e));
	};

	return (
		<div className="w-screen min-h-screen overflow-hidden bg-gray-900">
			<Flex wrap={"wrap"} minHeight={"100vh"} flexDirection={"column"}>
				<Header />

				<Grid placeItems={"center"} flexGrow={1}>
					<Stack w={"50%"}>
						<InputGroup size={"lg"} mb={4}>
							<Input
								type={"text"}
								value={value}
								onChange={(e) => setValue(e.target.value)}
								placeholder={"Enter Boolean Expression ..."}
							/>
							<InputRightElement>
								<IconButton
									onClick={copyInputToClipBoard}
									icon={<CopyIcon />}
									aria-label={"Copy expression to clipboard"}
								/>
							</InputRightElement>
						</InputGroup>

						{/*TODO fix flex wrap*/}
						<Flex flexDir={"row"} flexWrap={"wrap"} justifyContent={"space-between"}>
							{quickButtons.map((button) => {
								return (
									<Button key={button} onClick={() => setValue(value + button)}>
										{button}
									</Button>
								);
							})}
							<Select variant="filled" placeholder="Filled" />
						</Flex>
					</Stack>
					<Box>{/*TODO Cheatsheat*/}</Box>
				</Grid>

				<Footer />
			</Flex>
		</div>
	);
}
