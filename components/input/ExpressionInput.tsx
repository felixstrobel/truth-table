import { clsx } from "clsx";
import TrashIcon from "@/components/icons/TrashIcon";
import CopyIcon from "@/components/icons/CopyIcon";
import InfoIcon from "@/components/icons/InfoIcon";

interface ExpressionInputProps {
    input: string;
    setInput: (x: string) => void;
    openHelpModal: () => void;
}

const ExpressionInput = ({ input, setInput, openHelpModal }: ExpressionInputProps) => {
    return (
        <div className="flex flex-row self-center items-center gap-x-2 w-full md:w-4/5 h-14">
            <div className="relative flex-1 h-full">
                <input
                    type="text"
                    spellCheck="false"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="block w-full h-full p-4 text-md md:text-lg tracking-widest rounded-lg shadow-md border bg-inherit dark:bg-neutral-700/40 border-neutral-400 dark:border-neutral-600 dark:focus:border-violet-500 dark:placeholder-neutral-300 dark:focus:ring-violet-600"
                    placeholder="Enter expression..."
                />
                <button
                    onClick={() => setInput("")}
                    className={clsx(
                        "absolute right-12 top-2 grid place-items-center w-10 h-10 rounded-lg hover:dark:bg-neutral-600/70 hover:scale-105",
                        input.length === 0 && "hidden"
                    )}
                >
                    <TrashIcon className="w-6 h-6" />
                </button>
                <button
                    onClick={() =>
                        navigator.clipboard.writeText(input).catch((e) => console.log(e))
                    }
                    className="absolute right-2 top-2 grid place-items-center w-10 h-10 rounded-lg hover:dark:bg-neutral-600/70 hover:scale-105"
                >
                    <CopyIcon className="w-6 h-6" />
                </button>
            </div>
            <button
                className="grid place-items-center w-14 h-14 rounded-lg shadow-md border dark:bg-neutral-700/40 dark:hover:bg-neutral-700/80 border-neutral-400 dark:border-neutral-600 dark:focus:border-violet-500 dark:placeholder-neutral-300 dark:focus:ring-violet-600"
                onClick={openHelpModal}
            >
                <InfoIcon className="w-7 h-7" />
            </button>
        </div>
    );
};

export default ExpressionInput;
