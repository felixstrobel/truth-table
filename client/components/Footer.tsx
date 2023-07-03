"use client";
import { Box, Button, Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

const Footer = () => {
    return (
        <Box as={"footer"} w={"full"} mt={20} mb={4}>
            <Grid
                templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }}
                templateRows={{ base: "4fr 1.5fr 1.5fr 1fr", md: "2fr 1fr" }}
                gap={{ base: "0em", md: "2em" }}
            >
                <GridItem
                    justifySelf={{ base: "center", md: "start" }}
                    textAlign={{ base: "center", md: "left" }}
                >
                    <Stack alignItems={{ base: "center", md: "start" }}>
                        <Text>Do you like what you see? Buy us a drink!</Text>
                        <Button
                            mt={2}
                            p={6}
                            w={"36"}
                            size={"md"}
                            as={Link}
                            href={"https://www.paypal.com/donate/?hosted_button_id=FMWQ2NMB943BA"}
                            bgGradient={"linear(to-br, pink.300, purple.800)"}
                        >
                            Donate{" "}
                            <Text ml={2} fontSize={"lg"}>
                                🍹
                            </Text>
                        </Button>
                    </Stack>
                </GridItem>
                <GridItem
                    // colSpan={{ base: 1, md: 2 }}
                    // pt={2}
                    justifySelf={"center"}
                    alignSelf={"start"}
                    textAlign={"center"}
                >
                    <Text fontSize={"lg"} fontWeight={"bold"}>
                        Proudly provided by Felix ∧ Max
                    </Text>
                </GridItem>
                <GridItem
                    justifySelf={{ base: "center", md: "end" }}
                    alignSelf={{ base: "center", md: "start" }}
                    textAlign={{ base: "center", md: "right" }}
                >
                    <Text>Feel free to leave some feedback!</Text>
                </GridItem>
                <GridItem colSpan={{ base: 1, md: 3 }} justifySelf={"center"} alignSelf={"end"}>
                    <Stack mt={4} direction={"row"} justifyContent={"center"} fontSize={"sm"}>
                        <Link href="/legal-notice">Legal Notice</Link>
                        <Text>&copy; {new Date().getFullYear()}</Text>
                    </Stack>
                </GridItem>
            </Grid>
        </Box>
    );
};

export default Footer;
