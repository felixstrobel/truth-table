"use client";
import Header from "@/components/Header";
import { Flex, useColorModeValue } from "@chakra-ui/react";
import Footer from "@/components/Footer";
import Insertion from "@/components/Insertion";
import { colors } from "@/constants/colors";

export default function Home() {
  return (
    <Flex
      width={"100vw"}
      minH={"100vh"}
      overflow={"hidden"}
      backgroundColor={useColorModeValue(...colors.bodyBg)}
      color={useColorModeValue(...colors.bodyColor)}
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
