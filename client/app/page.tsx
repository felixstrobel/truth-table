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
import Insertion from "@/components/Insertion";

export default function Home() {
    return (
        <div className="w-screen min-h-screen overflow-hidden bg-gray-900">
            <Flex wrap={"wrap"} minHeight={"100vh"} flexDirection={"column"}>
                <Header/>

                <Insertion/>

                <Footer/>
            </Flex>
        </div>
    );
}
