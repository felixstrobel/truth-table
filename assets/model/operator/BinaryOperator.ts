import Operator from "./Operator";

/**
 * The BinaryOperator implements a binary Boolean function.
 *
 * @extends Operator
 *
 * @author Felix Strobel <https://github.com/felixstrobel>
 */
class BinaryOperator extends Operator {
    private readonly evaluation: Function;

    /**
     * Constructor of a BinaryOperator.
     *
     * @param evaluation that evaluates the result of the binary Boolean function
     * @param unifiedSymbol that is primarily used and necessary for the {@link Parser} to uniformly work
     * @param alternativeSymbols that can be used as well; however, they'll be replaced by the {@link unifiedSymbol}
     *     for being processed by the {@link Parser}
     */
    constructor(evaluation: Function, unifiedSymbol: string, alternativeSymbols: string[]) {
        super(unifiedSymbol, alternativeSymbols);

        this.evaluation = evaluation;
    }

    /**
     * Evaluates the binary Boolean function.
     *
     * @param assignments for the variables used in the Boolean expression
     * @returns the result of the evaluation
     */
    public evaluate(...assignments: boolean[]): boolean {
        if (assignments.length != 2) throw new Error("insufficient number of variable assignments");

        return this.evaluation(assignments[0], assignments[1]);
    }
}

export default BinaryOperator;
