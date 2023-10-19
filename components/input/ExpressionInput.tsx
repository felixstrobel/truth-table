import { clsx } from "clsx";
import TrashIcon from "@/components/icons/TrashIcon";
import CopyIcon from "@/components/icons/CopyIcon";
import InfoIcon from "@/components/icons/InfoIcon";
import { Tooltip } from "react-tooltip";
import { UseThemeProps } from "next-themes/dist/types";
import { useTheme } from "next-themes";

interface ExpressionInputProps {
    input: string;
    setInput: (x: string) => void;
    openHelpModal: () => void;
}

const ExpressionInput = ({ input, setInput, openHelpModal }: ExpressionInputProps) => {
    const { theme }: UseThemeProps = useTheme();

    return (
        <div className="flex h-14 w-full flex-row items-center gap-x-2 self-center md:w-4/5">
            <div className="relative h-full flex-1">
                <input
                    type="text"
                    spellCheck="false"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="text-md block h-full w-full rounded-lg border border-neutral-400 bg-inherit p-4 tracking-widest shadow-md dark:border-neutral-600 dark:bg-neutral-700/40 dark:placeholder-neutral-300 dark:focus:border-violet-500 dark:focus:ring-violet-600 md:text-lg"
                    placeholder="Enter expression..."
                />

                <button
                    id="clearInputButton"
                    onClick={() => setInput("")}
                    className={clsx(
                        "absolute right-12 top-2 grid h-10 w-10 place-items-center rounded-lg hover:scale-105 hover:dark:bg-neutral-600/70",
                        input.length === 0 && "hidden"
                    )}
                >
                    <TrashIcon className="h-6 w-6" />
                </button>
                <Tooltip
                    variant={theme === "light" ? "light" : "dark"}
                    delayShow={500}
                    anchorSelect="#clearInputButton"
                    content="Clear input"
                />

                <button
                    id="copyInputButton"
                    onClick={() =>
                        navigator.clipboard.writeText(input).catch((e) => console.log(e))
                    }
                    className="absolute right-2 top-2 grid h-10 w-10 place-items-center rounded-lg hover:scale-105 hover:dark:bg-neutral-600/70"
                >
                    <CopyIcon className="h-6 w-6" />
                </button>
                {/* TODO change text of tooltip to "Copied!" if expression copied (see table heading) */}
                <Tooltip
                    variant={theme === "light" ? "light" : "dark"}
                    delayShow={500}
                    anchorSelect="#copyInputButton"
                    content="Copy expression"
                />
            </div>
            <button
                id="openHelpModalButton"
                className="grid h-14 w-14 place-items-center rounded-lg border border-neutral-400 shadow-md dark:border-neutral-600 dark:bg-neutral-700/40 dark:placeholder-neutral-300 dark:hover:bg-neutral-700/80 dark:focus:border-violet-500 dark:focus:ring-violet-600"
                onClick={openHelpModal}
            >
                <InfoIcon className="h-7 w-7" />
            </button>
            <Tooltip
                variant={theme === "light" ? "light" : "dark"}
                delayShow={500}
                anchorSelect="#openHelpModalButton"
                content="Show input syntax"
            />
        </div>
    );
};

export default ExpressionInput;
