import { Button, Flex } from "@chakra-ui/react";

interface ExpressionInputQuickButtonsProps {
    inputModifier: any;
}

const ExpressionInputQuickButtons = ({ inputModifier }: ExpressionInputQuickButtonsProps) => {
    const buttons = [
        "¬",
        "∧",
        "⊼",
        "∨",
        "⊽",
        "→",
        "↔",
        "⇹",
        "(",
        ")",
        ",",
        "0",
        "1",
        "A",
        "B",
        "C",
        "DEL",
    ];

    return (
        <Flex flexDirection={"row"} flexWrap={"wrap"} justifyContent={"center"}>
            {buttons.map((buttonText: string) => {
                return (
                    <Button
                        colorScheme={"neutral"}
                        variant={"outline"}
                        w={12}
                        h={12}
                        m={2}
                        key={buttonText}
                        fontSize={"lg"}
                        onClick={() => inputModifier(buttonText)}
                    >
                        {buttonText}
                    </Button>
                );
            })}
            {/*<CustomSelect />*/}
        </Flex>
    );
};

export default ExpressionInputQuickButtons;
