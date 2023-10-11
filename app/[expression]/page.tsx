"use client";

import CustomTable from "@/components/CustomTable";
import { useEffect, useState } from "react";
import { evaluate, TableFormat } from "@/assets/Adapter";
import ExpressionInputInfoMessage from "@/components/input/ExpressionInputInfoMessage";
import ExpressionInputQuickButtons from "@/components/input/ExpressionInputQuickButtons";
import ExpressionInput from "@/components/input/ExpressionInput";

const Page = ({ params: { expression } }: { params: { expression: string } }) => {
    const [evaluatedExpressionInTableFormat, setEvaluatedExpressionInTableFormat] =
        useState<TableFormat>([]);
    const [reverseOrder, setReverseOrder] = useState<boolean>(false);

    const [input, setInput] = useState<string>("");

    // Try to pre-input the expression by checking URL params and local storage.
    useEffect(() => {
        if (expression) {
            setInput(expression);
            return;
        }

        const storedInput = window.localStorage.getItem(process.env.LOCAL_STORAGE_INPUT_KEY!);
        if (!storedInput) return;

        if (storedInput.length > parseInt(process.env.MAX_INPUT_LENGTH!)) {
            console.info(process.env.MAX_INPUT_LENGTH_EXCEEDED_INFO);
            return;
        }

        setInput(storedInput);
    }, []);

    // Store the current input in the local storage when it changes.
    useEffect(() => {
        window.localStorage.setItem(process.env.LOCAL_STORAGE_INPUT_KEY!, input);

        setEvaluatedExpressionInTableFormat(evaluate(input, reverseOrder));
    }, [input]);

    return (
        <div>
            <ExpressionInput input={input} setInput={setInput} />
            <ExpressionInputInfoMessage evaluatedExpression={evaluatedExpressionInTableFormat} />

            <ExpressionInputQuickButtons
                inputModifier={(buttonText: string) => {
                    setInput((prevInput) => {
                        if (buttonText === "DEL") {
                            return prevInput.substring(0, prevInput.length - 1);
                        }
                        return prevInput + buttonText;
                    });
                }}
            />
            <CustomTable
                tableData={evaluatedExpressionInTableFormat}
                setReversOrder={setReverseOrder}
            />
        </div>
    );
};

export default Page;
