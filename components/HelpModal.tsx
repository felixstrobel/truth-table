import {
    Code,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Stack,
    Table,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";

const HelpModal = (props: { open: boolean; onClose: () => void }) => {
    return (
        <Modal size={"6xl"} isOpen={props.open} onClose={props.onClose}>
            <ModalOverlay />
            <ModalContent p={4} _dark={{ backgroundColor: "neutral.900" }}>
                <ModalHeader>Input Syntax</ModalHeader>
                <ModalCloseButton />
                <ModalBody color={"neutral.50"}>
                    Here you can see which connectives we support and how you can enter them.
                    <Table colorScheme={"neutral"} m={4} size={"md"}>
                        <Thead>
                            <Tr>
                                <Th color={"neutral.200"}>Operator</Th>
                                <Th color={"neutral.200"}>Unicode</Th>
                                <Th color={"neutral.200"}>Alternatives</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>Negation</Td>
                                <Td>¬</Td>
                                <Td>!, ~</Td>
                            </Tr>
                            <Tr>
                                <Td>Conjunction</Td>
                                <Td>∧</Td>
                                <Td>&amp;, &amp;&amp;</Td>
                            </Tr>
                            <Tr>
                                <Td>NAND</Td>
                                <Td>⊼</Td>
                                <Td>
                                    ¬∧, ¬&amp;, ¬&amp;&amp;, !∧, !&amp;, !&amp;&amp;, ~∧, ~&amp;,
                                    ~&amp;&amp;
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>Disjunction</Td>
                                <Td>∨</Td>
                                <Td>|, ||</Td>
                            </Tr>
                            <Tr>
                                <Td>NOR</Td>
                                <Td>⊽</Td>
                                <Td>¬∨, ¬|, ¬||, !∨, !|, !||, ~∨, ~|, ~||</Td>
                            </Tr>
                            <Tr>
                                <Td>Conditional</Td>
                                <Td>→</Td>
                                <Td>&gt;, -&gt;, =&gt;</Td>
                            </Tr>
                            <Tr>
                                <Td>Biconditional</Td>
                                <Td>↔</Td>
                                <Td>=, ==, &lt;&gt;, &lt;=&gt;, &lt;-&gt;</Td>
                            </Tr>
                            <Tr>
                                <Td>Exclusive Disjunction</Td>
                                <Td>⇹</Td>
                                <Td>!=, &lt;!&gt;, &lt;!=&gt;</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                    <Stack direction={"row"} alignItems={"center"}>
                        <Text>
                            You can also enter{" "}
                            <Text as={"span"} fontWeight={"bold"}>
                                multiple expressions
                            </Text>{" "}
                            by entering them comma separated:
                        </Text>
                        <Code p={1}>A∧B,A∨B</Code>
                    </Stack>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default HelpModal;
