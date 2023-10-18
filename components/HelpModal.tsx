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
                "fixed left-0 top-0 z-50 flex h-screen w-full justify-center overflow-y-auto overscroll-contain bg-black/50",
                !isOpen && "hidden"
            )}
        >
            <div className="h-fit min-h-screen w-full bg-neutral-100 p-6 dark:bg-neutral-900 dark:text-neutral-100 md:mx-4 md:mt-16 md:min-h-0 md:w-auto md:rounded-lg">
                <div className="mb-2 flex items-center">
                    <h2 className="flex-1 text-xl font-bold">Input Syntax</h2>
                    <button
                        onClick={close}
                        className="grid h-10 w-10 place-items-center rounded-lg hover:scale-110 hover:bg-neutral-400/30 hover:dark:bg-neutral-600/70"
                    >
                        <CloseIcon className="h-6 w-6" />
                    </button>
                </div>

                <h3>Here you can see which connectives we support and how you can enter them.</h3>

                <div className="my-4 overflow-x-auto">
                    <table className="w-full text-left text-sm">
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
                                        className="whitespace-nowrap px-6 py-4 font-medium text-neutral-900 dark:text-white"
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
                    <code className="text-md rounded-lg border border-neutral-200 bg-neutral-100 px-2 py-1.5 font-semibold text-neutral-800 dark:border-neutral-500 dark:bg-neutral-600 dark:text-neutral-100">
                        A∧B,A∨B
                    </code>
                </h3>
            </div>
        </div>
    );
};

export default HelpModal;
