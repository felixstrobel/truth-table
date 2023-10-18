import Term from "./Term";

/**
 * TODO doc
 *
 * @author Felix Strobel <https://github.com/felixstrobel>
 * @author Max Lohrmann <https://github.com/Max0440>
 */
export default class Variable extends Term {
    private symbol: string;

    constructor(symbol: string) {
        super(null, null);

        this.symbol = symbol;
    }

    public eval(variableAssignment: Map<string, boolean>): boolean {
        return variableAssignment.get(this.symbol)!;
    }

    public toString(): string {
        return this.symbol;
    }
}
