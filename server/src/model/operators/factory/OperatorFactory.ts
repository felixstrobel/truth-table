import Operator from "../Operator";
import BinaryOperator from "../BinaryOperator";
import UnaryOperator from "../UnaryOperator";

/**
 * The OperatorFactory creates the operators, supported by default.
 * Those default operators are: Negation, Conjunction, NAND, Disjunction, NOR, Conditional, Biconditional, Exclusive
 * Disjunction.
 *
 * @author Felix Strobel <https://github.com/felixstrobel>
 */
class OperatorFactory {

    public static createNegation(): Operator {
        return new UnaryOperator((x: boolean) => !x, "¬", ["!", "~"]);
    }

    public static createConjunction(): Operator {
        return new BinaryOperator((x: boolean, y: boolean) => x && y, "∧", ["&", "&&"]);
    }

    public static createNAND(): Operator {
        return new BinaryOperator((x: boolean, y: boolean) => !(x && y), "⊼", ["¬∧", "¬&", "¬&&", "!∧", "!&", "!&&", "~∧", "~&", "~&&"]);
    }

    public static createDisjunction(): Operator {
        return new BinaryOperator((x: boolean, y: boolean) => x || y, "∨", ["|", "||"]);
    }

    public static createNOR(): Operator {
        return new BinaryOperator((x: boolean, y: boolean) => !(x || y), "⊽", ["¬∨", "¬|", "¬||", "!∨", "!|", "!||", "~∨", "~|", "~||"]);
    }

    public static createConditional(): Operator {
        return new BinaryOperator((x: boolean, y: boolean) => !x || y, "→", [">", "->", "=>"]);
    }

    public static createBiconditional(): Operator {
        return new BinaryOperator((x: boolean, y: boolean) => (x && y) || (!x && !y), "↔", ["=", "==", "<>", "<->", "<=>"]);
    }

    public static createExclusiveDisjunction(): Operator {
        return new BinaryOperator((x: boolean, y: boolean) => (!x && y) || (x && !y), "↮", ["!=", "<!>", "<!=>"]);
    }
}

export default OperatorFactory;