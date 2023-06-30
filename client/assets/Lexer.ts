import Operator from "./model/operator/Operator";
import UnaryOperator from "./model/operator/UnaryOperator";
import BinaryOperator from "./model/operator/BinaryOperator";
import OperatorFactory from "./util/OperatorFactory";

import Token from "./model/token/Token";
import TokenType from "./model/token/TokenType";

/**
 * Performs lexical analysis on a given string.
 * It tokenizes the string by identifiers that can be changed.
 * For token types see {@link TokenType}.
 *
 * @todo Replace alternative symbols for operators
 *
 * @author Max Lohrmann <https://github.com/Max0440>
 */
export default class Lexer {
    private input: string;
    private location: number = -1;
    private operators: Operator[] = [];
    private previousToken: Token | null = null;

    /**
     * Constructs a {@link Lexer} object.
     *
     * @param input The input string to be processed by the lexer.
     */
    constructor(input: string) {
        this.input = input.replace(/\s/g, "");

        this.loadDefaultOperators();

        // TODO redo
        // place AND operators
        // let buf = this.input.charAt(0);
        // for (let i = 1; i < this.input.length; i++) {
        //     const currentChar = this.input.charAt(i);
        //     const previousChar = this.input.charAt(i - 1);
        //     if (currentChar.match(/[A-Z]/) && previousChar.match(/[A-Z]/)) {
        //         buf += "∧";
        //         buf += currentChar;
        //     } else {
        //         buf += currentChar;
        //     }
        // }
        // this.input = buf;
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
     * Loads the default operator (NOT, AND, OR, ...) into the lexer.
     */
    private loadDefaultOperators(): void {
        const allOperators = OperatorFactory.getAllOperators();

        for (const operator of allOperators) {
            this.addOperator(operator);
        }
    }

    private getNextOperator(): Operator | null {
        // create list with all alternative operator symbols associated with the unified symbol
        const operatorMap = new Map<string, Operator>();

        for (const operator of this.operators) {
            operatorMap.set(operator.getUnifiedSymbol(), operator);

            for (const alternativeSymbol of operator.getAlternativeSymbols()) {
                operatorMap.set(alternativeSymbol, operator);
            }
        }

        // sort map by operator length
        const sortedOperatorMap = new Map(
            [...operatorMap.entries()].sort((a: [string, Operator], b: [string, Operator]) => {
                return b[0].length - a[0].length;
            })
        );

        for (const entry of sortedOperatorMap.entries()) {
            if (this.input.length < this.location + entry[0].length) {
                continue;
            }
            if (this.input.substring(this.location, this.location + entry[0].length) === entry[0]) {
                this.location += entry[0].length - 1;
                return entry[1];
            }
        }

        return null;
    }

    /**
     * Performs lexical analysis on the input string and returns the next token
     * from the string.
     * For the possible token types see {@link TokenTypes}.
     * If the string is fully parsed the will return a EOL token.
     *
     * @returns The next token generated.
     */
    public nextToken(): Token {
        this.previousToken = this.extractToken();
        return this.previousToken;
    }

    private extractToken(): Token {
        if (this.input.length <= this.location + 1) {
            return new Token(TokenType.EOL, "", null);
        }

        this.location++;
        let currentCharacter: string = this.input.charAt(this.location);

        if (currentCharacter === "(") {
            const omittedOperator = this.omitAndOperator();
            if (omittedOperator) return omittedOperator;

            return new Token(TokenType.PARENTHESIS_OPEN, currentCharacter, null);
        }
        if (currentCharacter === ")") {
            return new Token(TokenType.PARENTHESIS_CLOSE, currentCharacter, null);
        }
        if (currentCharacter.match(/[01]/)) {
            const omittedOperator = this.omitAndOperator();
            if (omittedOperator) return omittedOperator;

            return new Token(TokenType.BOOLEAN, currentCharacter, null);
        }
        if (currentCharacter.match(/[a-zA-Z]/)) {
            const omittedOperator = this.omitAndOperator();
            if (omittedOperator) return omittedOperator;

            while (this.input.charAt(this.location + 1).match(/[0-9]/)) {
                this.location++;
                currentCharacter += this.input.charAt(this.location);
            }

            return new Token(TokenType.ATOM, currentCharacter.toUpperCase(), null);
        }

        const operator = this.getNextOperator();
        if (operator instanceof UnaryOperator) {
            return new Token(TokenType.UNARY_OPERATOR, operator.getUnifiedSymbol(), operator);
        } else if (operator instanceof BinaryOperator) {
            return new Token(TokenType.BINARY_OPERATOR, operator.getUnifiedSymbol(), operator);
        }

        return new Token(TokenType.UNKNOWN, currentCharacter, null);
    }

    private omitAndOperator(): Token | null {
        if (
            this.previousToken?.getTokenType() === TokenType.ATOM ||
            this.previousToken?.getTokenType() === TokenType.PARENTHESIS_CLOSE ||
            this.previousToken?.getTokenType() === TokenType.BOOLEAN
        ) {
            this.location--;

            const conjunction = OperatorFactory.createConjunction();
            return new Token(
                TokenType.BINARY_OPERATOR,
                conjunction.getUnifiedSymbol(),
                conjunction
            );
        }

        return null;
    }

    public getLocation(): number {
        return this.location;
    }

    public getInput(): string {
        return this.input;
    }
}
