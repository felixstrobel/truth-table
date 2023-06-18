class Variable extends Term {
	private name: string;

	constructor(name: string) {
		super(null, null);

		this.name = name;
	}

	public eval(variableAssignment: Map<string, boolean>): boolean {
		return variableAssignment.get(this.name)!;
	}
}
