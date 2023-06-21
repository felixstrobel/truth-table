import Lexer from "./model/token/Lexer";
import Parser from "./util/Parser";
import Term from "./model/term/Term";

const input = "A|A&B↔(A↔B)";

const lexer = new Lexer(input);
const parser = new Parser(lexer);
const term = parser.parse();

console.log("Formatted term:", term.toString());
console.table(termToTable(parser, term));

/**
 * Generator for var assignment.
 *
 * @param constants Set of constants.
 */
function* assignmentGenerator(constants: Set<string>) {
	for (let i = 0; i < Math.pow(2, constants.size); i++) {
		const binaryString = i.toString(2).padStart(constants.size, "0");

		let map = new Map<string, boolean>();

		Array.from(constants).forEach((value: string, index: number) => {
			map.set(value, binaryString.charAt(index) === "1");
		});

		yield map;
	}
}

/**
 * Table with all var assignments.
 *
 * @param parser Parser
 * @param term Term
 * @returns console.table compatible format
 */
function termToTable(parser: Parser, term: Term) {
	const it = assignmentGenerator(parser.getVariables());
	let a = [];

	for (const constants of it) {
		let x: any = {};

		for (const [key, val] of constants) {
			x[key] = val;
		}

		x["="] = term.eval(constants);

		a.push(x);
	}

	return a;
}
