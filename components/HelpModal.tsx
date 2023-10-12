import { clsx } from "clsx";
import React from "react";

type HelpModalProps = {
    isOpen: boolean;
    close: () => void;
};

// TODO style
const HelpModal = ({ isOpen, close }: HelpModalProps) => {
    return (
        <div
            className={clsx(
                "absolute top-0 left-0 z-50 h-full w-full flex justify-center bg-black bg-opacity-50",
                !isOpen && "hidden"
            )}
        >
            <div className="h-fit mt-16 p-4 dark:bg-neutral-900 dark:text-neutral-100">
                <div className="flex">
                    <h2 className="grow">Input Syntax</h2>
                    <input
                        className="cursor-pointer"
                        type="button"
                        value="TODO Close"
                        onClick={close}
                    />
                </div>

                <h3>Here you can see which connectives we support and how you can enter them.</h3>

                <table>
                    <thead>
                        <tr>
                            <th>Operator</th>
                            <th>Unicode</th>
                            <th>Alternatives</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Negation</td>
                            <td>¬</td>
                            <td>!, ~</td>
                        </tr>
                        <tr>
                            <td>Conjunction</td>
                            <td>∧</td>
                            <td>&amp;, &amp;&amp;</td>
                        </tr>
                        <tr>
                            <td>NAND</td>
                            <td>⊼</td>
                            <td>
                                ¬∧, ¬&amp;, ¬&amp;&amp;, !∧, !&amp;, !&amp;&amp;, ~∧, ~&amp;,
                                ~&amp;&amp;
                            </td>
                        </tr>
                        <tr>
                            <td>Disjunction</td>
                            <td>∨</td>
                            <td>|, ||</td>
                        </tr>
                        <tr>
                            <td>NOR</td>
                            <td>⊽</td>
                            <td>¬∨, ¬|, ¬||, !∨, !|, !||, ~∨, ~|, ~||</td>
                        </tr>
                        <tr>
                            <td>Conditional</td>
                            <td>→</td>
                            <td>&gt;, -&gt;, =&gt;</td>
                        </tr>
                        <tr>
                            <td>Biconditional</td>
                            <td>↔</td>
                            <td>=, ==, &lt;&gt;, &lt;=&gt;, &lt;-&gt;</td>
                        </tr>
                        <tr>
                            <td>Exclusive Disjunction</td>
                            <td>⇹</td>
                            <td>!=, &lt;!&gt;, &lt;!=&gt;</td>
                        </tr>
                    </tbody>
                </table>

                <h3>
                    You can also enter <span className="font-bold">multiple expressions</span> by
                    entering them comma separated: <code className="p-1">A∧B,A∨B</code>
                </h3>
            </div>
        </div>
    );
};

export default HelpModal;
