import { TableFormat } from "@/assets/Adapter";
import ParserError from "@/assets/model/ParserError";
import clsx from "clsx";
import { useState } from "react";

interface TableProps {
    tableData: TableFormat;
    setReverseOrder: Function;
}

//TODO: implement tooltip (1. use FlowBite -> install package for JavaScript file; 2. use Popper.js and make it custom)
const Table = ({ tableData, setReverseOrder }: TableProps) => {
    const [copied, setCopied] = useState(false);
    const [currentTimeout, setCurrentTimeout] = useState<NodeJS.Timeout>();

    const onCopy = (expression: string) => {
        setCopied(true);
        navigator.clipboard.writeText(expression).catch((e) => console.log(e));

        clearTimeout(currentTimeout);
        setCurrentTimeout(
            setTimeout(() => {
                setCopied(false);
            }, 1000)
        );
    };

    const onMouseLeave = () => {
        clearTimeout(currentTimeout);
        setCurrentTimeout(
            setTimeout(() => {
                setCopied(false);
            }, 100)
        );
    };

    if (tableData instanceof ParserError || tableData.length === 0) {
        return <></>;
    }

    return (
        <div className="mt-8 flex flex-col items-center gap-y-4">
            <div className="mx-auto grid w-full items-center overflow-x-auto border border-neutral-400 shadow-md dark:border-neutral-600 sm:rounded-lg md:w-auto">
                <table className="text-md w-full text-left dark:bg-neutral-700/40">
                    <thead className="font-bold uppercase dark:bg-neutral-700/60">
                        <tr>
                            {Object.entries(tableData[0]).map((column) => {
                                return (
                                    <th
                                        key={column[0]}
                                        scope="col"
                                        className={clsx(
                                            "px-6 py-3 text-center text-lg tracking-widest",
                                            column[1].type === "expression" &&
                                                "border-l-[1px] border-neutral-400 dark:border-neutral-600"
                                        )}
                                        onMouseLeave={onMouseLeave}
                                        onClick={() =>
                                            column[1].type === "expression" && onCopy(column[0])
                                        }
                                    >
                                        {column[0]}
                                    </th>
                                );
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((evaluation, index) => (
                            <tr
                                key={index}
                                className="border-t border-neutral-400 dark:border-neutral-600 dark:hover:bg-neutral-700/30"
                            >
                                {Object.entries(evaluation).map((column, index) => (
                                    <td
                                        key={index}
                                        scope="row"
                                        className={clsx(
                                            "whitespace-nowrap px-6 py-3 text-center font-medium",
                                            column[1].type === "expression" &&
                                                "border-l-[1px] border-neutral-400 dark:border-neutral-600"
                                        )}
                                    >
                                        {column[1].value ? "T" : "F"}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <label className="relative inline-flex cursor-pointer items-center">
                <input
                    type="checkbox"
                    value=""
                    className="peer sr-only"
                    onChange={(e) => setReverseOrder(e.target.checked)}
                />
                <div className="peer h-6 w-11 rounded-full bg-neutral-300 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-violet-600 peer-checked:after:translate-x-full peer-checked:after:border-white dark:border-neutral-600 dark:bg-neutral-700"></div>
                <span className="ml-3 text-sm font-medium">Reverse variable order</span>
            </label>
        </div>
    );
};

export default Table;
