import BinaryOperator from "../operators/BinaryOperator";
import Operator from "../operators/Operator";
import UnaryOperator from "../operators/UnaryOperator";
import OperatorFactory from "../operators/factory/OperatorFactory";
import Token from "./Token";
import TokenType from "./TokenType";

/**
 * Performs lexical analysis on a given string.
 * It tokenizes the string by identifiers that can be changed.
 * For token types see {@link TokenType}.
 *
 * @author Max Lohrmann <https://github.com/Max0440>
 */
export default class Lexer {
	private input: string;
	private operators: Operator[] = [];
	private currentIndex: number = -1;

	/**
	 * Constructs a {@link Lexer} object.
	 *
	 * @param input The input string to be processed by the lexer.
	 */
	constructor(input: string) {
		this.input = input.trim();

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
	 * Loads the default operator (NOT, AND, OR) into the lexer.
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
	 * Replaces alternate symbols of a operator with its official symbol in
	 * the input string.
	 *
	 * @param operator The operator to be replaced.
	 */
	private replaceOperator(operator: Operator): void {
		const officialSymbol = operator.getUnifiedSymbol();
		const otherSymbols = operator.getAlternativeSymbols();

		for (const symbol of otherSymbols) {
			this.input = this.input.replace(symbol, officialSymbol);
		}
	}

	/**
	 * Replaces all alternate symbols of all operators in the input string
	 * with their official symbols.
	 */
	private replaceOperators(): void {
		for (const operator of this.operators) {
			this.replaceOperator(operator);
		}
	}

	/**
	 * Performs lexical analysis on the input string and returns an array of
	 * tokens in the order it was extracted from the string.
	 *
	 * @returns An array of tokens generated from the input string.
	 */
	public lex(): Token[] {
		this.replaceOperators();

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
		const operator = this.getOperator(symbol);

		if (operator instanceof UnaryOperator) {
			return new Token(TokenType.UNARY_OPERATOR, symbol, operator);
		} else if (operator instanceof BinaryOperator) {
			return new Token(TokenType.BINARY_OPERATOR, symbol, operator);
		} else if (symbol === "(") {
			return new Token(TokenType.PARENTHESIS_OPEN, symbol, null);
		} else if (symbol === ")") {
			return new Token(TokenType.PARENTHESIS_CLOSE, symbol, null);
		} else if (symbol.match(/[A-Z]/)) {
			return new Token(TokenType.ATOM, symbol, null);
		} else {
			return new Token(TokenType.UNKNOWN, symbol, null);
		}
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
