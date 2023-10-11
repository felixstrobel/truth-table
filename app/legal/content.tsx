"use client";

import CustomLink from "@/components/CustomLink";
import Footer from "@/components/layout/Footer";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";

type Language = "DE" | "EN";

const LegalNoticeContent = () => {
    const [language, setLanguage] = useState<Language>("DE");

    if (language === "DE") {
        return (
            <div className="flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex-grow">
                    <Button mt={4} mb={12} onClick={() => setLanguage("EN")}>
                        Click here to change to the English version
                    </Button>

                    <Heading mb={8} as={"h1"}>
                        Impressum
                    </Heading>

                    <Heading mb={2} as={"h2"}>
                        Angaben gemäß § 5 TMG
                    </Heading>
                    <Text>Max Lohrmann</Text>
                    <Text>Reithohl 1a</Text>
                    <Text>76229 Karlsruhe, Deutschland</Text>

                    <Heading mt={4} mb={2}>
                        Kontakt
                    </Heading>
                    <CustomLink href="tel:+4971134160675" target={"_blank"}>
                        Telefon: +49 711 34160675
                    </CustomLink>
                    <Text>Telefax: +49 711 95338338</Text>
                    <CustomLink href="mailto:mail@truth-table.com" target={"_blank"}>
                        E-Mail: mail@truth-table.com
                    </CustomLink>
                </div>

                <Footer />
            </div>
        );
    } else {
        return (
            <Flex
                mx={"auto"}
                px={{ base: "4", sm: "6", lg: "8" }}
                maxW={"8xl"}
                minH={"100vh"}
                flexDirection={"column"}
            >
                <Box flexGrow={1}>
                    <Button mt={4} mb={12} onClick={() => setLanguage("DE")}>
                        Klicken Sie hier, um zur deutschen Version zu wechseln
                    </Button>

                    <Heading mb={8} as={"h1"}>
                        Legal Notice
                    </Heading>

                    <Heading mb={2} as={"h2"}>
                        This Legal Notice complies with the German laws under § 5 TMG and § 55 RStV
                    </Heading>
                    <Text>Max Lohrmann</Text>
                    <Text>Reithohl 1a</Text>
                    <Text>76229 Karlsruhe, Germany</Text>

                    <Heading mt={4} mb={2}>
                        Contact
                    </Heading>
                    <CustomLink href="tel:+4971134160675" target={"_blank"}>
                        Phone: +49 711 34160675
                    </CustomLink>
                    <Text>Fax: +49 711 95338338</Text>
                    <CustomLink href="mailto:mail@truth-table.com" target={"_blank"}>
                        E-Mail: mail@truth-table.com
                    </CustomLink>
                </Box>

                <Footer />
            </Flex>
        );
    }
};

export default LegalNoticeContent;
