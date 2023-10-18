import Operator from "../operator/Operator";
import TokenType from "./TokenType";

/**
 * Represents a token used in the lexer.
 *
 * @author Max Lohrmann <https://github.com/Max0440>
 */
export default class Token {
    private readonly tokenType: TokenType;
    private readonly symbol: string;
    private readonly operator: Operator | null;

    /**
     * Constructs a {@link Token} object.
     *
     * @param tokenType The type of the token.
     * @param symbol The symbol associated with the token.
     * @param operator The operator associated with the token ot null if the token doesn't have an operator.
     */
    constructor(tokenType: TokenType, symbol: string, operator: Operator | null = null) {
        this.tokenType = tokenType;
        this.symbol = symbol;
        this.operator = operator;
    }

    /**
     * Returns the type of the token.
     *
     * @returns The type of the token.
     */
    public getTokenType(): TokenType {
        return this.tokenType;
    }

    /**
     * Returns the symbol associated with the token.
     * @returns The symbol associated with the token.
     */
    public getSymbol(): string {
        return this.symbol;
    }

    /**
     * Returns the symbol associated with the token.
     * @returns The symbol associated with the token.
     */
    public getOperator(): Operator | null {
        return this.operator;
    }
}
