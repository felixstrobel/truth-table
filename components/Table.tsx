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
        <div className="flex flex-col items-center gap-y-4 mt-8">
            <div className="grid items-center mx-auto overflow-x-auto md:w-5/6 w-full shadow-md sm:rounded-lg border dark:border-neutral-600">
                <table className="w-full text-md text-left dark:bg-neutral-700/40">
                    <thead className="font-bold uppercase dark:bg-neutral-700/60">
                        <tr>
                            {Object.entries(tableData[0]).map((column) => {
                                return (
                                    <th
                                        key={column[0]}
                                        scope="col"
                                        className={clsx(
                                            "px-6 py-3 text-lg tracking-widest text-center",
                                            column[1].type === "expression" &&
                                                "border-l-[1px] dark:border-neutral-600"
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
                                className="border-t dark:border-neutral-600 dark:hover:bg-neutral-700/30"
                            >
                                {Object.entries(evaluation).map((column, index) => (
                                    <td
                                        key={index}
                                        scope="row"
                                        className={clsx(
                                            "px-6 py-4 font-medium text-center whitespace-nowrap",
                                            column[1].type === "expression" &&
                                                "border-l-[1px] dark:border-neutral-600"
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

            <label className="relative inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    onChange={(e) => setReverseOrder(e.target.checked)}
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-violet-600 rounded-full peer dark:bg-neutral-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-neutral-600 peer-checked:bg-violet-600"></div>
                <span className="ml-3 text-sm font-medium">Reverse variable order</span>
            </label>
        </div>
    );
};

export default Table;
