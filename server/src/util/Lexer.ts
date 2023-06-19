// @ts-nocheck

import Connective from '../model/connective/Connective';
import ConnectiveType from '../model/connective/ConnectiveType';
import Token from '../model/token/Token';
import TokenType from '../model/token/TokenType';

export default class Lexer {
	private input: string;
	private connectives: Connective[] = [];
	private currentIndex: number = -1;

	/**
	 * Constructs a {@link Lexer} object.
	 *
	 * @param input The input string to be processed by the lexer.
	 */
	constructor(input: string) {
		this.input = input.trim();

		this.loadDefaultConnective();
	}

	/**
	 * Adds a given connective to the lexer.
	 *
	 * @param connective The connective to be added.
	 */
	public addConnective(connective: Connective): void {
		this.connectives.push(connective);
	}

	/**
	 * Retrieves a connective object based on its symbol.
	 *
	 * @param symbol The symbol of the connective.
	 * @returns The connective object with the specified symbol, or null if not found.
	 */
	private getConnective(symbol: string): Connective {
		for (const connective of this.connectives) {
			if (connective.getOfficialSymbol() === symbol) {
				return connective;
			}
		}

		return null;
	}

	/**
	 * Loads the default connectives (NOT, AND, OR) into the lexer.
	 */
	private loadDefaultConnective(): void {
		const NOT = new Connective('¬', ConnectiveType.UNARY_CONNECTIVE, (a: boolean) => !a, ['!', '~']);
		const AND = new Connective('∧', ConnectiveType.BINARY_CONNECTIVE, (a: boolean, b: boolean) => a && b, [
			'&&',
			'&',
		]);
		const OR = new Connective('∨', ConnectiveType.BINARY_CONNECTIVE, (a: boolean, b: boolean) => a || b, [
			'||',
			'|',
		]);

		this.addConnective(NOT);
		this.addConnective(AND);
		this.addConnective(OR);
	}

	/**
	 * Replaces alternate symbols of a connective with its official symbol in
	 * the input string.
	 *
	 * @param connective The connective to be replaced.
	 */
	private replaceConnective(connective: Connective): void {
		const officialSymbol = connective.getOfficialSymbol();
		const otherSymbols = connective.getOtherSymbols();

		for (const symbol of otherSymbols) {
			this.input = this.input.replace(symbol, officialSymbol);
		}
	}

	/**
	 * Replaces all alternate symbols of all connectives in the input string
	 * with their official symbols.
	 */
	private replaceConnectives(): void {
		for (const connective of this.connectives) {
			this.replaceConnective(connective);
		}
	}

	/**
	 * Performs lexical analysis on the input string and returns an array of
	 * tokens in the order it was extracted from the string.
	 *
	 * @returns An array of tokens generated from the input string.
	 */
	public lex(): Token[] {
		this.replaceConnectives();

		const tokens: Token[] = [];

		while (this.hasNext()) {
			tokens.push(this.handleNext());
		}

		return tokens;
	}

	/**
	 * Checks if there are more characters to process in the input string.
	 *
	 * @returns A boolean indicating whether there are more characters to process or not.
	 */
	private hasNext(): boolean {
		return this.input.length > this.currentIndex + 1;
	}

	/**
	 * Handles the next character in the input string and generates a token.
	 *
	 * @returns A token generated from the next character.
	 */
	private handleNext(): Token {
		this.currentIndex++;
		const symbol: string = this.input.charAt(this.currentIndex);

		let tokenType: TokenType;
		if (this.getConnective(symbol)?.getConnectiveType() === ConnectiveType.BINARY_CONNECTIVE) {
			tokenType = TokenType.BINARY_CONNECTIVE;
		} else if (this.getConnective(symbol)?.getConnectiveType() === ConnectiveType.UNARY_CONNECTIVE) {
			tokenType = TokenType.UNARY_CONNECTIVE;
		} else if (symbol === '(') {
			// TODO if statement more generic
			tokenType = TokenType.PARENTHESIS_OPEN;
		} else if (symbol === ')') {
			// TODO if statement more generic
			tokenType = TokenType.PARENTHESIS_CLOSE;
		} else if (symbol.match(/[A-Z]/)) {
			tokenType = TokenType.ATOM;
		} else {
			tokenType = TokenType.UNKNOWN;
		}

		return new Token(tokenType, symbol);
	}

	/**
	 * Returns the input string the lexer processes.
	 *
	 * @returns The input string.
	 */
	public getInput() {
		return this.input;
	}
}
