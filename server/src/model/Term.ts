export default abstract class Term {
	protected leftChild: Term | null;
	protected rightChild: Term | null;

	constructor(leftChild: Term | null, rightChild: Term | null) {
		this.leftChild = leftChild;
		this.rightChild = rightChild;
	}

	public abstract eval(variableAssignment: Map<string, boolean>): boolean;
}
