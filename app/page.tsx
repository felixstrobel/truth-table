"use client";

import { useEffect, useReducer, useState } from "react";
import { evaluate, TableFormat } from "@/assets/Adapter";
import ExpressionInputInfoMessage from "@/components/input/ExpressionInputInfoMessage";
import ExpressionInputQuickButtons from "@/components/input/ExpressionInputQuickButtons";
import CustomTable from "@/components/CustomTable";
import ExpressionInput from "@/components/input/ExpressionInput";
import Modal from "@/components/HelpModal";

const Page = () => {
    const [evaluatedExpressionInTableFormat, setEvaluatedExpressionInTableFormat] =
        useState<TableFormat>([]);
    const [reverseOrder, setReverseOrder] = useState<boolean>(false);
    const [modalOpen, setModalOpen] = useState(false);

    const [input, setInput] = useReducer((state: string, value: string): string => {
        location.replace("#" + value);
        window.localStorage.setItem(process.env.NEXT_PUBLIC_LOCAL_STORAGE_INPUT_KEY!, value);
        return value;
    }, "");

    // Try to pre-input the expression by checking URL params and local storage.
    useEffect(() => {
        const urlHashValue = location.hash.slice(1);
        const localStorageValue = window.localStorage.getItem(
            process.env.NEXT_PUBLIC_LOCAL_STORAGE_INPUT_KEY!
        );

        const value = urlHashValue === "" ? localStorageValue : urlHashValue;

        setInput(value ?? "");
    }, []);

    // Update table when input changes
    useEffect(() => {
        // TODO don't auto-generate table if input has more than xxx variables
        setEvaluatedExpressionInTableFormat(evaluate(input, reverseOrder));
    }, [input, reverseOrder]);

    return (
        <>
            <Modal isOpen={modalOpen} close={() => setModalOpen(false)} />
            <div className="flex flex-col">
                <ExpressionInput
                    input={input}
                    setInput={setInput}
                    openHelpModal={() => setModalOpen(true)}
                />
                <ExpressionInputInfoMessage
                    evaluatedExpression={evaluatedExpressionInTableFormat}
                />

                <ExpressionInputQuickButtons
                    inputModifier={(buttonText: string) => {
                        if (buttonText === "⌫") {
                            setInput(input.substring(0, input.length - 1));
                        } else {
                            setInput(input + buttonText);
                        }
                    }}
                />
                <CustomTable
                    tableData={evaluatedExpressionInTableFormat}
                    setReversOrder={setReverseOrder}
                />
            </div>
        </>
    );
};

export default Page;
