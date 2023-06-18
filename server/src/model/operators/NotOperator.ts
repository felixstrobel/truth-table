import Term from "../Term";

export default class NotOperator extends Term {
	public eval(variableAssignment: Map<string, boolean>): boolean {
		return !this.leftChild!.eval(variableAssignment);
	}
}
