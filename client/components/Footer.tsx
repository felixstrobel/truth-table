"use client";
import { Box, Button, Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

const Footer = () => {
    return (
        <Box as={"footer"} w={"full"} mt={20} mb={4}>
            <Grid templateColumns={"1fr 1fr 1fr"}>
                <GridItem justifySelf={"start"}>
                    <Text>Do you like what you see? Buy us a drink!</Text>
                    <Button
                        size={"sm"}
                        as={Link}
                        href={"https://www.paypal.com/donate/?hosted_button_id=FMWQ2NMB943BA"}
                    >
                        Donate 🍹
                    </Button>
                </GridItem>
                <GridItem justifySelf={"center"}>
                    <Text>Proudly provided by Felix ∧ Max</Text>
                </GridItem>
                <GridItem justifySelf={"end"}>
                    <Text>Feel free to leave some feedback!</Text>
                </GridItem>
            </Grid>
            <Stack direction={"row"} justifyContent={"center"}>
                {/* TODO: Add legal notice and refer to it */}
                <Link href="">Legal Notice</Link>
                <Text>&copy; {new Date().getFullYear()}</Text>
            </Stack>
        </Box>
    );
};

export default Footer;
