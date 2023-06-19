import Lexer from "./Lexer";
import Token from "../model/token/Token";

/**
 * TODO DOC
 *
 * @author Max Lohrmann <https://github.com/Max0440>
 */
export default class Parser {
	private lexer: Lexer;
	private variables: string[] = [];

	/**
	 * Constructs a {@link Parser} object.
	 *
	 * @param input The lexer used to generate the tokens.
	 */
	constructor(lexer: Lexer) {
		this.lexer = lexer;
	}

	public parse() {
		const tokens = this.lexer.lex();

		for (const token of tokens) {
			// TODO handle token siht
		}
	}
}

// A|(B&C)|C
// (A|(B&C))|C
// (A|B)|C
