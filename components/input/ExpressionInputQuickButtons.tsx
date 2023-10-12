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
        "DEL",
    ];

    return (
        <div className="flex flex-row flex-wrap gap-2.5 md:gap-4 justify-center">
            {buttons.map((buttonText: string) => {
                return (
                    <button
                        type="button"
                        key={buttonText}
                        onClick={() => inputModifier(buttonText)}
                        className="grid place-items-center p-2.5 w-14 h-14 dark:hover:bg-neutral-300/10 border dark:border-neutral-100/70 rounded-lg text-md font-medium"
                    >
                        {buttonText}
                    </button>
                );
            })}
        </div>
    );
};

export default ExpressionInputQuickButtons;
