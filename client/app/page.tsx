"use client";
import Header from "@/components/Header";
import {Flex} from "@chakra-ui/react";
import Footer from "@/components/Footer";
import Insertion from "@/components/Insertion";
import TableRepresentation from "@/components/TableRepresentation";

export default function Home() {
    return (
        <div className="w-screen min-h-screen overflow-hidden bg-gray-900">
            <Flex wrap={"wrap"} minHeight={"100vh"} flexDirection={"column"}>
                <Header/>

                <Insertion/>
                <TableRepresentation />

                <Footer/>
            </Flex>
        </div>
    );
}
