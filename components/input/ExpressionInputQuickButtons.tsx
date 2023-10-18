interface ExpressionInputQuickButtonsProps {
    inputModifier: any;
}

const ExpressionInputQuickButtons = ({ inputModifier }: ExpressionInputQuickButtonsProps) => {
    const buttons = [
        "¬",
        "∧",
        "⊼",
        "∨",
        "⊽",
        "→",
        "↔",
        "⇹",
        "(",
        ")",
        ",",
        "0",
        "1",
        "A",
        "B",
        "C",
        "⌫",
    ];

    return (
        <div className="flex flex-row flex-wrap justify-center gap-2.5 md:gap-4">
            {buttons.map((buttonText: string) => {
                return (
                    <button
                        type="button"
                        key={buttonText}
                        onClick={() => inputModifier(buttonText)}
                        className="grid h-14 w-14 place-items-center rounded-lg border border-neutral-400 p-2.5 text-xl font-medium dark:border-neutral-100/70 dark:hover:bg-neutral-300/10"
                    >
                        {buttonText}
                    </button>
                );
            })}
        </div>
    );
};

export default ExpressionInputQuickButtons;
