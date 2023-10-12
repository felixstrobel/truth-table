import { clsx } from "clsx";

interface ExpressionInputProps {
    input: string;
    setInput: Function;
}

const ExpressionInput = ({ input, setInput }: ExpressionInputProps) => {
    return (
        <div className="flex flex-row self-center items-center gap-x-2 w-full md:w-4/5 h-14">
            <div className="relative flex-1 h-full">
                <input
                    type="text"
                    spellCheck="false"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="block w-full h-full p-4 text-md md:text-lg tracking-widest rounded-lg border dark:bg-neutral-700/40 dark:border-neutral-600 dark:focus:border-violett-500 dark:placeholder-neutral-300 dark:focus:ring-violet-600"
                    placeholder="Enter Boolean expression..."
                />
                <button
                    onClick={() => setInput("")}
                    className={clsx(
                        "absolute right-12 top-2 grid place-items-center w-10 h-10 rounded-lg hover:dark:bg-neutral-600/70 hover:scale-105",
                        input.length === 0 && "hidden"
                    )}
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
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                    </svg>
                </button>
                <button
                    onClick={() =>
                        navigator.clipboard.writeText(input).catch((e) => console.log(e))
                    }
                    className="absolute right-2 top-2 grid place-items-center w-10 h-10 rounded-lg hover:dark:bg-neutral-600/70 hover:scale-105"
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
                            d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                        />
                    </svg>
                </button>
            </div>
            {/* TODO: button doesn't do anything. It should open the HelpModal in the future. Please try to not use the useDisclosure from Chakra. */}
            <button className="grid place-items-center w-14 h-14 rounded-lg border dark:bg-neutral-700/40 dark:hover:bg-neutral-700/80 dark:border-neutral-600 dark:focus:border-violett-500 dark:placeholder-neutral-300 dark:focus:ring-violet-600">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-7"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                    />
                </svg>
            </button>
        </div>
    );
};

export default ExpressionInput;
