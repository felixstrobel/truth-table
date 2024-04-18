import Lexer from "./Lexer";
import Parser from "./Parser";
import ParserError from "./model/ParserError";
import Term from "./model/term/Term";

export type TableDataType = {
    expression: string;
    value: boolean;
    type: "variable" | "expression";
};
export type TableRowType = TableDataType[];
export type TableFormat = TableRowType[] | ParserError;

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
    const data: TableFormat = [];

    for (const constants of generator) {
        let row: TableRowType = [];

        for (const [key, val] of constants) {
            row.push({
                expression: key,
                value: val,
                type: "variable",
            });
        }

        for (const term of terms) {
            // remove brackets at start and the end
            let expression = term.toString();
            if (expression.startsWith("(") && expression.endsWith(")")) {
                expression = expression.slice(1, expression.length - 1);
            }

            row.push({
                expression: expression,
                value: term.eval(constants),
                type: "expression",
            });
        }

        data.push(row);
    }

    return data;
}
