export default class Lexer {
	private input: string;
	private currentIndex: number = 0;

	constructor(input: string) {
		this.input = input.trim();
	}

	public nextToken(): Token {
		let char = this.input.charAt(this.currentIndex);

		if (char === '') return Token.EOF;

		return Token.AND_OPERATOR;
	}
}
