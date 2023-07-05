"use client";
import { Box, Button, Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import CustomLink from "./CustomLink";

const Footer = () => {
    return (
        <Box as={"footer"} w={"full"} mt={20} mb={8}>
            <Grid
                templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }}
                templateRows={{ base: "3fr 1.5fr 1.5fr 1fr", md: "2fr 1fr" }}
                columnGap={{ base: "0em", md: "2em" }}
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
                            color={"whiteAlpha.900"}
                            as={Link}
                            target="_blank"
                            rel="nofollow noopener"
                            href={"https://www.paypal.com/donate/?hosted_button_id=FMWQ2NMB943BA"}
                            bgGradient={"linear(to-br, pink.300, purple.800)"}
                            _hover={{ bgGradient: "linear(to-br, pink.400, purple.900)" }}
                        >
                            Donate{" "}
                            <Text ml={2} fontSize={"lg"}>
                                🍹
                            </Text>
                        </Button>
                    </Stack>
                </GridItem>
                <GridItem
                    justifySelf={"center"}
                    alignSelf={{ base: "center", md: "start" }}
                    textAlign={"center"}
                    gridRow={{ base: "3 / 4", md: "auto" }}
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
                    <CustomLink href={"mailto:mail@truth-table.com"} target={"_blank"}>
                        Click here to leave some feedback!
                    </CustomLink>
                </GridItem>
                <GridItem colSpan={{ base: 1, md: 3 }} justifySelf={"center"} alignSelf={"end"}>
                    <Stack mt={4} direction={"row"} justifyContent={"center"} fontSize={"sm"}>
                        <CustomLink href="/legal">Legal Notice</CustomLink>
                        <Text>&copy; {new Date().getFullYear()} All rights reserved.</Text>
                    </Stack>
                </GridItem>
            </Grid>
        </Box>
    );
};

export default Footer;
