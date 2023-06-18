class NotOperator extends Term {
	public eval(): boolean {
		return !this.leftChild.eval();
	}
}
