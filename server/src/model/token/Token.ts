import TokenType from './TokenType';

export default class Token {
	private readonly tokenType: TokenType;
	private readonly value: string;

	constructor(tokenType: TokenType, value: string) {
		this.tokenType = tokenType;
		this.value = value;
	}
}
