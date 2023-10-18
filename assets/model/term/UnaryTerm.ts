import Operator from "../operator/Operator";
import Term from "./Term";

/**
 * TODO doc
 *
 * @author Max Lohrmann <https://github.com/Max0440>
 */
export default class UnaryTerm extends Term {
    private operator: Operator;

    constructor(operator: Operator, child: Term | null) {
        super(child, null);

        this.operator = operator;
    }

    public eval(variableAssignment: Map<string, boolean>): boolean {
        return this.operator.evaluate(this.leftChild!.eval(variableAssignment));
    }

    public toString(): string {
        return this.operator.getUnifiedSymbol() + this.leftChild?.toString();
    }
}
