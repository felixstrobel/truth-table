import Lexer from "../model/token/Lexer";
import Token from "../model/token/Token";
import TokenType from "../model/token/TokenType";
import Term from "../model/term/Term";
import BinaryTerm from "../model/term/BinaryTerm";
import UnaryTerm from "../model/term/UnaryTerm";
import Variable from "../model/term/Variable";
import OperatorFactory from "../model/operators/factory/OperatorFactory";
import Operator from "../model/operators/Operator";
import UnaryOperator from "../model/operators/UnaryOperator";

/**
 * TODO DOC
 *
 * @author Max Lohrmann <https://github.com/Max0440>
 */
export default class Parser {
	private readonly lexer: Lexer;
	private readonly variables: Set<string> = new Set();
	private operators: Operator[] = [];
	private currentToken: Token = new Token(TokenType.EOF, "", null);

	/**
	 * Constructs a {@link Parser} object.
	 *
	 * @param input The lexer used to generate the tokens.
	 */
	constructor(lexer: Lexer) {
		this.lexer = lexer;
	}

	/**
	 * Returns all variables in the parsed string or an empty set if the string
	 * hasn't been parsed.
	 *
	 * @returns all variables in the parsed string.
	 */
	public getVariables(): Set<string> {
		return this.variables;
	}

	/**
	 * Updates the current token to the next token from the string.
	 */
	private updateToken() {
		this.currentToken = this.lexer.nextToken();
	}

	/**
	 * Parses the expression and returns the resulting AST.
	 *
	 * @returns the term representing the AST.
	 */
	public parse(): Term {
		this.updateToken();

		this.operators = OperatorFactory.getAllOperators();
		this.operators.reverse();

		const term = this.parseTerm(0);

		if (this.currentToken.getTokenType() !== TokenType.EOF) {
			throw new Error("Unexpected token " + this.currentToken.getSymbol());
		}

		return term;
	}

	private parseTerm(index: number): Term {
		if (index >= this.operators.length) {
			return this.parenthesis();
		}

		// unary
		if (
			this.currentToken.getSymbol() === this.operators[index].getUnifiedSymbol() &&
			this.currentToken.getOperator() instanceof UnaryOperator
		) {
			let operator = this.currentToken.getOperator();
			this.updateToken();
			let term = this.parseTerm(index + 1);

			return new UnaryTerm(operator!, term);
		}

		// binary
		let leftTerm: Term = this.parseTerm(index + 1);
		let rightTerm: Term;

		while (this.currentToken.getSymbol() === this.operators[index].getUnifiedSymbol()) {
			let operator = this.currentToken.getOperator();
			this.updateToken();

			rightTerm = this.parseTerm(index + 1);

			leftTerm = new BinaryTerm(operator!, leftTerm, rightTerm);
		}

		return leftTerm;
	}

	private parenthesis(): Term {
		if (this.currentToken.getTokenType() !== TokenType.PARENTHESIS_OPEN) {
			return this.parseVariable();
		}

		this.updateToken();
		let term = this.parseTerm(0);

		if (this.currentToken.getTokenType() !== TokenType.PARENTHESIS_CLOSE) {
			throw new Error("Expected closing bracket");
		}

		this.updateToken();
		return term;
	}

	private parseVariable(): Term {
		if (this.currentToken?.getTokenType() === TokenType.ATOM) {
			this.variables.add(this.currentToken.getSymbol());
			let buf = new Variable(this.currentToken.getSymbol());
			this.updateToken();
			return buf;
		}

		throw new Error("Unexpected token " + this.currentToken.getSymbol());
	}
}

// A|(B&C)|C
// (A|(B&C))|C
// (A|B)|C
