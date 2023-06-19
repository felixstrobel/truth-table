// @ts-nocheck

import Connective from '../model/connective/Connective';
import ConnectiveType from '../model/connective/ConnectiveType';
import Token from '../model/token/Token';
import TokenType from '../model/token/TokenType';

export default class Lexer {
	private input: string;
	private connectives: Connective[] = [];
	private currentIndex: number = -1;

	constructor(input: string) {
		this.input = input.trim();

		this.loadDefaultConnective();
	}

	//#region connectives
	public addConnective(connective: Connective): void {
		this.connectives.push(connective);
	}

	private getConnective(symbol: string): Connective {
		for (const connective of this.connectives) {
			if (connective.getOfficialSymbol() === symbol) {
				return connective;
			}
		}

		return null;
	}

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

	private replaceConnective(connective: Connective): void {
		const officialSymbol = connective.getOfficialSymbol();
		const otherSymbols = connective.getOtherSymbols();

		for (const symbol of otherSymbols) {
			this.input = this.input.replace(symbol, officialSymbol);
		}
	}

	private replaceConnectives(): void {
		for (const connective of this.connectives) {
			this.replaceConnective(connective);
		}
	}
	//#endregion

	public lex(): Token[] {
		this.replaceConnectives();

		const tokens: Token[] = [];

		while (this.hasNext()) {
			tokens.push(this.handleNext());
		}

		return tokens;
	}

	private hasNext(): boolean {
		return this.input.length > this.currentIndex + 1;
	}

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

	public getInput() {
		return this.input;
	}
}
