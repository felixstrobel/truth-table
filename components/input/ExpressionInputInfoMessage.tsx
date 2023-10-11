import { Box, Text } from "@chakra-ui/react";
import { TableFormat } from "@/assets/Adapter";
import { ReactNode, useEffect, useState } from "react";
import ParserError from "@/assets/model/ParserError";

interface ExpressionInputInfoMessageProps {
    evaluatedExpression: TableFormat;
}

const ExpressionInputInfoMessage = ({ evaluatedExpression }: ExpressionInputInfoMessageProps) => {
    const [message, setMessage] = useState<ReactNode>(null);

    useEffect(() => {
        if (evaluatedExpression instanceof ParserError) {
            if (!evaluatedExpression.position) {
                setMessage(<span>{evaluatedExpression.message}</span>);
                return;
            }

            setMessage(
                <span>
                    {evaluatedExpression.message +
                        ": " +
                        evaluatedExpression.input.slice(0, evaluatedExpression.position)}
                    <Text as={"span"} color={"red.400"}>
                        {evaluatedExpression.input.slice(
                            evaluatedExpression.position,
                            evaluatedExpression.position + 1
                        )}
                    </Text>
                    {evaluatedExpression.input.slice(
                        evaluatedExpression.position + 1,
                        evaluatedExpression.input.length
                    )}
                </span>
            );
        }
    }, [evaluatedExpression]);

    return (
        <Box h={6}>
            <Text color={"neutral.500"} fontSize={"lg"} fontWeight={"bold"}>
                {message}
            </Text>
        </Box>
    );
};

export default ExpressionInputInfoMessage;
