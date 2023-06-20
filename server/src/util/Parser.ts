import Lexer from "../model/token/Lexer";
import Token from "../model/token/Token";
import TokenType from "../model/token/TokenType";
import Term from "../model/term/Term";
import BinaryTerm from "../model/term/BinaryTerm";
import UnaryTerm from "../model/term/UnaryTerm";
import Variable from "../model/term/Variable";

/**
 * TODO DOC
 *
 * @author Max Lohrmann <https://github.com/Max0440>
 */
export default class Parser {
	private readonly lexer: Lexer;
	private readonly variables: Set<string> = new Set();
	private tokens: Token[] = [];
	private currentToken: Token | null = null;

	/**
	 * Constructs a {@link Parser} object.
	 *
	 * @param input The lexer used to generate the tokens.
	 */
	constructor(lexer: Lexer) {
		this.lexer = lexer;
	}

	public parse(): Term {
		this.updateToken();
		return this.or();
	}

	private updateToken() {
		this.currentToken = this.lexer.nextToken();
	}

	private or(): Term {
		let x: Term = this.and();
		let y: Term;

		while (this.currentToken !== null && this.currentToken.getSymbol() === "∨") {
			let op = this.currentToken.getOperator();
			this.updateToken();
			y = this.and();
			x = new BinaryTerm(op!, x, y);
		}

		return x;
	}

	private and(): Term {
		let x: Term = this.not();
		let y: Term;

		while (this.currentToken !== null && this.currentToken.getSymbol() === "∧") {
			let op = this.currentToken.getOperator();
			this.updateToken();
			y = this.not();
			x = new BinaryTerm(op!, x, y);
		}

		return x;
	}

	private not(): Term {
		if (this.currentToken?.getSymbol() === "¬") {
			let op = this.currentToken.getOperator();
			this.updateToken();
			let y = this.not();

			return new UnaryTerm(op!, y);
		}

		// TODO Klammern

		if (this.currentToken?.getTokenType() === TokenType.ATOM) {
			this.variables.add(this.currentToken.getSymbol());
			let buf = new Variable(this.currentToken.getSymbol());
			this.updateToken();
			return buf;
		}

		throw new Error("what?");
	}
}

// A|(B&C)|C
// (A|(B&C))|C
// (A|B)|C
