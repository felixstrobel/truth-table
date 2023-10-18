/**
 * The Operator class is the blueprint for all operators supported by the {@link Parser}.
 *
 * @author Felix Strobel <https://github.com/felixstrobel>
 */
abstract class Operator {
  /**
   * The symbol that is primarily used and all alternative symbols are replaced by. Furthermore, this symbol is the
   * one shown in the final truth table.
   */
  private unifiedSymbol: string;

  /**
   * The symbols that can be used as synonyms for the {@link unifiedSymbol}.
   */
  private alternativeSymbols: string[];

  protected constructor(unifiedSymbol: string, alternativeSymbols: string[]) {
    this.unifiedSymbol = unifiedSymbol;
    this.alternativeSymbols = alternativeSymbols;
  }

  abstract evaluate(...assignments: boolean[]): boolean;

  /**
   * Getter for the unified symbol of the operator.
   *
   * @returns the unified symbol
   */
  public getUnifiedSymbol(): string {
    return this.unifiedSymbol;
  }

  /**
   * Getter for the alternative symbols - synonyms - of the operator.
   *
   * @returns the alternative symbols
   */
  public getAlternativeSymbols(): string[] {
    return this.alternativeSymbols;
  }
}

export default Operator;
