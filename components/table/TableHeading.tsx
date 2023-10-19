import { TableDataType } from "@/assets/Adapter";
import clsx from "clsx";
import React from "react";

interface TableHeadingProps {
    data: TableDataType;

    currentTimeout: NodeJS.Timeout | undefined;
    setCurrentTimeout: (x: NodeJS.Timeout) => void;
    setCopied: (x: boolean) => void;
}

const TableHeading = ({
    data,
    currentTimeout,
    setCurrentTimeout,
    setCopied,
}: TableHeadingProps) => {
    const copy = () => {
        if (data.type !== "expression") return;

        setCopied(true);
        navigator.clipboard.writeText(data.expression).catch((e) => console.log(e));
        clearTimeout(currentTimeout);
        setCurrentTimeout(
            setTimeout(() => {
                setCopied(false);
            }, 2000)
        );
    };

    const onMouseLeave = () => {
        clearTimeout(currentTimeout);
        setCurrentTimeout(
            setTimeout(() => {
                setCopied(false);
            }, 50)
        );
    };

    return (
        <th
            scope="col"
            className={clsx(
                "px-6 py-3 text-center text-lg tracking-widest",
                data.type === "expression" &&
                    "expression cursor-pointer border-l-[1px] border-neutral-400 dark:border-neutral-600"
            )}
            onMouseLeave={onMouseLeave}
            onClick={copy}
        >
            {data.expression}
        </th>
    );
};

export default TableHeading;
