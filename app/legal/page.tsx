"use client";
import CustomLink from "@/components/CustomLink";
import Footer from "@/components/Footer";
import { Text, Button, Heading, Flex, Box } from "@chakra-ui/react";
import { useState } from "react";

type Language = "DE" | "EN";

const LegalNotice = () => {
    const [language, setLanguage] = useState<Language>("DE");

    if (language === "DE") {
        return (
            <Flex
                mx={"auto"}
                px={{ base: "4", sm: "6", lg: "8" }}
                maxW={"8xl"}
                minH={"100vh"}
                flexDirection={"column"}
            >
                <Box flexGrow={1}>
                    <Box>
                        <Button onClick={() => setLanguage("EN")}>
                            Click here to change to the English version
                        </Button>
                    </Box>

                    <Heading as={"h1"}>Impressum</Heading>

                    <Box>
                        <Heading>Angaben gemäß § 5 TMG</Heading>
                        <Text>Max Lohrmann</Text>
                        <Text>Reithohl 1a</Text>
                        <Text>76229 Karlsruhe</Text>
                    </Box>

                    <Box>
                        <Heading>Kontakt</Heading>
                        <CustomLink href="tel:+4971134160675">Telefon: +49 711 34160675</CustomLink>
                        <Text>Telefax: +49 711 95338338</Text>
                        <CustomLink href="mailto:mail@truth-table.com">
                            E-Mail: mail@truth-table.com
                        </CustomLink>
                    </Box>
                </Box>

                <Footer />
            </Flex>
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
                    <Box>
                        <Button onClick={() => setLanguage("DE")}>
                            Klicken Sie hier, um zur deutschen Version zu wechseln
                        </Button>
                    </Box>

                    <Heading as={"h1"}>Legal Notice</Heading>

                    <Box>
                        <Heading>
                            This Legal Notice complies with the German laws under § 5 TMG and § 55
                            RStV
                        </Heading>
                        <Text>Max Lohrmann</Text>
                        <Text>Reithohl 1a</Text>
                        <Text>76229 Karlsruhe</Text>
                    </Box>

                    <Box>
                        <Heading>Contact</Heading>
                        <CustomLink href="tel:+4971134160675">Phone: +49 711 34160675</CustomLink>
                        <Text>Fax: +49 711 95338338</Text>
                        <CustomLink href="mailto:mail@truth-table.com">
                            E-Mail: mail@truth-table.com
                        </CustomLink>
                    </Box>
                </Box>

                <Footer />
            </Flex>
        );
    }
};

export default LegalNotice;
