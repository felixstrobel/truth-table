import Lexer from "./Lexer";
import Parser from "./Parser";
import ParserError from "./model/ParserError";
import Term from "./model/term/Term";

export type TableFormat = { [x: string]: boolean }[] | ParserError;

export const evaluate = (input: string): TableFormat => {
    if (input.length === 0) {
        return [];
    }

    const lexer = new Lexer(input);
    const parser = new Parser(lexer);

    let term;
    try {
        term = parser.parse();
    } catch (e) {
        if (e instanceof ParserError) {
            return e;
        }

        console.error(e);
        return [];
    }

    return generateTable(parser, term);
};

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

function generateTable(parser: Parser, term: Term): TableFormat {
    const generator = assignmentGenerator(parser.getVariables());
    const data: { [x: string]: boolean }[] = [];

    for (const constants of generator) {
        let row: {
            [x: string]: boolean;
        } = {};

        for (const [key, val] of constants) {
            row[key] = val;
        }

        row[term.toString()] = term.eval(constants);

        data.push(row);
    }

    return data;
}
