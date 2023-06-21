import Operator from "../operators/Operator";
import UnaryOperator from "../operators/UnaryOperator";
import BinaryOperator from "../operators/BinaryOperator";
import OperatorFactory from "../operators/factory/OperatorFactory";

import Token from "./Token";
import TokenType from "./TokenType";

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
		this.input = input.replace(/\s/, "");

		if (this.input.length === 0) {
			throw new Error("Input may not be empty");
		}

		this.loadDefaultOperators();
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
