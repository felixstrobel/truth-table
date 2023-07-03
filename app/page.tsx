"use client";

import { useState } from "react";
import Header from "@/components/Header";
import { Flex, Spacer } from "@chakra-ui/react";
import Footer from "@/components/Footer";
import InputSection from "@/components/InputSection";
import CustomTable from "@/components/CustomTable";
import { TableFormat } from "@/assets/Adapter";

const Home = () => {
    const [tableData, setTableData] = useState<TableFormat>([]);

    return (
        <Flex
            mx={"auto"}
            px={{ base: "4", sm: "6", lg: "8" }}
            maxW={"8xl"}
            minH={"100vh"}
            flexDirection={"column"}
        >
            <Header />

            {/* Main Section*/}
            <InputSection onChange={setTableData} />
            <CustomTable tableData={tableData} />

            <Spacer />
            <Footer />
        </Flex>
    );
};

export default Home;