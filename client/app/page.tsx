"use client";
import Header from "@/components/Header";
import { Flex, Spacer } from "@chakra-ui/react";
import Footer from "@/components/Footer";
import Insertion from "@/components/Insertion";
import TableRepresentation from "@/components/TableRepresentation";
import { useState } from "react";
import { TableFormat } from "@/assets/Evaluater";

const Home = () => {
    const [tableData, setTableData] = useState<TableFormat>([]);

    return (
        <Flex
            mx={"auto"}
            px={{ base: "4", sm: "6", lg: "8" }}
            maxW={"7xl"}
            h={"100vh"}
            flexDirection={"column"}
            overflow={"hidden"}
        >
            <Header />

            {/* Main Section*/}
            <Insertion onChange={setTableData} />
            <TableRepresentation tableData={tableData} />

            <Spacer />
            <Footer />
        </Flex>
    );
};

export default Home;
