import Operator from "./Operator";

/**
 * The UnaryOperator implements a unary Boolean function.
 *
 * @extends Operator
 *
 * @author Felix Strobel <https://github.com/felixstrobel>
 */
class UnaryOperator extends Operator {
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
     * Evaluates the unary Boolean function.
     *
     * @param assignment for the variable used in the Boolean expression
     * @returns the result of the evaluation
     */
    public evaluate(assignment: boolean): boolean {
        if (assignment === undefined)
            throw new Error("insufficient number of variable assignments");

        return this.evaluation(assignment);
    }
}

export default UnaryOperator;
