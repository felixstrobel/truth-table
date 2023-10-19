import { TableDataType } from "@/assets/Adapter";
import clsx from "clsx";
import React, { useState } from "react";

interface TableHeadingProps {
    data: TableDataType;
}

//TODO: implement tooltip
const TableHeading = ({ data }: TableHeadingProps) => {
    // const [copied, setCopied] = useState(false);
    // const [currentTimeout, setCurrentTimeout] = useState<NodeJS.Timeout>();

    const onCopy = (expression: string) => {
        // setCopied(true);
        // navigator.clipboard.writeText(expression).catch((e) => console.log(e));
        // clearTimeout(currentTimeout);
        // setCurrentTimeout(
        //     setTimeout(() => {
        //         setCopied(false);
        //     }, 1000)
        // );
    };

    const onMouseLeave = () => {
        // clearTimeout(currentTimeout);
        // setCurrentTimeout(
        //     setTimeout(() => {
        //         setCopied(false);
        //     }, 100)
        // );
    };

    return (
        <th
            scope="col"
            className={clsx(
                "px-6 py-3 text-center text-lg tracking-widest",
                data.type === "expression" &&
                    "border-l-[1px] border-neutral-400 dark:border-neutral-600"
            )}
            onMouseLeave={onMouseLeave}
            onClick={() => data.type === "expression" && onCopy(data.expression)}
        >
            {data.expression}
        </th>
    );
};

export default TableHeading;
