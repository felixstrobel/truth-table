class XorOperator extends Term {
	public eval(): boolean {
		return (!this.leftChild.eval() && this.rightChild.eval()) || (this.leftChild.eval() && !this.rightChild.eval());
	}
}
