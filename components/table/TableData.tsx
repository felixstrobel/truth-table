import { TableDataType } from "@/assets/Adapter";
import clsx from "clsx";
import React from "react";

interface TableDataProps {
    data: TableDataType;
}

const TableData = ({ data }: TableDataProps) => {
    return (
        <td
            scope="row"
            className={clsx(
                "whitespace-nowrap px-6 py-3 text-center font-medium",
                data.type === "expression" &&
                    "border-l-[1px] border-neutral-400 dark:border-neutral-600"
            )}
        >
            {data.value ? "T" : "F"}
        </td>
    );
};

export default TableData;
