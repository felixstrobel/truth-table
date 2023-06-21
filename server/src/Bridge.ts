import Lexer from "./model/token/Lexer";
import Parser from "./util/Parser";

export default class Bridge {
	public static parse(input: string): any {
		const lexer = new Lexer(input);
		const parser = new Parser(lexer);

		const term = parser.parse();
		const generator = this.assignmentGenerator(parser.getVariables());

		let a = [];

		for (const constants of generator) {
			let x: any = {};

			for (const [key, val] of constants) {
				x[key] = val;
			}

			x["="] = term.eval(constants);

			a.push(x);
		}

		return a;
	}

	/**
	 * Generator for var assignment.
	 *
	 * @param variables Set of constants.
	 */
	private static assignmentGenerator(variables: Set<string>) {
		function* generator() {
			for (let i = 0; i < Math.pow(2, variables.size); i++) {
				const binaryString = i.toString(2).padStart(variables.size, "0");

				let map = new Map<string, boolean>();

				Array.from(variables).forEach((value: string, index: number) => {
					map.set(value, binaryString.charAt(index) === "1");
				});

				yield map;
			}
		}

		return generator();
	}
}
