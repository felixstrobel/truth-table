enum Token {
	VARIABLE,

	AND_OPERATOR,
	IMP_OPERATOR,
	NAND_OPERATOR,
	NOR_OPERATOR,
	NOT_OPERATOR,
	OR_OPERATOR,
	XNOR_OPERATOR,
	XOR_OPERATOR,

	OPENING_BRACKET,
	CLOSING_BRACKET,

	EOF,
}

export default Token;