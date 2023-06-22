import Operator from "./model/operator/Operator";
import UnaryOperator from "./model/operator/UnaryOperator";
import BinaryOperator from "./model/operator/BinaryOperator";
import OperatorFactory from "./util/OperatorFactory";

import Token from "./model/token/Token";
import TokenType from "./model/token/TokenType";

/**
 * Performs lexical analysis on a given string.
 * It tokenizes the string by identifiers that can be changed.
 * For token types see {@link TokenType}.
 *
 * @todo Replace alternative symbols for operators
 *
 * @author Max Lohrmann <https://github.com/Max0440>
 */
export default class Lexer {
	private input: string;
	private location: number = -1;
	private operators: Operator[] = [];

	/**
	 * Constructs a {@link Lexer} object.
	 *
	 * @param input The input string to be processed by the lexer.
	 */
	constructor(input: string) {
		this.input = input.replace(/\s/g, "");

		if (this.input.length === 0) {
			throw new Error("Input may not be empty");
		}

		this.loadDefaultOperators();
		this.replaceOperatorSymbols();

		// TODO redo
		// place AND operators
		let buf = this.input.charAt(0);
		for (let i = 1; i < this.input.length; i++) {
			const currentChar = this.input.charAt(i);
			const previousChar = this.input.charAt(i - 1);
			if (currentChar.match(/[A-Z]/) && previousChar.match(/[A-Z]/)) {
				buf += "∧";
				buf += currentChar;
			} else {
				buf += currentChar;
			}
		}
		this.input = buf;
	}

	/**
	 * Adds a given operator to the lexer.
	 *
	 * @param operator The operator to be added.
	 */
	public addOperator(operator: Operator): void {
		this.operators.push(operator);
	}

	/**
	 * Loads the default operator (NOT, AND, OR, ...) into the lexer.
	 */
	private loadDefaultOperators(): void {
		const allOperators = OperatorFactory.getAllOperators();

		for (const operator of allOperators) {
			this.addOperator(operator);
		}
	}

	/**
	 * Replaces all alternative symbols of the operators set in the operator list
	 * by the unified symbol.
	 */
	private replaceOperatorSymbols(): void {
		// create list with all alternative operator symbols associated with the unified symbol
		const operatorMap = new Map();

		for (const operator of this.operators) {
			const unifiedSymbol = operator.getUnifiedSymbol();
			for (const alternativeSymbol of operator.getAlternativeSymbols()) {
				operatorMap.set(alternativeSymbol, unifiedSymbol);
			}
		}

		// sort map by operator length
		const sortedOperatorMap = new Map(
			[...operatorMap.entries()].sort((a: [string, string], b: [string, string]) => {
				return b[0].length - a[0].length;
			})
		);

		// replace all operators
		for (const entry of sortedOperatorMap.entries()) {
			this.input = this.input.split(entry[0]).join(entry[1]);
		}
	}

	/**
	 * Retrieves a operator object based on its symbol.
	 *
	 * @param symbol The symbol of the operator.
	 * @returns The operator object with the specified symbol, or null if not found.
	 */
	private getOperator(symbol: string): Operator | null {
		for (const operator of this.operators) {
			if (operator.getUnifiedSymbol() === symbol) {
				return operator;
			}
		}

		return null;
	}

	/**
	 * Performs lexical analysis on the input string and returns the next token
	 * from the string.
	 * For the possible token types see {@link TokenTypes}.
	 * If the string is fully parsed the will return a EOL token.
	 *
	 * @returns The next token generated.
	 */
	public nextToken(): Token {
		if (this.input.length <= this.location + 1) {
			return new Token(TokenType.EOL, "", null);
		}

		this.location++;
		const currentCharacter: string = this.input.charAt(this.location);

		const operator = this.getOperator(currentCharacter);

		if (operator instanceof UnaryOperator) {
			return new Token(TokenType.UNARY_OPERATOR, currentCharacter, operator);
		} else if (operator instanceof BinaryOperator) {
			return new Token(TokenType.BINARY_OPERATOR, currentCharacter, operator);
		} else if (currentCharacter === "(") {
			return new Token(TokenType.PARENTHESIS_OPEN, currentCharacter, null);
		} else if (currentCharacter === ")") {
			return new Token(TokenType.PARENTHESIS_CLOSE, currentCharacter, null);
		} else if (currentCharacter.match(/[A-Z]/)) {
			return new Token(TokenType.ATOM, currentCharacter, null);
		} else if (currentCharacter.match(/[01]/)) {
			return new Token(TokenType.BOOLEAN, currentCharacter, null);
		} else {
			return new Token(TokenType.UNKNOWN, currentCharacter, null);
		}
	}
}
