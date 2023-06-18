abstract class Term {
	protected leftChild: Term;
	protected rightChild: Term;

	constructor(leftChild: Term, rightChild: Term) {
		this.leftChild = leftChild;
		this.rightChild = rightChild;
	}

	public abstract eval(variableAssignment: Map<string, boolean>): boolean;
}
