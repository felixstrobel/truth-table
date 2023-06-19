import TokenType from './TokenType';

export default class Token {
	private readonly tokenType: TokenType;
	private readonly symbol: string;

	constructor(tokenType: TokenType, symbol: string) {
		this.tokenType = tokenType;
		this.symbol = symbol;
	}
}
