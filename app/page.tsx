"use client";

import { useEffect, useState } from "react";
import { evaluate, TableFormat } from "@/assets/Adapter";
import ExpressionInputInfoMessage from "@/components/input/ExpressionInputInfoMessage";
import ExpressionInputQuickButtons from "@/components/input/ExpressionInputQuickButtons";
import CustomTable from "@/components/CustomTable";
import ExpressionInput from "@/components/input/ExpressionInput";

const Page = () => {
    const [evaluatedExpressionInTableFormat, setEvaluatedExpressionInTableFormat] =
        useState<TableFormat>([]);
    const [reverseOrder, setReverseOrder] = useState<boolean>(false);

    const [input, setInput] = useState<string>("");

    // Try to pre-input the expression by checking URL params and local storage.
    useEffect(() => {
        const urlHashValue = location.hash.slice(1);
        const localStorageValue = window.localStorage.getItem(process.env.LOCAL_STORAGE_INPUT_KEY!);

        const value = urlHashValue === "" ? localStorageValue : urlHashValue;

        setInput(value ?? "");
    }, []);

    // Store the current input in the local storage when it changes.
    useEffect(() => {
        window.localStorage.setItem(process.env.LOCAL_STORAGE_INPUT_KEY!, input);

        // TODO don't auto-generate table if input has more than xxx variables
        setEvaluatedExpressionInTableFormat(evaluate(input, reverseOrder));
    }, [input, reverseOrder]);

    return (
        <div className="flex flex-col">
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
