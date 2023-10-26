import { TableFormat } from "@/assets/Adapter";
import ParserError from "@/assets/model/ParserError";
import TableHeading from "./TableHeading";
import TableData from "./TableData";
import { Tooltip } from "react-tooltip";
import { useState } from "react";
import { useTheme } from "next-themes";
import { UseThemeProps } from "next-themes/dist/types";

interface TableProps {
    tableData: TableFormat;
    setReverseOrder: Function;
}

const Table = ({ tableData, setReverseOrder }: TableProps) => {
    const { theme }: UseThemeProps = useTheme();
    const [copied, setCopied] = useState(false);
    const [currentTimeout, setCurrentTimeout] = useState<NodeJS.Timeout>();

    if (tableData instanceof ParserError || tableData.length === 0) {
        return <></>;
    }

    return (
        <div className="mt-8 flex flex-col items-center gap-y-4">
            <div className="mx-auto grid w-full items-center overflow-x-auto border border-neutral-400 shadow-md dark:border-neutral-600 sm:rounded-lg md:w-auto">
                <table className="text-md w-full text-left dark:bg-neutral-700/40">
                    <thead className="font-bold uppercase dark:bg-neutral-700/60">
                        <tr>
                            {tableData[0].map((column, index) => (
                                <TableHeading
                                    key={index}
                                    data={column}
                                    currentTimeout={currentTimeout}
                                    setCurrentTimeout={setCurrentTimeout}
                                    setCopied={setCopied}
                                />
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((evaluation, index) => (
                            <tr
                                key={index}
                                className="border-t border-neutral-400 dark:border-neutral-600 dark:hover:bg-neutral-700/30"
                            >
                                {evaluation.map((column, index) => (
                                    <TableData key={index} data={column} />
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

            {/* <Tooltip
                variant={theme === "light" ? "light" : "dark"}
                delayShow={500}
                anchorSelect=".expression"
                content={copied ? "Copied!" : "Copy to clipboard"}
            /> */}
        </div>
    );
};

export default Table;
