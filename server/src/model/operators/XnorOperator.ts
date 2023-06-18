class XnorOperator extends Term {
	public eval(variableAssignment: Map<string, boolean>): boolean {
		return (this.leftChild.eval(variableAssignment) && this.rightChild.eval(variableAssignment)) || (!this.leftChild.eval(variableAssignment) && !this.rightChild.eval(variableAssignment));
	}
}
