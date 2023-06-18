class ImpOperator extends Term {
	public eval(): boolean {
		return !this.leftChild.eval() || this.rightChild.eval();
	}
}
