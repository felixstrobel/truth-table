import Term from "./Term";

/**
 * TODO doc
 *
 * @author Max Lohrmann <https://github.com/Max0440>
 */
export default class BooleanTerm extends Term {
    private symbol: string;

    constructor(symbol: string) {
        super(null, null);

        this.symbol = symbol;
    }

    public eval(variableAssignment: Map<string, boolean>): boolean {
        return this.symbol === "1";
    }

    public toString(): string {
        return this.symbol;
    }
}
