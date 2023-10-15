import { clsx } from "clsx";
import React from "react";

type HelpModalProps = {
    isOpen: boolean;
    close: () => void;
};

const HelpModal = ({ isOpen, close }: HelpModalProps) => {
    return (
        <div
            className={clsx(
                "absolute top-0 left-0 z-50 flex justify-center w-full h-screen overflow-y-auto overscroll-contain bg-black/50",
                !isOpen && "hidden"
            )}
        >
            <div className="md:mx-4 md:mt-16 p-6 w-full md:w-auto h-fit min-h-screen md:min-h-0 md:rounded-lg dark:bg-neutral-900 dark:text-neutral-100">
                <div className="flex items-center mb-2">
                    <h2 className="flex-1 text-xl font-bold">Input Syntax</h2>
                    <button
                        onClick={close}
                        className="grid place-items-center w-10 h-10 rounded-lg hover:dark:bg-neutral-600/70 hover:scale-110"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
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
                            <tr className="border-y dark:border-neutral-700">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-neutral-900 whitespace-nowrap dark:text-white"
                                >
                                    Negation
                                </th>
                                <td className="px-6 py-4">¬</td>
                                <td className="px-6 py-4">!, ~</td>
                            </tr>
                            <tr className="border-b dark:border-neutral-700">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-neutral-900 whitespace-nowrap dark:text-white"
                                >
                                    Conjunction
                                </th>
                                <td className="px-6 py-4">∧</td>
                                <td className="px-6 py-4">&amp;, &amp;&amp;</td>
                            </tr>
                            <tr className="border-b dark:border-neutral-700">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-neutral-900 whitespace-nowrap dark:text-white"
                                >
                                    NAND
                                </th>
                                <td className="px-6 py-4">⊼</td>
                                <td className="px-6 py-4">
                                    ¬∧, ¬&amp;, ¬&amp;&amp;, !∧, !&amp;, !&amp;&amp;, ~∧, ~&amp;,
                                    ~&amp;&amp;
                                </td>
                            </tr>
                            <tr className="border-b dark:border-neutral-700">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-neutral-900 whitespace-nowrap dark:text-white"
                                >
                                    Disjunction
                                </th>
                                <td className="px-6 py-4">∨</td>
                                <td className="px-6 py-4">|, ||</td>
                            </tr>
                            <tr className="border-b dark:border-neutral-700">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-neutral-900 whitespace-nowrap dark:text-white"
                                >
                                    NOR
                                </th>
                                <td className="px-6 py-4">⊽</td>
                                <td className="px-6 py-4">¬∨, ¬|, ¬||, !∨, !|, !||, ~∨, ~|, ~||</td>
                            </tr>
                            <tr className="border-b dark:border-neutral-700">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-neutral-900 whitespace-nowrap dark:text-white"
                                >
                                    Conditional
                                </th>
                                <td className="px-6 py-4">→</td>
                                <td className="px-6 py-4">&gt;, -&gt;, =&gt;</td>
                            </tr>
                            <tr className="border-b dark:border-neutral-700">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-neutral-900 whitespace-nowrap dark:text-white"
                                >
                                    Biconditional
                                </th>
                                <td className="px-6 py-4">↔</td>
                                <td className="px-6 py-4">=, ==, &lt;&gt;, &lt;=&gt;, &lt;-&gt;</td>
                            </tr>
                            <tr>
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-neutral-900 whitespace-nowrap dark:text-white"
                                >
                                    Exclusive Disjunction
                                </th>
                                <td className="px-6 py-4">⇹</td>
                                <td className="px-6 py-4">!=, &lt;!&gt;, &lt;!=&gt;</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3>
                    You can also enter <span className="font-bold">multiple expressions</span> by
                    entering them comma separated: <code className="px-2 py-1.5 text-md font-semibold text-neutral-800 bg-neutral-100 border border-neutral-200 rounded-lg dark:bg-neutral-600 dark:text-neutral-100 dark:border-neutral-500">A∧B,A∨B</code>
                </h3>
            </div>
        </div>
    );
};

export default HelpModal;
