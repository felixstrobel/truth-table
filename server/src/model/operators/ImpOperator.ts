import Term from "../Term";

export default class ImpOperator extends Term {
	public eval(variableAssignment: Map<string, boolean>): boolean {
		return !this.leftChild!.eval(variableAssignment) || this.rightChild!.eval(variableAssignment);
	}
}
