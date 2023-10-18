import Operator from "../operator/Operator";
import Term from "./Term";

/**
 * TODO doc
 *
 * @author Max Lohrmann <https://github.com/Max0440>
 */
export default class BinaryTerm extends Term {
    private operator: Operator;

    constructor(operator: Operator, leftChild: Term | null, rightChild: Term | null) {
        super(leftChild, rightChild);

        this.operator = operator;
    }

    public eval(variableAssignment: Map<string, boolean>): boolean {
        return this.operator.evaluate(
            this.leftChild!.eval(variableAssignment),
            this.rightChild!.eval(variableAssignment)
        );
    }

    public toString(): string {
        return (
            "(" +
            this.leftChild?.toString() +
            this.operator.getUnifiedSymbol() +
            this.rightChild?.toString() +
            ")"
        );
    }
}
