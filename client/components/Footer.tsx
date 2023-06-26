"use client";

import { colors } from "@/constants/colors";
import { Box, Container, Flex, SimpleGrid, Stack, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";

export default function Footer() {
    return (
        <Box bg={"brand.100"} color={useColorModeValue(...colors.footerColor)} width={"full"}>
            <Container as={Stack} maxW={"100%"} py={5}>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
                    <Container textAlign={"center"}>
                        <a href="https://www.paypal.com/donate/?hosted_button_id=FMWQ2NMB943BA">
                            Buy us a coffee
                        </a>
                    </Container>
                    <Container textAlign={"center"}>Proudly provided by Felix ∧ Max</Container>
                    <Container textAlign={"center"}>Feel free to leave some feedback!</Container>
                </SimpleGrid>
            </Container>

            <Container py={5}>
                <Flex justifyContent={"center"}>
                    <Link href="https://www.paypal.com/donate/?hosted_button_id=FMWQ2NMB943BA">
                        Imprint
                    </Link>
                    <span>&nbsp;&copy; {new Date().getFullYear()}</span>
                </Flex>
            </Container>
        </Box>
    );
}

/**
 *
 return (
 <footer>
 <div>
 <div>{}</div>
 <address className='flex flex-row'>
 <span>Proudly provided by</span>
 <span>
 <ato:webmaster@example.com'>Felix Strobel</a> &and;
 <ato:webmaster@example.com'>Max Lohrmann</ato:webmaster@example.com>
 </span>
 </address>
 <div>{}</div>
 </div>
 <span>
 <aMPRINT</a>
 </span>
 </footer>
 );
 */
