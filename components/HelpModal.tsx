import { clsx } from "clsx";
import React from "react";
import CloseIcon from "@/components/icons/CloseIcon";

interface HelpModalProps {
    isOpen: boolean;
    close: () => void;
}

const data = [
    {
        operator: "Negation",
        unicode: "¬",
        alternatives: "!, ~",
    },
    {
        operator: "Conjunction",
        unicode: "∧",
        alternatives: "&, &&",
    },
    {
        operator: "NAND",
        unicode: "⊼",
        alternatives: "¬∧, ¬&, ¬&&, !∧, !&, !&&, ~∧, ~&, ~&&",
    },
    {
        operator: "Disjunction",
        unicode: "∨",
        alternatives: "|, ||",
    },
    {
        operator: "NOR",
        unicode: "⊽",
        alternatives: "¬∨, ¬|, ¬||, !∨, !|, !||, ~∨, ~|, ~||",
    },
    {
        operator: "Conditional",
        unicode: "→",
        alternatives: ">, ->, =>",
    },
    {
        operator: "Biconditional",
        unicode: "↔",
        alternatives: "=, ==, <>, <=>, <->",
    },
    {
        operator: "Exclusive Disjunction",
        unicode: "⇹",
        alternatives: "!=, <!>, <!=>",
    },
];

const HelpModal = ({ isOpen, close }: HelpModalProps) => {
    return (
        <div
            className={clsx(
                "fixed top-0 left-0 z-50 flex justify-center w-full h-screen overflow-y-auto overscroll-contain bg-black/50",
                !isOpen && "hidden"
            )}
        >
            <div className="md:mx-4 md:mt-16 p-6 w-full md:w-auto h-fit min-h-screen md:min-h-0 md:rounded-lg bg-neutral-100 dark:bg-neutral-900 dark:text-neutral-100">
                <div className="flex items-center mb-2">
                    <h2 className="flex-1 text-xl font-bold">Input Syntax</h2>
                    <button
                        onClick={close}
                        className="grid place-items-center w-10 h-10 rounded-lg hover:bg-neutral-400/30 hover:dark:bg-neutral-600/70 hover:scale-110"
                    >
                        <CloseIcon className="w-6 h-6" />
                    </button>
                </div>

                <h3>Here you can see which connectives we support and how you can enter them.</h3>

                <div className="overflow-x-auto my-4">
                    <table className="w-full text-sm text-left">
                        <thead className="text-md font-bold uppercase">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Operator
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Unicode
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Alternatives
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((value) => (
                                <tr
                                    key={value.unicode}
                                    className="border-t dark:border-neutral-700"
                                >
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-neutral-900 whitespace-nowrap dark:text-white"
                                    >
                                        {value.operator}
                                    </th>
                                    <td className="px-6 py-4">{value.unicode}</td>
                                    <td className="px-6 py-4">{value.alternatives}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <h3>
                    You can also enter <span className="font-bold">multiple expressions</span> by
                    entering them comma separated:{" "}
                    <code className="px-2 py-1.5 text-md font-semibold text-neutral-800 bg-neutral-100 border border-neutral-200 rounded-lg dark:bg-neutral-600 dark:text-neutral-100 dark:border-neutral-500">
                        A∧B,A∨B
                    </code>
                </h3>
            </div>
        </div>
    );
};

export default HelpModal;
