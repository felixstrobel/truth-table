/**
 * Represents a abstract node in an AST used to represent propositional formulas.
 *
 * @author Felix Strobel <https://github.com/felixstrobel>
 * @author Max Lohrmann <https://github.com/Max0440>
 */
export default abstract class Term {
  protected leftChild: Term | null;
  protected rightChild: Term | null;

  /**
   * Constructs a {@link Term}.
   *
   * @param leftChild The left child of the AST.
   * @param rightChild The right child of the AST.
   */
  constructor(leftChild: Term | null, rightChild: Term | null) {
    this.leftChild = leftChild;
    this.rightChild = rightChild;
  }

  /**
   * Evaluates the term recursively based on the given variable assignment.
   *
   * @param variableAssignment The variable assignment.
   * @returns The evaluation of the term.
   */
  public abstract eval(variableAssignment: Map<string, boolean>): boolean;

  public abstract toString(): string;
}
