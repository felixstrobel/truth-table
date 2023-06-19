/**
 * Enumeration of token types for the {@link Lexer}.
 *
 * @author Max Lohrmann <https://github.com/Max0440>
 */
enum TokenType {
	/**
	 * Represents an atom token (e.g. variable).
	 */
	ATOM,

	/**
	 * Represents a unary connective token (e.g. not).
	 */
	UNARY_CONNECTIVE,

	/**
	 * Represents a binary connective token (e.g. and).
	 */
	BINARY_CONNECTIVE,

	/**
	 * Represents an opening parenthesis token.
	 */
	PARENTHESIS_OPEN,

	/**
	 * Represents an closing parenthesis token.
	 */
	PARENTHESIS_CLOSE,

	/**
	 * Represents an unknown token.
	 */
	UNKNOWN,

	/**
	 * Represents the end-of-file token.
	 */
	EOF,
}

export default TokenType;
