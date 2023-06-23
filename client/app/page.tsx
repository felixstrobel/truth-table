"use client";
import Header from "@/components/Header";
import {Flex, Box} from "@chakra-ui/react";
import Footer from "@/components/Footer";
import Insertion from "@/components/Insertion";

export default function Home() {
	return (
		<Flex
			width={"100vw"}
			minH={"100vh"}
			overflow={"hidden"}
			backgroundColor={"#282a2e"}
			wrap={"wrap"}
			minHeight={"100vh"}
			flexDirection={"column"}
		>
			<Header />

			<Insertion />

			<Footer />
		</Flex>
	);
}
