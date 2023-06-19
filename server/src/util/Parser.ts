import Lexer from './Lexer';
import Token from '../model/token/Token';

export default class Parser {
	private lexer: Lexer;
	private variables: string[] = [];

	constructor(lexer: Lexer) {
		this.lexer = lexer;
	}

	public parse() {
		let token;
		// new Connective('a', (a: boolean) => a);
		// TODO rewrite
		// while ((token = this.lexer.nextToken()).token !== Token.EOF) {
		// 	console.log(token);
		// }
	}
}

// A|(B&C)|C
// (A|(B&C))|C
// (A|B)|C
