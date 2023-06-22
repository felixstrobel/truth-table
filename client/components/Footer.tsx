"use client";

import {Box, Container, SimpleGrid, Stack, Flex, Spacer} from "@chakra-ui/react";
import Link from "next/link";

export default function Footer() {
	return (
		<Box bg="gray.700" color="gray.200" width={"full"} >
			<Container as={Stack} maxW={"100%"} py={5}>
				<SimpleGrid columns={{base: 1, sm: 2, md: 3}} spacing={8}>
					<Container textAlign={"center"}>
						<a href="https://www.paypal.com/donate/?hosted_button_id=FMWQ2NMB943BA">Buy us a coffee</a>
					</Container>
					<Container textAlign={"center"}>Proudly provided by Felix ∧ Max</Container>
					<Container textAlign={"center"}>Feel free to leave some feedback!</Container>
					{/* <Stack align={"flex-start"}>
							<p>Company</p>
							<p>About Us</p>
							<p>Blog</p>
							<p>Careers</p>
							<p>Contact Us</p>
						</Stack> */}
				</SimpleGrid>
			</Container>

			<Container pb={2} pt={5}>
				<Flex justifyContent={"center"}>
					<Link href="https://www.paypal.com/donate/?hosted_button_id=FMWQ2NMB943BA">Imprint</Link>
					<span>&nbsp;&copy; {new Date().getFullYear()}</span>
				</Flex>
			</Container>

			{/* <Box borderTopWidth={1} borderStyle={"solid"} borderColor={useColorModeValue("gray.200", "gray.700")}>
					<Container
						as={Stack}
						maxW={"6xl"}
						py={4}
						direction={{ base: "column", md: "row" }}
						spacing={4}
						justify={{ md: "space-between" }}
						align={{ md: "center" }}
					>
						<Text>© 2022 Chakra Templates. All rights reserved</Text>
						<Stack direction={"row"} spacing={6}>
							<SocialButton label={"Twitter"}>
								<FaTwitter />
							</SocialButton>
							<SocialButton label={"YouTube"}>
								<FaYoutube />
							</SocialButton>
							<SocialButton label={"Instagram"}>
								<FaInstagram />
							</SocialButton>
						</Stack>
					</Container>
				</Box> */}
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
