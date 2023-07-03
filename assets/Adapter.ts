import Lexer from "./Lexer";
import Parser from "./Parser";
import ParserError from "./model/ParserError";
import Term from "./model/term/Term";

export type TableFormat = { [x: string]: boolean }[] | ParserError;

export const evaluate = (input: string, reverseSorting: boolean = false): TableFormat => {
    const expressions = input.split(",");
    if (expressions.length === 0 || (expressions.length === 1 && expressions[0] === "")) {
        return [];
    }

    const terms: Term[] = [];
    let variables: Set<string> = new Set();
    for (const expression of expressions) {
        const lexer = new Lexer(expression);
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

        terms.push(term);
        variables = new Set([...variables, ...parser.getVariables()]);
    }

    return generateTable(variables, terms, reverseSorting);
};

/**
 * Generator for var assignment.
 *
 * @param constants Set of constants.
 */
function* assignmentGenerator(constants: string[]) {
    for (let i = 0; i < Math.pow(2, constants.length); i++) {
        const binaryString = i.toString(2).padStart(constants.length, "0");

        let map = new Map<string, boolean>();

        Array.from(constants).forEach((value: string, index: number) => {
            map.set(value, binaryString.charAt(index) === "1");
        });

        yield map;
    }
}

function generateTable(
    variables: Set<string>,
    terms: Term[],
    reverseSorting: boolean
): TableFormat {
    const sortedVariables = [...variables].sort((a: string, b: string) => {
        if (reverseSorting) {
            return b.localeCompare(a);
        } else {
            return a.localeCompare(b);
        }
    });
    const generator = assignmentGenerator(sortedVariables);
    const data: { [x: string]: boolean }[] = [];

    for (const constants of generator) {
        let row: {
            [x: string]: boolean;
        } = {};

        for (const [key, val] of constants) {
            row[key] = val;
        }

        for (const term of terms) {
            row[term.toString()] = term.eval(constants);
        }

        data.push(row);
    }

    return data;
}
