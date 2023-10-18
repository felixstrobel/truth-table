/**
 * Enumeration of token types for the {@link Lexer}.
 *
 * @author Max Lohrmann <https://github.com/Max0440>
 */
enum TokenType {
  /**
   * Represents a boolean token (0 and 1).
   */
  BOOLEAN,

  /**
   * Represents an atom token (e.g. variable).
   */
  ATOM,

  /**
   * Represents an unary operator token (e.g. not).
   */
  UNARY_OPERATOR,

  /**
   * Represents a binary operator token (e.g. and).
   */
  BINARY_OPERATOR,

  /**
   * Represents an opening parenthesis token.
   */
  PARENTHESIS_OPEN,

  /**
   * Represents a closing parenthesis token.
   */
  PARENTHESIS_CLOSE,

  /**
   * Represents an unknown token.
   */
  UNKNOWN,

  /**
   * Represents the end-of-file token.
   */
  EOL,
}

export default TokenType;
