/**
 * The Operator class is the blueprint for all operators supported by the {@link Parser}.
 *
 * @author Felix Strobel <https://github.com/felixstrobel>
 */
abstract class Operator {
    /**
     * The symbol that is primarily used and all alternative symbols are replaced by. Furthermore, this symbol is the
     * one shown in the final truth table.
     */
    private unifiedSymbol: string;

    /**
     * The symbols that can be used as synonyms for the {@link unifiedSymbol}.
     */
    private alternativeSymbols: string[];

    protected constructor(unifiedSymbol: string, alternativeSymbols: string[]) {
        this.unifiedSymbol = unifiedSymbol;
        this.alternativeSymbols = alternativeSymbols;
    }

    abstract evaluate(...assignments: boolean[]): boolean;
}

export default Operator;