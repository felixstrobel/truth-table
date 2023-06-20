import TokenType from "./TokenType";

/**
 * Represents a token used in the lexer.
 *
 * @author Max Lohrmann <https://github.com/Max0440>
 */
export default class Token {
	private readonly tokenType: TokenType;
	private readonly symbol: string;

	/**
	 * Constructs a {@link Token} object.
	 *
	 * @param tokenType The type of the token.
	 * @param symbol The symbol associated with the token.
	 */
	constructor(tokenType: TokenType, symbol: string) {
		this.tokenType = tokenType;
		this.symbol = symbol;
	}

	/**
	 * Returns the type of the token.
	 *
	 * @returns The type of the token.
	 */
	public getTokenType(): TokenType {
		return this.tokenType;
	}

	/**
	 * Returns the symbol associated with the token.
	 * @returns The symbol associated with the token.
	 */
	public getSymbol(): string {
		return this.symbol;
	}
}
